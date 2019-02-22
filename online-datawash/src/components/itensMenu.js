import React from 'react'
import { Link } from 'react-router-dom'

export const Consulta = (
    <Link to='#menu1' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between'>
        <span className='text-light'>Consulta</span>
    </Link >
)

export const Enriquecimento = (
    <Link to='#menu2' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado1" aria-controls="conteudoNavbarSuportado1" aria-expanded="false" aria-label="Alterna navegação">
        <span className='text-light'>Enriquecimento</span>
    </Link >
)

export const EnriquecimentoDrop = (
    <div className='collapse navbar-collapse' id="conteudoNavbarSuportado1">
        <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Enriquecer</Link ></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Atribuição de CPF</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Validação Hot</Link></li>
        </ul>
    </div>
)

export const Higienizacao = (
    <Link to='#menu4' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between'>
        <span className='text-light '>Higienização</span>
    </Link >
)

export const Gerencial = (
    <Link to='/menu6' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado4" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        <span className='text-light'>Gerencial</span>
    </Link >
)

export const GerencialDrop = (
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado4">
        <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Contas</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Personalização</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Extrato de serviços</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Prévia de fechamento</Link></li>
        </ul>
    </div>
)

export const Monitoramento = (
    <Link to='#menu5' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado3" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        <span className='text-light'>Monitoramento</span>
    </Link >
)

export const MonitoramentoDrop = (
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado3">
        <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Consulta</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Enriquecimento</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Web Service</Link ></li>
        </ul>
    </div>
)

export const Relatario = (
    <Link to='/menu7' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado5" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
        <span className='text-light'>Relatório</span>
    </Link >
)

export const RelatarioDrop = (
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado5">
        <ul className="navbar-nav mr-auto pl-5">
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Consulta</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Enriquecimento</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Mailing list</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Higienização</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to='/'>Web Service</Link></li>
        </ul>
    </div>
)
