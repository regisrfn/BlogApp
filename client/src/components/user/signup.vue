<template>
    <div class="d-flex justify-content-center">
        <form v-on:submit.prevent="submit">
            <h1>Sign Up</h1>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" class="form-control" id="email"  placeholder="Enter email"
                    @blur="$v.email.$touch()">
                    <div v-if="$v.email.$error" class="alert alert-danger alert-dismissible fade show mt-1" role="alert">
                        <strong>Error</strong> Please provide a valid email address
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="username" class="form-control" id="username"  placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password"  placeholder="Enter        password"
                @blur="$v.password.$touch()">
                <div v-if="$v.password.$error" class="alert alert-danger alert-dismissible fade show mt-1"      role="alert">
                    <strong>Error</strong> Please provide a valid password. (Minimun size equals to {{$v.password.$params.minLength.min}} )
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword"          placeholder="Enter confirmPassword"
                @blur="$v.confirmPassword.$touch()">
                <div v-if="$v.confirmPassword.$error" class="alert alert-danger alert-dismissible fade show mt-1"       role="alert">
                    <strong>Error</strong> Password not matching
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <button type="submit" class="btn btn-success w-100">Submit</button>
        </form>
    </div>
</template>

<script>
/*eslint-disable */
import toastr from 'toastr'
import database from '../../services/database.js'
import * as types from '../../store/types.js'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
    data () {
        return {
            email: null,
            username: null,
            password: null,
            confirmPassword: null
        }
    },
    methods: {
        async submit () {
            if(!this.$v.$invalid){
                const user = {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }
                const response = await database.signup(user)
                const status = response.data.status
                console.log(response.data)
                if (status) {
                    const authData = {
                        token: response.data.token,
                        username: response.data.username
                    }
                    localStorage.setItem('token', authData.token)
                    localStorage.setItem('username', authData.username)
                    this.$store.dispatch(types.SET_AUTH_DATA, authData)
                }
            } else {
                toastr.error('Please fill up all the fields.', 'Empty Fields!')
            }
        }
    },
    validations: {
        email: {
            email,
            required
        },
        password: {
            required,
            minLength: minLength(6)
        },
        confirmPassword: {
        sameAs: sameAs('password')
        }
    }
}
</script>
