import React, { Component } from 'react'
import user from '../assets/user.png'
import mailing from '../assets/mailing.png'
import sms from '../assets/mensagem.png'
import web from '../assets/webService.png'
import enriquecer from '../assets/enriquecimento.png'
import consulta from '../assets/consulta.png'
import graficoConsulta from '../assets/graficoConsulta.jpg'
import graficoEnriq from '../assets/graficoEnriq.jpg'
import graficoWeb from '../assets/webService.jpg'
import './components.scss'

export class DashBoard extends Component {


    render() {
        return (
            <div className='d-flex flex-column align-items-center w-100'>

                <div className='d-flex w-100 justify-content-center'>
                    <div className='col-3 bg-light m-3 panel-div rounded d-flex '>
                        <div className='rounded-left bg-panel  panel-img d-flex justify-content-center align-items-center'>
                            <img src={mailing} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>Mailing List</p>
                            <p className='m-0'>174.216</p>
                        </div>
                    </div>
                    <div className='col-3 bg-light m-3 panel-div rounded d-flex '>
                        <div className='rounded-left bg-panel panel-img d-flex justify-content-center align-items-center'>
                            <img src={user} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>Usuários</p>
                            <p className='m-0'>1.066</p>
                        </div>
                    </div>
                    <div className='col-3 bg-light m-3 panel-div rounded d-flex '>
                        <div className='rounded-left bg-panel panel-img d-flex justify-content-center align-items-center '>
                            <img src={sms} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>SMS</p>
                            <p className='m-0'>1</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-center align-items-center px-5 panel-container'>
                    <div className='col-4 bg-light m-2 panel-div__second rounded d-flex '>
                        <div className='rounded-left bg-panel panel-img d-flex justify-content-center align-items-center'>
                            <img src={web} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>Web Service</p>
                            <img src={graficoWeb} />
                        </div>
                    </div>
                    <div className='col-4 bg-light m-2 panel-div__second rounded d-flex '>
                        <div className='rounded-left bg-panel panel-img d-flex justify-content-center align-items-center'>
                            <img src={enriquecer} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>Enriquecimento</p>
                            <img src={graficoEnriq} />
                        </div>
                    </div>
                    <div className='col-4 bg-light m-2 panel-div__second rounded d-flex '>
                        <div className='rounded-left bg-panel panel-img d-flex justify-content-center align-items-center'>
                            <img src={consulta} />
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center p-2 panel-text'>
                            <p className='h5 m-0'>Consulta</p>
                            <img src={graficoConsulta} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}