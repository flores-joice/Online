import React, { Component } from "react"
import InputBuscar, { Option, Botao, LoadButton } from "../components/input-button"
import Planilha from '../components/planilhaConsulta'
import axios from "axios"
import '../components/components.scss'


class ViewConsulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: '',
      lista: ''
    };
  }
  // pega o valor digitado no input
  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  //armazeno o valor do input e insere o valor na url da api e mostra a resposta
  handleClick = () => {
    this.setState({ loading: true })
    const token = localStorage.getItem('auth-token', token);

    const { user } = this.state

    axios.get(`http://localhost:52231/api/consultaCpf/${user}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'mode': 'no-cors',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        let resposta = response.data;
        // let dado = JSON.stringify(resposta)
        this.setState({ lista: resposta, loading: false })
        const retorno = this.state.lista.statusRetorno
        console.log('retorno', retorno)

        console.log('lista', this.state.lista)
        if (retorno === 0) {
          this.setState({
            renderPlanilha:
              <Planilha
                lista={this.state.lista}
                clickRelacionadas={this.handleRelacionadas} />,
            loading: false
          });
        }
        if (retorno === 1) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>CPF ou CNPJ não localizado</p>, loading: false
          });
        }
        if (retorno === 2) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Cliente sem saldo</p>, loading: false
          });
        }
        if (retorno === 3) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Cliente Inativo</p>, loading: false
          });
        }
        if (retorno === 4) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Usuário não logado</p>, loading: false
          });
        }
        if (retorno === 5) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Erro inesperado!</p>, loading: false
          });
        }
        if (retorno === 99) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>demora do banco para processar a solicitação </p>, loading: false
          });
        }
      })
    // this.handleRalacionadas()
  }

  handleRelacionadas() {
    const token = localStorage.getItem('auth-token', token);

    axios.get(`http://localhost:52231/api/pessoasRelacionadas/${this.state.user}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'mode': 'no-cors',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(resp => {
        let respo = resp.data;
        // let dado = JSON.stringify(resposta)
        // this.setState({ lista : [resposta], loading: false})
        // this.setState({renderPlanilha: <Planilha lista={this.state.lista}/>});
        // console.log('lista', this.state.lista)
        console.log('respo', respo)

      })

  }

  render(props) {
    const { loading } = this.state
    return (
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 w-75 marginPage">
        <p className='dashboard-title h4 text-info'>Consulta</p>
        <InputBuscar
          option={[
            <Option key='cpf' fotHtml='cpf' textoOption='CPF' />,
            <Option key='cnpj' fotHtml='cnpj' textoOption='CNPJ' />,
            <Option key='nome' fotHtml='nome' textoOption='Nome' />,
            <Option key='end' fotHtml='end' textoOption='Endereço' />,
            <Option key='bairro' fotHtml='bairro' textoOption='Bairro' />,
            <Option key='cidade' fotHtml='cidade' textoOption='Cidade' />,
            <Option key='telefone' fotHtml='telefone' textoOption='Telefone' />,
            <Option key='placa' fotHtml='placa' textoOption='Placa' />]}
          value={this.state.user}
          type='text'
          classeInput="form-control input-consulta"
          onFunction={this.handleChange}

          botao={
            <Botao
              click={this.handleClick}
              classesBotao='btn btn-info rounded-right button-border'
              textoBotao={!loading ? 'Buscar' : < LoadButton />}
            />
          }
        />

        {this.state.renderPlanilha}

      </div>
    );
  }
}

export default ViewConsulta;
