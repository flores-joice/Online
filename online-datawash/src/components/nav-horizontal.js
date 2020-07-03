import React, { Component } from 'react'
import './components.scss'
import logo from '../assets/logo.png'
import { history } from '../infra/history'

class NavHorizontal extends Component {
  constructor() {
    super()
    this.state = {
      emailLogado: '',
      cronometro: 0,
    }
  }
  componentWillMount() {
    // const user = localStorage.getItem('auth-user', user);
    // const usuario = JSON.parse(user)
    // this.setState({ emailLogado: usuario.email })
    var timer = setTimeout(this.logout, 600000)
    console.log(timer)
    
  }

  logout = () => {
    localStorage.clear();
    history.push('/login')
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
        <Clock/>
        <div className="d-flex  box-sizing align-items-center">
          <p className="mt-3">{this.state.emailLogado}</p>
          <button className='btn px-4 btn-info ml-3' onClick={this.exit}>Sair</button>
        </div>
      </nav>
    )
  }
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 0}
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 60000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div>{`${this.state.currentCount} min`}</div>
    );
  }
}


export default NavHorizontal
