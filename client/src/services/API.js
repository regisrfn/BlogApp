import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://app-server.westus.cloudapp.azure.com'
    // baseURL: 'http://localhost:8081'
  })
}
