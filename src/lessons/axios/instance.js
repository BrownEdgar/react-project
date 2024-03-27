import axios from "axios";



const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout:1100,
})

export default  instance;