import React, { Component } from 'react'
import './App.css'
// import Login from '../src/pages/login'
// import NavVertical from './components/nav-vertical';
import Login from './pages/login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    )
  }
}
export default App;
