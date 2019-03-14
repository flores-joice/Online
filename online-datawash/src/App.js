import React, { Component } from 'react'
import NavHorizontal from './components/nav-horizontal';
import './App.scss'
import ViewNav from './pages/view-nav';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarioLogado: false, 

    }
  }

  componentWillMount() {
    let token = localStorage.getItem('auth-token', token)
    if (token) {
      this.setState({usuarioLogado : true})
      this.props.history.push('/app')
    } else {
      this.props.history.push('/login')
    }
  }
  
  
  render() {
    return (
      <div className="App d-flex mt-4">
        <ViewNav />
      </div>
    )
  } 
}

export default App;
