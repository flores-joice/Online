import React, { Component } from 'react'
import './components.css'
import logo from '../assets/logo.png'
import history from '../infra/history'

class NavHorizontal extends Component {
  constructor() {
    super()
    this.state = {
      emailLogado: ''
    }
  }
  componentWillReceiveProps() {
    const user = localStorage.getItem('auth-user', user);
    const usuario = JSON.parse(user)
    this.setState({ emailLogado: usuario.email })

    //       usuarios                   senhas
    //celso_quintino@hotmail.com        demo1
    //contato@exatacobrancas.com       173300
    //asf@asdf.com                      asdf
    //alessandra@pgmais.com.br         pg@123
    //equipeunique@pgmais.com.br       12345
  }

  exit = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push('/login')
    console.log('click')
    this.setState({emailLogado: ""})
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light nav-horizontal align-items-center fixed-top d-flex justify-content-between shadow" onChange={this.tokenChange}>
        <a className="navbar-brand" href="/app">
          <img src={logo} width="180" height="auto" alt="" />
        </a>
        <div className="d-flex  box-sizing align-items-center">
          <p className="mt-3">{this.state.emailLogado}</p>
          <button className='btn px-4 btn-info ml-3' onClick={this.exit}>Sair</button>
        </div>
      </nav>
    )
  }
}


export default NavHorizontal