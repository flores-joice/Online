import React, { Component } from "react";
import InputBuscar, { Option, Botao } from "../components/input-button";
import Planilha from '../components/planilhaConsulta'
import axios from "axios";
import '../components/components.scss'


class ViewConsulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      renderPlanilha:''
      // user: ""
    };
  }
  // pega o valor digitado no input
  handleChange = event => {
    this.setState({ user: event.target.value });
    console.log(this.state.user);
  };
  
  //armazeno o valor do input e insere o valor na url da api e mostra a resposta
  handleClick = () => {
    // this.setState({ lista : []})
    // const { user } = this.state
    // const config = {
    //   mode: 'cors',
    //   headers: ({
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // }
    // axios
    //   .get(
    //     `http://localhost:50886/1.0.0/Consultas/ConsultaCPFCompleta/json?Cliente=sistema&Usuario=testes.api@datawash.com.br&Senha=DouglasBoga&CPFS=${user}`, config)

    //   .then(response => {
    //     this.setState({ lista: response.data });
    //   }).catch(error => {
    //     console.log(error);
    //   });
    this.setState({ renderPlanilha: <Planilha lista={this.state.lista} onClick={this.handleClick} />})
  };

  render(props) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 w-75">
        <InputBuscar 
          option={[
          <Option id='cpf' fotHtml='cpf' textoOption='CPF'/>, 
          <Option id='cnpj' fotHtml='cnpj' textoOption='CNPJ'/>, 
          <Option id='nome' fotHtml='nome' textoOption='Nome'/>,
          <Option id='end' fotHtml='end' textoOption='Endereço'/>,
          <Option id='bairro' fotHtml='bairro' textoOption='Bairro'/>,
          <Option id='cidade' fotHtml='cidade' textoOption='Cidade'/>,
          <Option id='telefone' fotHtml='telefone' textoOption='Telefone'/>,
          <Option id='placa' fotHtml='placa' textoOption='Placa'/>]}
          value={this.state.user}
          type='text' 
          classeInput="form-control"
          onFunction={this.handleChange}
           
          botao={ 
            <Botao  
              click={this.handleClick}
              classesBotao='btn btn-info rounded-right'
              textoBotao='Buscar'
            />
          }
        />
        {this.state.renderPlanilha}
        
      </div>
    );
  }
}

export default ViewConsulta;
