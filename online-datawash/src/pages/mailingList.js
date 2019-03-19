import React, { Component } from "react";
import './pages.css'

export default class MailingListPessFisica extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: <TipoPessoa 
              clickPFisica={(e) => this.renderCondicao('pessoaFisica')} 
              clickPJuridica={(e) => this.renderCondica('pessoaJuridica')}
            />
    }
  }

  renderCondicao(id) {
    if (id === 'pessoaFisica') {
      this.setState({ view: <Localizacao clickIdade={(e) => this.renderCondicao('idade')} clickProfissao={(e) => this.renderCondicao('profissao')} /> })
    }
    if (id === 'pessoaJuridica') {
      this.setState({ view: <Renda /> })
    }
    if (id === 'idade') {
      this.setState({ view: <Idade /> })
    };
    if (id === 'profissao') {
      this.setState({ view: <Profissao /> })
    };
  }

  render() {
    return (
      <div className='d-flex justify-content-center align-items-center bg-light rounded mailing' >
        {this.state.view}
      </div>
    )
  }
};

function TipoPessoa(props) {
  return (
    <div className='py-3 w-75'>
    <p>Que tipo de Pessoa quer filtrar?</p>
    <div className='d-flex justify-content-around align-items-center border-top pt-4'>
      <button className='btn btn-info' onClick={props.clickPFisica}>Pessoa Física</button>
      <button className='btn btn-info' onClick={props.clickPJuridica}>Pessoa Jurídica</button>
    </div>
    </div>
  )
}

function Localizacao(props) {
  return (
    <div className='py-3 w-75'>
      <p>Quer filtrar por:</p>
    <div className='d-flex justify-content-around align-items-center border-top pt-4'>
        <button className='btn btn-info botao' onClick={props.clickCidade}>Cidade</button>
        <button className='btn btn-info botao' onClick={props.clickEstado}>Estado</button>
        <button className='btn btn-info botao' onClick={props.clickBrasil}>Brasil</button>
        <button className='btn btn-info botao' onClick={props.clickDDD}>DDD</button>
        <button className='btn btn-info botao' onClick={props.clickCEP}>CEP</button>
      </div>
    </div>
  )
}

function Renda() {
  return (
    <div className='mt-5 border-top'>
      <p>Nota : As caixas de seleção são semelhantes aos botões de opção, mas com uma distinção importante: os botões de opção são projetados para selecionar um valor fora de um conjunto, enquanto as caixas de seleção permitem ativar e desativar valores individuais. Quando existem vários controles, os botões de opção permitem que um seja selecionado de todos, enquanto as caixas de seleção permitem que vários valores sejam selecionados.</p>
    </div>
  )
}

function Idade() {
  return (
    <div className='d-flex w-50 justify-content-around mt-3  border-top'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <p>Idade</p>
        <p>Nota : As caixas de seleção são semelhantes aos botões de opção, mas com uma distinção importante: os botões de opção são projetados para selecionar um valor fora de um conjunto, enquanto as caixas de seleção permitem ativar e desativar valores individuais. Quando existem vários controles, os botões de opção permitem que um seja selecionado de todos, enquanto as caixas de seleção permitem que vários valores sejam selecionados.</p>
      </div>
    </div>
  )
}

function Profissao() {
  return (
    <div className='d-flex w-50 justify-content-around mt-3  border-top'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <p>Profissao</p>
        <p>mxfmfhmshaehaergb farhbfb adef bargawsbg defegdfbd Nota : As caixas de seleção são semelhantes aos botões de opção, mas com uma distinção importante: os botões de opção são projetados para selecionar um valor fora de um conjunto, enquanto as caixas de seleção permitem ativar e desativar valores individuais. Quando existem vários controles, os botões de opção permitem que um seja selecionado de todos, enquanto as caixas de seleção permitem que vários valores sejam selecionados.</p>
      </div>
    </div>
  )
}