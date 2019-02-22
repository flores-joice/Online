import React from 'react'
import './components.css'
import logo from '../assets/logo.png'

const NavHorizontal = () => (
  <nav className="navbar navbar-light bg-light nav-horizontal fixed-top d-flex justify-content-between shadow">
    <a className="navbar-brand" href="/">
      <img src={logo} width="180" height="auto" alt=""/>
    </a>
    <button className='btn px-4 btn-info'>Sair</button>
  </nav>
)

export default NavHorizontal