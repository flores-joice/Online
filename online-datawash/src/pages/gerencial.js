import React, { Component } from 'react'
import  BasicTable  from '../components/tabela'
import './pages.scss'


export class GerenciamentoContas extends Component {
  constructor() {
    super()
    this.state = {
      view: ''
    }
  }

  // handleClick = () => {
  //   this.setState({ view:  })
  // }

  render() {
    return (
      <div className='d-flex flex-column align-items-center marginPage'>
        <p className='dashboard-title h4 text-info'>Gerenciamento de Contas</p>
        {/* <div className="input-group">
          <select className="selectpicker" data-live-search="true">
            <option >Escolher...</option>
            <option data-tokens='sistema' value='sistema'>Sistema</option>
            <option data-tokens='alx revenda' value='alx'>ALX Revenda</option>
            <option data-tokens='auto facil' value='autoFacil'>Auto Facil</option>
            <option data-tokens='busco minha familia' value='buscoFamilia'>Busco Minha Familia</option>
            <option data-tokens='pga' value='PGA'>PGA</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-info" type="button" onClick={this.handleClick}>Buscar</button>
          </div>
        </div> */}
        <div className='w-100 mt-3'>
          <BasicTable />
        </div>
      </div>
    )
  }
}

