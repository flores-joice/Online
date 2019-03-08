import React, { Component } from "react";
import { Button, Input } from "./input-button";
import { Planilha } from "./planilhaConsulta";
import NavHorizontal from './nav-horizontal';
import NavVertical from "./nav-vertical";
import axios from "axios";
import './components.css'


class Consulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      user: ""
    };
  }
  // pega o valor digitado no input
  handleChange = event => {
    this.setState({ user: event.target.value });
    console.log(this.state.user);
  };
  //limpa o que esta no input
  handleClear = () => {
    this.setState({ user: "" });

  }
  //armazeno o valor do input e insere o valor na url da api e mostra a resposta
  handleClick = () => {
    const { user } = this.state
    axios
      .get(
        `http://localhost:50886/1.0.0/Consultas/ConsultaCPFCompleta/json?Cliente=sistema&Usuario=testes.api@datawash.com.br&Senha=DouglasBoga&CPFS=${user}`)
      .then(response => {
        this.setState({ lista: response.data });
      }).catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="d-flex form-width justify-content-between align-items-center pt-3">
        <NavHorizontal/>
        <NavVertical/>
        <div className='w-100 d-flex justify-content-center'>
          <div className='div-width1 d-flex justify-content-around align-items-center'>
            <form
              onSubmit={e => e.preventDefault()}
              className="consulta p-4 text-light rounded ">
              <Input IdLabel="cpf"
                htmlForLabel="cpf"
                value={this.state.user}
                type="text"
                id="cpf"
                placeholderInput=""
                changeUser={this.handleChange}
                name="cpf"
              >
                CPF
            </Input>
              <Input IdLabel='cnpj'
                htmlForLabel='cnpj'

                value=''
                type='text'
                id='cnpj'
                placeholderInput=''
                changeUser=''
                name='cnpj'>
                CNPJ
            </Input>
              <Input IdLabel='nome'
                htmlForLabel='nome'

                value=''
                type='text'
                id='nome'
                placeholderInput=''
                changeUser=''
                name='nome'>
                NOME
            </Input>
              <Input IdLabel='nasc'
                htmlForLabel='nasc'

                value=''
                type='text'
                id='nasc'
                placeholderInput=''
                changeUser=''
                name='nasc'>
                NASCIMENTO
            </Input>
              <Input IdLabel='end'
                htmlForLabel='end'

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                ENDEREÇO
            </Input>
              <Input IdLabel='bairro'
                htmlForLabel=''

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                BAIRRO
            </Input>
              <Input IdLabel='cidade'
                htmlForLabel=''

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                CIDADE
            </Input>
              <Input IdLabel='uf'
                htmlForLabel=''

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                UF
            </Input>
              <Input IdLabel='tel'
                htmlForLabel=''

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                TELEFONE
            </Input>
              <Input IdLabel='placa'
                htmlForLabel=''

                value=''
                type=''
                id=''
                placeholderInput=''
                changeUser=''
                arialLabel=''
                ariaDescribedby=''>
                PLACA
            </Input>

              <div className="d-flex justify-content-around">
                <Button
                  onClick={this.handleClick}
                  type="submit"
                  classes="btn btn-success"
                  value="submit"
                >
                  Buscar
              </Button>
                <Button
                  onClick={this.handleClear}
                  type="clear"
                  classes="btn btn-warning"
                >
                  Limpar
              </Button>
              </div>
            </form>
            <div className='d-flex justify-content-center align-items-center '>
              <Planilha lista={this.state.lista} onClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Consulta;
