import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'

export default () => {
  return axios.create({
    // baseURL: 'http://app-server.westus.cloudapp.azure.com:8081'
    baseURL: 'https://frozen-dawn-21965.herokuapp.com',
    headers: {'token': store.getters[types.TOKEN], 'user': store.getters[types.AUTHOR]}
  })
}
