import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'

export default () => {
  return axios.create({
    // baseURL: 'http://app-server.westus.cloudapp.azure.com:8081'
    baseURL: 'http://localhost:8081',
    headers: {'token': store.getters[types.TOKEN]}
  })
}
