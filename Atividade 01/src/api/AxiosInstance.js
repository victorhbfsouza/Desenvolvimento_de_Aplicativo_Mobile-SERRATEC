import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'http://192.168.0.115:8080/api'
})

export default AxiosInstance;