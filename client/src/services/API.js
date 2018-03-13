import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://app-server.westus.cloudapp.azure.com:8081'
    // baseURL: 'http://localhost:8081'
  })
}
