import React, { Component } from 'react'
import collapseUp from '../assets/collapse-up.png'
import collapseDown from '../assets/collapse-down.png'
import axios from "axios"
import './components.scss'

function Planilha({ lista }) {
  return (
    <form className='w-100  mb-5 ' >
      <div  >
        <Cabecalho lista={lista} />
        <div className="bg-light rounded px-5 py-3" id="accordionExample">
          <Dados lista={lista} />
          <Telefones lista={lista} />
          <Emails lista={lista} />
          <Endereco lista={lista} />
          <Renda lista={lista} />
          <PessoasRelacionadas lista={lista} />
          <Vizinhos lista={lista}/>
        </div>
      </div>
    </form>
  )
}

const Cabecalho = ({ lista }) => (
  <div className='bg-white rounded my-3 p-3 text-center h5 d-flex justify-content-center align-items-center'>
    {lista.nome && <span className='col-6 d-flex justify-content-center align-items-center'>{lista.nome}</span>}
    {lista.cpf && <span className='col-6 d-flex justify-content-center align-items-center'>{lista.cpf}</span>}
  </div>
)

class Dados extends Component {
  constructor(lista) {
    super(lista)
    this.state = {
      lista: lista.lista,
      imagem: collapseUp,
      display: 'd-block'
    }

  }

  handleImage(imagem, e) {
    if (imagem === collapseUp) {
      this.setState({ imagem: collapseDown })
    }
    if (imagem === collapseDown) {
      this.setState({ imagem: collapseUp })
    }

  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block',imagem: collapseUp })
    }
  }

  render() {
    const { lista, imagem } = this.state

    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
        <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Dados principais </h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            {lista.nomeMae && <p className='col-6'>Nome da mãe: {lista.nomeMae}</p>}
            {lista.dataNasc && <p className='col-6'>Data de nascimento: {lista.dataNasc}</p>}
            {lista.sexo && <p className='col-6'>Sexo: {lista.sexo}</p>}
            {lista.idade && <p className='col-6'>idade: {lista.idade} anos</p>}
            {lista.escolaridade && <p className='col-6'>Escolaridade: {lista.escolaridade}</p>}
            {lista.signo && <p className='col-6'>Signo: {lista.signo}</p>}
            {lista.dataConsulta && <p className='col-6'>Data da consulta à RF: {lista.dataConsulta}</p>}
            {lista.situacaoCadastral && <p className='col-6'>Situação na Receita Federal: {lista.situacaoCadastral}</p>}
          </div>
        </div>
      </div >
    )
  }
}

class Telefones extends Component {
  constructor(lista) {
    super(lista)
    this.state = {
      lista: lista.lista,
      imagem: collapseUp,
      display: 'd-block'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block',imagem: collapseUp })
    }
  }

  render() {
    const { lista, imagem } = this.state

    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
        <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Telefone</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">

            {lista.telefone1 && <p className='col-3'>{lista.telefone1} <small>(fixo)</small></p>}
            {lista.telefone2 && <p className='col-3'>{lista.telefone2} <small>(fixo)</small></p>}
            {lista.telefone3 && <p className='col-3'>{lista.telefone3} <small>(fixo)</small></p>}
            {lista.telefone4 && <p className='col-3'>{lista.telefone4} <small>(fixo)</small></p>}

            {lista.celular1 && <p className='col-3'>{lista.celular1} <small>(cel)</small></p>}
            {lista.celular2 && <p className='col-3'>{lista.celular2} <small>(cel)</small></p>}
            {lista.celular3 && <p className='col-3'>{lista.celular3} <small>(cel)</small></p>}
            {lista.celular4 && <p className='col-3'>{lista.celular4} <small>(cel)</small></p>}

            {lista.comercial1 && <p className='col-3'>{lista.comercial1}  <small>(comercial)</small></p>}
            {lista.comercial2 && <p className='col-3'>{lista.comercial2}  <small>(comercial)</small></p>}
            {lista.comercial3 && <p className='col-3'>{lista.comercial3}  <small>(comercial)</small></p>}
            {lista.comercial4 && <p className='col-3'>{lista.comercial4}  <small>(comercial)</small></p>}

          </div>
        </div>
      </div>
    )
  }
}

class Emails extends Component {
  constructor(lista) {
    super(lista)
    this.state = {
      lista: lista.lista,
      imagem: collapseUp,
      display: 'd-block'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block',imagem: collapseUp })
    }
  }

  render() {
    const { lista, imagem } = this.state

    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
        <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Email</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            {lista.email1 && <p className='col-6'>{lista.email1}</p>}
            {lista.email2 && <p className='col-6'>{lista.email2}</p>}
            {lista.email3 && <p className='col-6'>{lista.email3}</p>}
            {lista.email4 && <p className='col-6'>{lista.email4}</p>}
          </div>
        </div>
      </div>
    )
  }
}

