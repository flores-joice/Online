import React, { Component } from 'react'
import { Grafico1 } from '../components/graficos'
import './pages.scss'

export default class Monitoracao extends Component {
    constructor() {
        super()
        this.state = {
            view: ''
        }
    }

    handleGrafic = () => {
        this.setState({
            view:
                <div className='bg-light rounded p-4 mt-2 w-100 d-flex flex-column align-items-center'>
                    
                    <div className='mb-3 border-bottom border-info pb-3 w-75 d-flex flex-column align-items-center'>
                        <p className='h4 w-75'>Consultas por período</p>
                        <Grafico1 />
                    </div>
                    
                    <div className='mb-3 border-bottom border-info pb-3 w-75 d-flex flex-column align-items-center'>
                        <p className='h4 w-75'>Tempos de execução</p>
                        <Grafico1 />
                    </div>
                    
                    <div className='mb-3 w-75 d-flex flex-column align-items-center'>
                        <p className='h4 w-75'>10 maiores clientes no período</p>
                        <Grafico1 />
                    </div>
                </div>
        })
    }

    render() {
        return (
            <div className='marginPage'>
                <p className='dashboard-title h4 text-info'>Monitoração</p>
                <div className='d-flex bg-light rounded p-2 border border-info'>

                    <div class="input-group mr-2r">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Período</span>
                        </div>
                        <input type="date" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1" />
                        <input type="date" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mr-2">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Cliente</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Escolher...</option>
                            <option value="1">Sistema</option>
                            <option value="2">PGA</option>
                            <option value="3">InfoQualy</option>
                        </select>
                    </div>
                    <button className='btn btn-info monit-button' onClick={this.handleGrafic}>Gerar gráficos</button>
                </div>

                <div className='w-100 d-flex justify-content-center '>
                    {this.state.view}
                </div>
            </div>
        )
    }
}