import React, { Component } from 'react'
import '../App.scss'
import ViewNav from './view-nav';

class Home extends Component {
   componentWillMount() {
    // let token = localStorage.getItem('auth-token')
    // if (token) {
      this.props.history.push('/')
    // } else {
    //   this.props.history.push('/login')
    // }
  }
    
  render() {
    return (
      <div className="App d-flex">
        <ViewNav />
      </div>
    )
  } 
}

export default Home;