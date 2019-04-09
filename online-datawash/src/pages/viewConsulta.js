import React, { Component } from "react";
import InputBuscar, { Option, Botao,  LoadButton } from "../components/input-button";
import Planilha from '../components/planilhaConsulta'
import axios from "axios";
import '../components/components.scss'


class ViewConsulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      loading: false,
      user: ''
    };
  }
  // pega o valor digitado no input
  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  //armazeno o valor do input e insere o valor na url da api e mostra a resposta
  handleClick = () => {
    this.setState({lista : '', loading: true})
    const token = localStorage.getItem('auth-token', token);

    const { user } = this.state

    axios.get(`http://localhost:52231/api/consultaCpf/consultaCpf/${user}`, { 
      headers: { 
        "Access-Control-Allow-Origin": "*",
        'mode' : 'no-cors',
        'Authorization': 'Bearer ' + token,
        'Content-Type' : 'application/json'
      } 
    })
      .then(response => {
        let resposta = response.data;
        // let dado = JSON.stringify(resposta)
        this.setState({ lista : [resposta], loading: false})
        this.setState({renderPlanilha: <Planilha lista={this.state.lista}/>});
        console.log('lista', this.state.lista)
        
      })
  }
  

  render(props) {
    const {loading} = this.state
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
              textoBotao={!loading ? 'Buscar' : < LoadButton/> }
            />
          }
          />
        
          {this.state.renderPlanilha}

      </div>
    );
  }
}

export default ViewConsulta;
