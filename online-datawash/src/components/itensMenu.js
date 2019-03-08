import React from 'react'
import { Link } from 'react-router-dom'

export const Consulta = () => (
  <Link to='#menu1' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between w-100'>
    <span className='text-light'>Consulta</span>
  </Link >
)

export const Enriquecimento = () => (
  <Link
    to='#menu2'
    className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle'
    data-toggle="collapse"
    data-target="#enriquecimento"
    aria-controls="enriquecimento"
    aria-expanded="false"
    aria-label="Alterna navegação">
    <span className='text-light'>Enriquecimento</span>
  </Link >
)

export function Enriquecer({ funcionalidades }) {
  return (
    <div className='collapse navbar-collapse' id="enriquecimento">
      <ul
        className="navbar-nav mr-auto pl-5" data-target="#listaEnriquecimento" aria-controls="listaEnriquecimento">
        <li
          className="nav-item"
          id="listaEnriquecimento"><Link
            className="nav-link text-light"
            to='/'>Enriquecer</Link ></li>
        {funcionalidades.includes("atribuicaoCpf") && <li className="nav-item" id="listaEnriquecimento"><Link className="nav-link text-light" to='/'>Atribuição de CPF</Link></li>}
        {funcionalidades.includes("validacaoHot") && <li className="nav-item" id="listaEnriquecimento"><Link className="nav-link text-light" to='/'>Validação Hot</Link></li>}
      </ul>
    </div>
  )
}

export const Higienizacao = () => (
  <Link to='#menu4' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between'>
    <span className='text-light '>Higienização</span>
  </Link >
)
export const MailingList = () => (
  <Link to='#menu44' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between'>
    <span className='text-light '>Mailing List</span>
  </Link >
)
export const Gerencial = () => (
  <Link
    to='/menu6'
    className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle'
    data-toggle="collapse"
    data-target="#gerencial"
    aria-controls="gerencial"
    aria-expanded="false"
    aria-label="Alterna navegação">
    <span className='text-light'>Gerencial</span>
  </Link >)


export function GerenciamentoContas({ funcionalidades }) {
  return (
    <div className="collapse navbar-collapse" id="gerencial">
      <ul className="navbar-nav mr-auto pl-5" data-target="#listaGerencial">
        <li className="nav-item" id="listaGerencial"><Link className="nav-link text-light" to='/'>Contas</Link></li>
        {
          funcionalidades.includes("personalizacao") && <li className="nav-item" id="listaGerencial"><Link className="nav-link text-light" to='/'>Personalização</Link></li>
        }
        {funcionalidades.includes("extratoServicos") && <li className="nav-item" id="listaGerencial"><Link className="nav-link text-light" to='/'>Extrato de serviços</Link></li>}
        {funcionalidades.includes("previaFechamento") && <li className="nav-item" id="listaGerencial"><Link className="nav-link text-light" to='/'>Prévia de fechamento</Link></li>}
      </ul>
    </div>
  )
}

export const Monitoramento = () => (
  <Link to='#menu5' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado3" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span className='text-light'>Monitoramento</span>
  </Link >
)

export function MonitoramentoConsulta({ funcionalidades }) {
  return (
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado3">
      <ul className="navbar-nav mr-auto pl-5" data-target="#monitoracao">
        <li className="nav-item" id="monitoracao"><Link className="nav-link text-light" to='/'>Consulta</Link></li>
        {funcionalidades.includes("monitEnriquecimento") && <li className="nav-item" id="monitoracao"><Link className="nav-link text-light" to='/'>Enriquecimento</Link></li>}
        {funcionalidades.includes("monitWebService") && <li className="nav-item" id="monitoracao"><Link className="nav-link text-light" to='/'>Web Service</Link ></li>}
      </ul>
    </div>
  )
}

export const Relatario = () => (
  <Link to='/menu7' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado5" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span className='text-light'>Relatório</span>
  </Link >
)

export function RelatarioConsulta({ funcionalidades }) {
  return (
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado5">
      <ul className="navbar-nav mr-auto pl-5" data-toggle="#listRelatorio">
        <li className="nav-item"><Link className="nav-link text-light" to='/'>Consulta</Link></li>
        {funcionalidades.includes("relatEnriquecimento") && <li className="nav-item" id="listRelatorio"><Link className="nav-link text-light" to='/'>Enriquecimento</Link></li>}
        {funcionalidades.includes("relatMailingList") && <li className="nav-item" id="listRelatorio"><Link className="nav-link text-light" to='/'>Mailing list</Link></li>}
        {funcionalidades.includes("relatHigienizacao") && <li className="nav-item" id="listRelatorio"><Link className="nav-link text-light" to='/'>Higienização</Link></li>}
        {funcionalidades.includes("relatWebService") && <li className="nav-item" id="listRelatorio"><Link className="nav-link text-light" to='/'>Web Service</Link></li>}
      </ul>
    </div>
  )
}
