import React, { Component } from "react";
import Tooltip from '../components/info'
import MailingListPessJuridica from '../components/maillingJuridica'
import MailingListPessFisica from '../components/maillingFisica'
import './pages.scss'

export default class MailingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: <TipoPessoa
        clickPFisica={(e) => this.renderCondicao('pessoaFisica')}
        clickPJuridica={(e) => this.renderCondicao('pessoaJuridica')}
      />
    }
  }

  renderCondicao(id) {
    if (id === 'pessoaFisica') {
      this.setState({ view: <MailingListPessFisica /> })
    }
    if (id === 'pessoaJuridica') {
      this.setState({ view: < MailingListPessJuridica /> })
    }

  }

  render() {
    return (
      <div className='d-flex w-100 flex-column justify-content-end align-items-end marginPage'>
      <p className='dashboard-title h4 text-info'>MailingList</p>
        <Tooltip>
          <div className='enriquecer-info p-3 list-group'>
            <h5>Ponto de partida</h5>
            <p>A localização é obrigatória. As demais não são.</p>
            <p>Filtro: Você deve determinar o filtro a ser aplicado na contagem dos registros.</p>
            <p className='text-danger'>Excluímos DDDs incompatíveis com endereço.</p>
          </div>
        </Tooltip>
        <div className='w-100 '>
          {this.state.view}
        </div>

      </div>
    )
  }
};

function TipoPessoa(props) {
  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='w-50 bg-light p-3 rounded shadow'>
        <p>Que tipo de Pessoa quer filtrar?</p>
        <div className='d-flex justify-content-around align-items-center border-top pt-2 mailing-div'>
          <button className='btn bg-info text-light' onClick={props.clickPFisica}>Pessoa Física</button>
          <button className='btn bg-info text-light' onClick={props.clickPJuridica}>Pessoa Jurídica</button>
        </div>
      </div>
    </div>
  )
}