
import { create } from 'apisauce'
import axios from 'axios'
// import axios from 'axios'
// import { getUser } from './local-storage'

export const api = create({
    baseURL : 'http://localhost:52231/api/login',
    mode: 'cors',
    headers: ({
        'Content-type' : 'application/json',
      })
});

api.addResponseTransform(response => {
    if(!response.ok) throw response;
});

export const apiMenu = axios.create({
    baseURL : 'http://localhost:52231/api/montamenu/montamenu'
});

apiMenu.interceptors.request.use(async config => {
        const token = localStorage.getItem
        ('auth-token', token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config ;
        
    });
