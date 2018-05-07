<template>
    <div class="container pt-3">
        <div class="d-flex justify-content-between">
            <h2 class="mb-0"> <i class="fas fa-user mr-3"></i>ABOUT</h2>
            <button class="btn btn-success btn-sm" v-if="!editON" v-on:click="edit">Edit</button>
            <div v-else>
                <button class="btn btn-success mb-1 btn-sm" v-on:click="submit">Save</button>
                <button class="btn btn-warning mb-1 btn-sm" v-on:click="cancel">Cancel</button>
            </div>
        </div>
        <hr>
        <div class="text-left">
            <div class="row" v-if="!editON">
                <h5 v-for="(item,index) in keys" :key="index" class="col-md-6">
                    <strong class="mr-1">{{item}}: </strong>{{user[item.toLowerCase()]}}
                </h5>
            </div>
            <div class="row" v-else>
                <h5 v-for="(item,index) in keys" :key="index" class="col-md-6">
                    <strong class="mr-1">{{item}}</strong>
                    <select class="form-control" id="country" v-if="item == 'Country'" v-model="newUser.country">
                        <option v-for="(country,index) in countries" :key="index"
                        :value="country.name">{{country.name}}</option>
                    </select>
                    <input v-else class="form-control"
                        :value="user[item.toLowerCase()]"
                        @blur="onChange(item.toLowerCase(), $event.target.value)">
                </h5>
            </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
            <h3 class="mb-0"> <i class="fas fa-info mr-3"></i>Activity</h3>
        </div>
    </div>
</template>

<script>
import * as types from '../../../store/types.js'
import database from '../../../services/database.js'
import countries from '../../../store/countries.js'
// import toastr from 'toastr'

export default {
    data () {
        return {
            editON: false,
            newUser: {},
            keys: ['Name', 'Username', 'City', 'Country', 'Birthday', 'Phone', 'Interests', 'Email', 'Website'],
            countries
        }
    },
    computed: {
        user () {
            return this.$store.getters[types.USER_PAGE]
        }
    },
    methods: {
        submit () {
            this.editON = !this.editON
            if (this.newUser) {
                database.editUserPage(this.$store.getters[types.AUTHOR], this.newUser)
                    .then((response) => {
                        if (response.data.status) {
                            // console.log(response.data.userEdited)
                            var editedUser = Object.assign(this.user, response.data.userEdited)
                            // console.log(editedUser)
                            this.$store.dispatch(types.setUserPage, editedUser)
                        }
                    })
                    .catch(() => {
                        this.$router.push('/user/login')
                    })
            }
        },
        cancel () {
            this.editON = !this.editON
        },
        edit () {
            // this.newUser = Object.assign({}, this.user)
            this.editON = !this.editON
        },
        onChange (key, value) {
            if (value !== this.user[key]) {
                this.newUser[key] = value
            }
            // console.log(this.newUser)
        }
    }
}
</script>
