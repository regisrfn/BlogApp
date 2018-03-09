import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://blogapp.eastus.cloudapp.azure.com:8081'
  })
}
