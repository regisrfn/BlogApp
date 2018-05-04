import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'

export default () => {
    return axios.create({
        baseURL: process.env.DATABASE_API,
        headers: {'token': store.getters[types.TOKEN], 'user': store.getters[types.AUTHOR]}
    })
}
