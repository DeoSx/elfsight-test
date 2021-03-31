import axios from 'axios'

const _axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default _axios
