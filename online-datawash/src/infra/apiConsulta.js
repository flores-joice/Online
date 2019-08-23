import axios from "axios"

export function consultaCpf(user1, token) {

    axios.get(`http://localhost:52231/api/consultaCpf/${user1}`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'mode': 'no-cors',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}
