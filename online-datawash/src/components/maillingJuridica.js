import React, { Component } from 'react'
import { Localizacao, Exclusoes, Resumo, Conclusao } from './maillingFisica'
import MailingList from '../pages/mailingList'
import './components.scss'

export default class MailingListPessJuridica extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <Localizacao avancar={(e) => this.handleRender('ramo')} cancelar={(e) => this.handleRender('mailling')} />
        }
    }

    handleRender(id) {
        if (id === 'ramo') {
            this.setState({ view: <Ramo clickNext={(e) => this.handleRender('porte')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'porte') {
            this.setState({ view: <Porte clickNext={(e) => this.handleRender('natureza')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'natureza') {
            this.setState({ view: <Natureza clickNext={(e) => this.handleRender('faturamento')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'faturamento') {
            this.setState({ view: <Faturamento clickNext={(e) => this.handleRender('funcionarios')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'funcionarios') {
            this.setState({ view: <Funcionarios clickNext={(e) => this.handleRender('chave')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'chave') {
            this.setState({ view: <PalavraChave clickNext={(e) => this.handleRender('idadeEmpresa')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'idadeEmpresa') {
            this.setState({ view: <IdadeEmpresa clickNext={(e) => this.handleRender('exclusoes')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'exclusoes') {
            this.setState({ view: <Exclusoes clickNext={(e) => this.handleRender('resumo')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'resumo') {
            this.setState({ view: <Resumo clickNext={(e) => this.handleRender('conclusao')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'conclusao') {
            this.setState({ view: <Conclusao clickFim={(e) => this.handleRender('conclusao')} clickCancel={(e) => this.handleRender('mailling')} /> })
        }
        if (id === 'mailling') {
            this.setState({ view: <MailingList /> })
        }

    }

    render(props) {
        return (
            <div className=' d-flex justify-content-center'>
                {this.state.view}
            </div>
        )
    }
}
function Ramo(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Ramo</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar por CNAEs</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function Porte(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Porte</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar por porte</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function Natureza(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Natureza Jurídica</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar por natureza jurídica</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function Faturamento(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Faturamento Presumido</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar</p>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-around'>
                        <div class="input-group col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">De</span>
                            </div>
                            <input type="number" class="form-control" value="0" />
                        </div>
                        <div class="input-group ml-1 col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Até</span>
                            </div>
                            <input type="number" class="form-control" value="10000" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function Funcionarios(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Número de Funcionários</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar</p>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-around'>
                        <div class="input-group col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">De</span>
                            </div>
                            <input type="number" class="form-control" value="0" />
                        </div>
                        <div class="input-group ml-1 col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Até</span>
                            </div>
                            <input type="number" class="form-control" value="10000" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function PalavraChave(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Palavra-Chave</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar palavra-chave</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
function IdadeEmpresa(props) {
    return (
        <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 bg-light p-5 loca-div shadow rounded'>
                <p className='col-12 h6'>Idade da Empresa</p>
                <hr />
                <div className='d-flex py-2'>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Indiferente</p>
                    </div>
                    <div class="input-group col">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
                            </div>
                        </div>
                        <p class="form-control">Filtrar</p>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-around'>
                        <div class="input-group col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">De</span>
                            </div>
                            <input type="number" class="form-control" value="0" />
                        </div>
                        <div class="input-group ml-1 col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Até</span>
                            </div>
                            <input type="number" class="form-control" value="100" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end pt-3'>
                    <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
                    <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
