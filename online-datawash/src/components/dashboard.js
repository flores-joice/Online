import React, { Component } from 'react'
import user from '../assets/user.png'
import mailing from '../assets/mailing.png'
import sms from '../assets/mensagem.png'
import graficoConsulta from '../assets/graficoConsulta.jpg'
import graficoWeb from '../assets/webService.jpg'
import { Grafico1, Grafico2, Grafico3 } from './graficos'
import './components.scss'

export class DashBoard extends Component {

    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
    componentDidUpdate() {

        setTimeout(() => { this.handleLoad() }, 6000);
    }
    handleLoad() {
        this.setState({ loading: false })
    }

    render() {
        return (
            <div className='h-75 d-flex justify-content-center align-content-center'>
                
            { this.state.loading ? <Spinner /> : <ViewDashboard /> }
            </div>
        )
    }
}

const Spinner = () => (
    <div className='spinner d-flex justifi-content-center align-items-center'>
        <div></div>
    </div>
)

const ViewDashboard = () => (
    <div className='d-flex align-items-center w-100 flex-wrap px-5'>

        <div className='d-flex w-100 panel justify-content-center flex-column align-items-center col-4'>
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
        <div className='d-flex col-8 justify-content-center  align-items-center'>
            <div className='w-100 bg-white m-2 panel-div__second panel-div__second--first flex-wrap d-flex justify-content-center align-items-center p-3 rounded  '>
                <p className='h5 m-0 text-info w-100'>Enriquecimento</p>

                <div className='d-flex mr-5 flex-column justify-content-center align-items-center p-2 panel-text'>
                    <Grafico1 />
                </div>
            </div>
        </div>
        <div className='d-flex col-12 w-100 justify-content-center align-items-center'>
            <div className='col bg-white mr-1 panel-div__second d-flex flex-wrap justify-content-center align-items-center p-3 rounded  '>
                <p className='h5 m-0 text-info w-100'>Web Service</p>

                <div className='d-flex flex-column mr-5 justify-content-center align-items-center p-2 panel-text'>
                    <Grafico2 />
                </div>
            </div>

            <div className='col bg-white m-2 panel-div__second d-flex flex-wrap justify-content-center align-items-center p-3 rounded  '>
                <p className='h5 m-0 text-info w-100'>Consulta</p>

                <div className='d-flex mr-5 flex-column justify-content-center align-items-center p-2 panel-text'>
                    <Grafico3 />
                </div>
            </div>
        </div>

    </div>
)