import React, {Component} from 'react'
import './components.css'
import logo from '../assets/logo.png'
import history from '../infra/history'

class NavHorizontal extends Component {
 
  exit = (e) => {
    e.preventDefault();
        localStorage.clear();
        history.push('/login')
        console.log('click')
  }
  render(){
    return(
      <nav className="navbar navbar-light bg-light nav-horizontal fixed-top d-flex justify-content-between shadow" onChange={this.tokenChange}>
        <a className="navbar-brand" href="/">
          <img src={logo} width="180" height="auto" alt=""/>
        </a>
        <button className='btn px-4 btn-info' onClick={this.exit}>Sair</button>
      </nav>
    )
  }
}


export default NavHorizontal