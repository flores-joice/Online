
import { create } from 'apisauce'
import axios from 'axios'
// import axios from 'axios'
// import { getUser } from './local-storage'

const token = localStorage.getItem('auth-token')

const Headers = {
    "Access-Control-Allow-Origin": "*",
    'mode': 'no-cors',
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
}

export const apiLogin = create({
    baseURL: 'http://localhost:52231/api/login',
    mode: 'cors',
    headers: Headers
})

apiLogin.addResponseTransform(response => {
    if (!response.ok) throw response;
})

export const apiMenu = axios.create({
    baseURL: 'http://localhost:52231/api/montamenu/montamenu'
})

apiMenu.interceptors.request.use(async config => {
    const token = localStorage.getItem('auth-token')     
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

})

export const requestCpf = create({
    baseURL : 'http://localhost:52231/api/consultaCpf/',
    headers: Headers
})

