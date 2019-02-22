import React, { Component } from 'react'
import './App.css'
// import Login from '../src/pages/login'
// import NavVertical from './components/nav-vertical';
import ApiMenu from './apis/api.menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ApiMenu/>
      </div>
    )
  }
}
export default App;
