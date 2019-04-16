
import { create } from 'apisauce'
import axios from 'axios'
// import axios from 'axios'
// import { getUser } from './local-storage'

export const apiLogin = create({
    baseURL: 'http://localhost:52231/api/login',
    mode: 'cors',
    headers: ({
        'Content-type': 'application/json',
    })
});

apiLogin.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export const apiMenu = axios.create({
    baseURL: 'http://localhost:52231/api/montamenu/montamenu'
});

apiMenu.interceptors.request.use(async config => {
    const token = localStorage.getItem('auth-token', token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

});

// export const apiConsultaCPF = axios.creat ({
//     baseURL: 'http://localhost:52231/api/consultaCpf/consultaCpf/'
// })

// apiConsultaCPF.interceptors.request.use(async config => {
//     const token = localStorage.getItem('auth-token', token);
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;

// });




