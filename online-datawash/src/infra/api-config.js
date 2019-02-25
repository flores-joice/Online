import { create } from 'apisauce'
// import axios from 'axios'
// import { getUser } from './local-storage'

const api = create({
    baseURL : 'http://localhost:52231/api/login',
    mode: 'cors',
    headers: ({
        'Content-type' : 'application/json',
      })
});

api.addResponseTransform(response => {
    if(!response.ok) throw response;
});

// function api(){
//     const user = getUser()
//     if(user){
//         config.headers = {
//             user : user
//         }
//     }
//     return axios.create(config)
//  }

// export function startServer(){
//     const url ='/ping'

//     return api().post(url)
// }

export default api