import React, { Component } from 'react'
import user from '../assets/user.png'
import lupa from '../assets/consulta.png'
import mailing from '../assets/mailing.png'
import sms from '../assets/mensagem.png'
import { Grafico1, Grafico2, Grafico3 } from './graficos'
import { Spinner } from './input-button'
import './components.scss'

export class DashBoard extends Component {

    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
    componentDidUpdate() {

        setTimeout(() => { this.handleLoad() }, 3000);
    }
    handleLoad() {
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className='d-flex justify-content-center align-content-center w-100'>
                {/* <ViewDashboard /> */}
                {this.state.loading ? <Spinner /> : <ViewDashboard />}
            </div>
        )
    }
}

const ViewDashboard = () => (
    <div className='dashboard'>
        <p className='col-12 h6'>DashBoard</p>
        <div className='d-flex w-100 panel col-12'>
            <div className='col bg-white m-2 panel-div rounded d-flex justify-content-center align-items-center p-3'>
                <div className=' bg-panel bg-info rounded-circle d-flex justify-content-center align-items-center '>
                    <img src={lupa} />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                    <p className='h5 m-0 text-info'>Enriquecimento</p>
                    <p className='m-0'><b>246.311</b></p>
                </div>
            </div>
            <div className='col bg-white m-2 panel-div rounded d-flex justify-content-center align-items-center p-3'>
                <div className=' bg-panel bg-info rounded-circle d-flex justify-content-center align-items-center'>
                    <img src={mailing} />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                    <p className='h5 m-0 text-info'>Mailing List</p>
                    <p className='m-0'><b>174.216</b></p>
                </div>
            </div>
            <div className='col bg-white m-2 panel-div rounded d-flex justify-content-center align-items-center p-3'>
                <div className=' bg-panel bg-info rounded-circle d-flex justify-content-center align-items-center'>
                    <img src={user} />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                    <p className='h5 m-0 text-info'>Usuários</p>
                    <p className='m-0'><b>1.066</b></p>
                </div>
            </div>
            <div className='col bg-white m-2 panel-div rounded d-flex justify-content-center align-items-center p-3'>
                <div className=' bg-panel bg-info rounded-circle d-flex justify-content-center align-items-center '>
                    <img src={sms} />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                    <p className='h5 m-0 text-info'>SMS</p>
                    <p className='m-0'><b>1</b></p>
                </div>
            </div>
        </div>
        <div className='w-100 col-12 panel'>
            <div className='d-flex justify-content-center  align-items-center'>
                <div className='w-100 bg-white panel-div__second flex-wrap d-flex justify-content-center align-items-center p-3 rounded'>
                    <p className='h5 m-0 text-info w-100'>Consulta</p>

                    <div className='d-flex w-100 flex-column justify-content-center align-items-center p-2 dashboard-grafic'>
                        <Grafico1 />
                    </div>
                </div>
            </div>
            {/* <div className='d-flex justify-content-center align-items-center'>
                <div className='w-100 bg-white m-2 panel-div__second panel-div__second--first flex-wrap d-flex justify-content-center align-items-center p-3 rounded'>
                    <p className='h5 m-0 text-info w-100'>Web Service</p>

                    <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                        <Grafico2 />
                    </div>
                </div>

                <div className='col bg-white m-2 panel-div__second d-flex flex-wrap justify-content-center align-items-center p-3 rounded  '>
                    <p className='h5 m-0 text-info w-100'>Consulta</p>

                    <div className='d-flex mr-5 flex-column justify-content-center align-items-center p-2 panel-text'>
                        <Grafico3 />
                    </div>
                </div>
            </div> */}
        </div>


    </div>
)