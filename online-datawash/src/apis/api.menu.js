import React, {Component} from 'react'
import code from '../assets/code.png'
import axios from "axios";

export default class ApiMenu extends Component {

    teste(){
        const url = 'http://localhost:52231/api/montamenu/montamenu';
        axios.get(url)
        // .then(response => {
        //     const item = response.data
        //     for (var [key ,value] of Object.entries(item)) {
        //         console.log(value)
        //         let funcionalidade = value
        //         for (var [key, value] of Object.entries(funcionalidade)) {
        //             let chave = key
        //             let valor = value
        //             console.log('funcionalidade',chave, valor)
        //             if(valor === 38) {
        //             console.log('ok')
        //             return (
        //                 <h1>item 38</h1>
        //             )}
        //             if (valor === 1) {
        //                 console.log('ok')
        //             }
        //             if (valor === 12) {
        //                 console.log('ok')
        //             }
        //             if (valor === 47) {
        //                 console.log('ok')
        //             }
        //             if (valor === 25) {
        //                 console.log('ok')
        //             }
        //             if (valor === 18) {
        //                 console.log('ok')
        //             }
        //             if (valor === 6) {
        //                 console.log('ok')
        //             }
                    
        //             if (valor === 48) {
        //                 console.log('ok')
        //             }
        //         }
        //     }
        // }).catch(error => {
        //     console.log('error', error)
        // })

    }
    render(){
        return(
            <div onChange={this.teste()}>
                <h1 >localStorage.getItem('user') => esse comando vai pegar o valor do token no localStorage</h1>
                <h2>o valor do token devera ser armazenado numa variavel e ser comparado com o valor anterior do token</h2>
                <img src={code} alt="Logo" />

            </div>
        )
    }
}


