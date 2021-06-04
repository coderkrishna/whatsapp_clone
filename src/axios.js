import axios from 'axios';

const instance = axios.create({
    baseURL:"https://whatsappbackend01.herokuapp.com"
})

export default instance;