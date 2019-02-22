import React from 'react'
import axios from "axios";

export default function ApiMenu() {
    axios.get('http://localhost:52231/api/montamenu/montamenu')
    .then(response => {
        const item = response.data
        for (var [value] of Object.entries(item)) {
            let funcionalidade = value
            for (var [key, value] of Object.entries(funcionalidade)) {
                let chave = key
                let valor = value
                console.log('funcionalidade',chave, valor)
                if(valor === 38) {
                console.log('ok')
                return (
                    <h1>item 38</h1>
                )}
                if (valor === 1) {
                    console.log('ok')
                }
                if (valor === 12) {
                    console.log('ok')
                }
                if (valor === 47) {
                    console.log('ok')
                }
                if (valor === 25) {
                    console.log('ok')
                }
                if (valor === 18) {
                    console.log('ok')
                }
                if (valor === 6) {
                    console.log('ok')
                }
                
                if (valor === 48) {
                    console.log('ok')
                }
            }
        }
    })
}


