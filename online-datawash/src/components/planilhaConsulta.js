import React from 'react'
import {Cabecalho, Dados, Renda, Email, Endereco, Telefone} from './mapConsulta'
import './components.css'


export const Planilha = ({ lista }) => (
  <form className='table-data container align-content-center  mt-3'>
    <div className='container flex-column planilha-width' id='results'>
      <Cabecalho lista={lista} />
      <ul className="nav nav-tabs nav-width" id="myTab" role="tablist">
        <li className="nav-item"> <a className="nav-link active text-dark" id="dados-tab" data-toggle="tab" href="#dados" role="tab" aria-controls="dados" aria-selected="true">Dados Gerais</a> </li>
        <li className="nav-item"> <a className="nav-link text-dark" id="telefone-tab" data-toggle="tab" href="#telefone" role="tab" aria-controls="telefone" aria-selected="false">Telefones</a> </li>
        <li className="nav-item"> <a className="nav-link text-dark" id="emails-tab" data-toggle="tab" href="#emails" role="tab" aria-controls="emails" aria-selected="false">Emails</a> </li>
        <li className="nav-item"> <a className="nav-link text-dark" id="end-tab" data-toggle="tab" href="#end" role="tab" aria-controls="end" aria-selected="false">Endereços</a> </li>
        <li className="nav-item"> <a className="nav-link text-dark" id="renda-tab" data-toggle="tab" href="#renda" role="tab" aria-controls="renda" aria-selected="false">Fonte de Renda</a> </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <Dados lista={lista}/>
        <Renda lista={lista}/>
        <Email lista={lista}/>
        <Endereco lista={lista}/>
        <Telefone lista={lista}/>   
      </div>
    </div>
  </form>
)