class Endereco extends Component {
  constructor(lista) {
    super(lista)
    this.state = {
      lista: lista.lista,
      imagem: collapseUp,
      display: 'd-block'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block',imagem: collapseUp })
    }
  }

  render() {
    const { lista, imagem } = this.state

    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
        <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Endereço</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            <p className=''>
              {lista.tipoLogradouro1 && <p>{`${lista.tipoLogradouro1}  ${lista.logradouro1}  ${lista.numero1},  ${lista.cidade1} - ${lista.uF1}. CEP: ${lista.ceP1}`}</p>}
              {lista.tipoLogradouro2 && <p>{`${lista.tipoLogradouro2}  ${lista.logradouro2}  ${lista.numero2},  ${lista.cidade2} - ${lista.uF2}. CEP: ${lista.ceP2}`}</p>}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class Renda extends Component {
  constructor(lista) {
    super(lista)
    this.state = {
      lista: lista.lista,
      imagem: collapseUp,
      display: 'd-block'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block',imagem: collapseUp })
    }
  }

  render() {
    const { lista, imagem } = this.state

    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
        <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Fonte de Renda</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            {lista.flagCLT && <p className='col-6'>Ativa mercado de trabalho formal: {lista.flagCLT}</p>}
            {lista.rendaEstimadaFaixa && <p className='col-6'>Faixa salarial: {lista.rendaEstimadaFaixa}</p>}
            {lista.rendaEstimada && <p className='col-6'>Renda estimada: {lista.rendaEstimada}</p>}
            {lista.cboDescricao && <p className='col-6'>Ocupação: {lista.cboDescricao}</p>}
            {lista.empregadorNome && <p className='col-6'>Provável empresa: {lista.empregadorNome}</p>}
            {lista.empregadorCNPJ && <p className='col-6'>CNPJ da empresa: {lista.empregadorCNPJ}</p>}
            {lista.dataAdmissao && <p className='col-6'>Data de admissão: {lista.dataAdmissao}</p>}
          </div>
        </div>
      </div>
    )
  }
}


class PessoasRelacionadas extends Component {
  constructor(lista, props) {
    super(lista, props)
    this.state = {
      lista: lista.lista,
      imagem: collapseDown,
      relacionadas: [],
      viewRelacionamento: '',
      statusRetorno: '',
      display: 'd-none'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block', imagem: collapseUp  })

      const token = localStorage.getItem('auth-token', token);
      if (token) {

        axios.get(`http://localhost:52231/api/pessoasRelacionadas/${this.state.lista.cpf}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            'mode': 'no-cors',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        })
          .then(resp => {
            let respo = resp.data;
            this.setState({ relacionadas: respo })
            console.log('relacionadas planilha', this.state.relacionadas)

            const status = this.state.relacionadas.map(retorno => retorno.statusRetorno)
            const relacionadasCpf = this.state.relacionadas.map(retorno => retorno.cpf)
            console.log('status', status)
            this.setState({ statusRetorno: status })

            const relacionadasNome = this.state.relacionadas.map(relacao => relacao.nome)
            console.log('status', this.state.statusRetorno, relacionadasNome)

            if (this.state.statusRetorno[0] === 0) {
              this.setState({ viewRelacionamento: <ListaRelacionamento relacionadas={this.state.relacionadas} /> })
            } else {
              this.setState({ viewRelacionamento: <p className='p-3'>Não foi localizada nenhuma pessoa relacionada.</p> })
            }
            // let dado = JSON.stringify(resposta)
            // this.setState({ lista : [resposta], loading: false})
            // this.setState({renderPlanilha: <Planilha lista={this.state.lista}/>});
            // console.log('lista', this.state.lista)

          })
      }
    }
  }

  render(props) {
    const { relacionadas, statusRetorno, imagem } = this.state
    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
          <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Pessoas Relacionadas</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            <table className="table table-hover mt-1 rounded border-info">
              <thead className=" rounded-top bg-info">
                <tr>
                  <th className='text-light' scope="col">Nome</th>
                  <th className='text-light' scope="col">CPF</th>
                  <th className='text-light' scope="col">Parentesco</th>
                  <th className='text-light' scope="col">Telefone</th>
                </tr>
              </thead>
              {this.state.viewRelacionamento}



            </table>
          </div>
        </div>
      </div>
    )
  }
}

class Vizinhos extends Component {
  constructor(lista, props) {
    super(lista, props)
    this.state = {
      lista: lista.lista,
      imagem: collapseDown,
      relacionadas: [],
      viewRelacionamento: '',
      statusRetorno: '',
      display: 'd-none'
    }
  }

  handleDisplay(e) {
    if (this.state.display === 'd-block') {
      this.setState({ display: 'd-none', imagem: collapseDown })
    }
    if (this.state.display === 'd-none') {
      this.setState({ display: 'd-block', imagem: collapseUp  })

      const token = localStorage.getItem('auth-token', token);
      if (token) {
        const logradouro = this.state.lista.logradouro1
        console.log('logradouro', logradouro)
        const cep = this.state.lista.ceP1
        console.log('cep', cep)
        const tipoLogradouro = this.state.lista.tipoLogradouro1
        

        axios.get(`http://localhost:52231/api/consultavizinhos?logradouro=${logradouro}&cep=${cep}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            'mode': 'no-cors',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        })
          .then(resp => {
            let respo = resp.data;
            console.log('vizinhos', respo)
            this.setState({ relacionadas: respo })
            console.log('vizinhos relacionadas', this.state.relacionadas)

            const status = this.state.relacionadas.map(retorno => retorno.statusRetorno)
            const relacionadasCpf = this.state.relacionadas.map(retorno => retorno.cpf)
            console.log('status', status)
            this.setState({ statusRetorno: status })

            const relacionadasNome = this.state.relacionadas.map(relacao => relacao.nome)
            console.log('status', this.state.statusRetorno, relacionadasNome)

            if (this.state.statusRetorno[0] === 0) {
              this.setState({ viewRelacionamento: <ListaVizinhos relacionadas={this.state.relacionadas} /> })
            } else {
              this.setState({ viewRelacionamento: <p className='p-3'>Não foi localizada nenhuma pessoa relacionada.</p> })
            }
          })
      }

    }
  }

  render(props) {
    const { imagem } = this.state
    return (
      <div>
        <div className="border-bottom border-info d-flex align-items-center" onClick={(e) => this.handleDisplay(this.state.display)}>
          <img className='planilha-img' src={imagem} alt=''/>
          <h6 className=" p-2 ml-2 text-info">Vizinhos</h6>
        </div>
        <div className={this.state.display} >
          <div className="card-body d-flex flex-wrap">
            <table className="table table-hover mt-1 rounded border-info">
              <thead className=" rounded-top bg-info">
                <tr>
                  <th className='text-light' scope="col">Nome</th>
                  <th className='text-light' scope="col">CPF / CNPJ</th>
                  <th className='text-light' scope="col">Parentesco</th>
                  <th className='text-light' scope="col">Telefone</th>
                </tr>
              </thead>
              {this.state.viewRelacionamento}



            </table>
          </div>
        </div>
      </div>
    )
  }
}

const ListaRelacionamento = ({ relacionadas }) => (
  <tbody className='bg-light w-100 border-info'>
    {relacionadas.map((relacionadas, index) =>
      <tr key={index} className='w-100'>
        <td className='card-relacionadas__first'>{relacionadas.nome && relacionadas.nome} </td>
        <td>{relacionadas.cpf && relacionadas.cpf} </td>
        <td>{relacionadas.relacionamento ? relacionadas.relacionamento : 'Indefinido'}</td>
        <td className='d-flex flex-column'>
          <p>{relacionadas.fone1 || 'Nenhum número encontrado'}</p>
          {relacionadas.fone2 && <p>{relacionadas.fone2}</p>}
          {relacionadas.fone3 && <p>{relacionadas.fone3}</p>}
          {relacionadas.fone4 && <p>{relacionadas.fone4}</p>}
        </td>
      </tr>
    )}
  </tbody>
)

const ListaVizinhos = ({ relacionadas }) => (
  <tbody className='bg-light w-100 border-info'>
    {relacionadas.map((relacionadas, index) =>
      <tr key={index} className='w-100'>
        <td className='card-relacionadas__first'>{relacionadas.nome && relacionadas.nome} </td>
        <td>{relacionadas.cpF_CNPJ && relacionadas.cpF_CNPJ} </td>
        <td>{relacionadas.endereco ? relacionadas.endereco : 'Indefinido'}</td>
        <td className='d-flex flex-column'>
          <p>{relacionadas.telefone1 || 'Nenhum número encontrado'}</p>
          {relacionadas.telefone2 && <p>{relacionadas.telefone2}</p>}
          {relacionadas.telefone3 && <p>{relacionadas.telefone3}</p>}
          {relacionadas.telefone4 && <p>{relacionadas.telefone4}</p>}
        </td>
      </tr>
    )}
  </tbody>
)


export default Planilha