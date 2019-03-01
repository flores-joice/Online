import React, {Component} from 'react'
import { apiMenu } from '../infra/api-config';

export default class ApiMenu extends Component {

    teste = async () => {
        try{
            const response = await apiMenu.post()
            console.log('ApiMenu.js', response)
        } catch {

        }
    }
    render(){
        return(
            <div onChange={this.teste}>
              

            </div>
        )
    }
}


