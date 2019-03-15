import React, { Component } from "react";
import InputBuscar, { Option, Botao, BarraProgresso, Info } from '../components/input-button';
import '../components/components.scss'

export default class Enriquecer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //o estado inicial do componente renderiza outro componente <Enriquec/> que tem um evento de click
      view: <Enriquec clickBotao={this.handlePage2} />
    }
  }

  // evento enviado pelo botão tras de volta o componente <Enriquec/>
  //cickBotao é um evento de onClick recebido via props 
  handlePage1 = () => {
    this.setState({ view: <Enriquec clickBotao={this.handlePage2} /> })
  }
 // evento enviado pelo botão substitui o componente <Enriquec/> por <Enriquec2/>
  handlePage2 = () => {
    this.setState({ view: < Enriquec2 clickAvancar={this.handlePage3} clickVoltar={this.handlePage1} /> })
  }
  // evento enviado pelo botão substitui o componente <Enriquec3/> por <Enriquec3/>
  handlePage3 = () => {
    this.setState({ view: <Enriquec3 clickAvancar={this.handlePage4} clickVoltar={this.handlePage2} /> })
  }
  // evento enviado pelo botão substitui o componente <Enriquec4/> por ...
  handlePage4 = () => {
    this.setState({ view: <Enriquec4 clickAvancar={this.handlePage5} clickVoltar={this.handlePage3} /> })
  }
  handlePage5 = () => {
    this.setState({ view: <Enriquec5 clickConcluir={this.handlePage1}/> })
  }

  render() {

    return (
      <div className=''>
      {/* THIS.STATE.VIEW --->> recebe p valor que foi enviado ao state no momento do click dos botões */}
        {this.state.view}
      </div>
    )
  }
};

function Enriquec(props) {
  return (
    <div className='w-100 d-flex flex-column justify-content-around align-items-center'>
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
        <InputBuscar
          option={[
            <Option key='layoutLivre' id='layoutLivre' fotHtml='layoutLivre' textoOption='Layout Livre' />,
            <Option key='layoutPersonalizado' id='layoutPersonalizado' fotHtml='layoutPersonalizado' textoOption='Layout Personalizado' />]}
          classeInput="form-control"
          idInput='inputId'
          typeInput=''
          classesBotao='btn btn-info px-1'
          //componente InputBucar tem um botão recebido por props, e este botão tem evento de 
          //click que será enviado por prop ai componente onde a logica sera implementada
          botao={<Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Carregar' typeBotao='submit' click={props.clickBotao} />}
        />
      </div>
      <Info />
    </div >
  )
}

function Enriquec2(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
      <BarraProgresso ValorMaxino='4' valorAtual='1' width='25%' NumeroProgresso='25%'/>
      <table class="table table-hover mt-5 rounded">
        <thead class="thead-dark rounded-top ">
          <tr>
            <th scope="col">#</th>
            <th scope="col">CPF</th>
            <th scope="col">Nome</th>
            <th scope="col">Endereço</th>
          </tr>
        </thead>
        <tbody className='bg-light'>
          <tr>
            <th scope="row">1</th>
            <td>12045280713</td>
            <td>Joice Flores</td>
            <td>Rua Oriçanga</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>30914164880</td>
            <td>Aleir Chicarelli</td>
            <td>Mutinga</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>14524789632</td>
            <td>Yuri Lazarino</td>
            <td>Rua Heliotropio</td>
          </tr>
        </tbody>
      </table>
      <div className='w-25 d-flex justify-content-around'>
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Voltar' typeBotao='submit' click={props.clickVoltar} />
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Avançar' typeBotao='submit' click={props.clickAvancar} />
      </div>
    </div>
  )
}

function Enriquec3(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
      <BarraProgresso ValorMaxino='4' valorAtual='2' width='50%' NumeroProgresso='50%'/>
      <div className='bg-light w-100 mt-3'>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header border-bottom" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">Dados principais</button></h5>
            </div>
            <div
              className="collapse show"
              id="collapseOne"
              aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Nome</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Nome de casada x solteira</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Sexo</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Idade</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Data de nascimento</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Nome da mãe</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Escolaridade</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>RG</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Flag óbito</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Situação Cadastral RF</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingTwo">
              <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Dados de contato</button></h5>
            </div>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Endereço</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Telefone fixo</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Telefone celular</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Telefone comercial</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>E-mail</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingThree">
              <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Dados socio-econômicos</button></h6>
            </div>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body  d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'> Flag CLT</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>CNPJ do empregador</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>CNAE do empregador</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Código da profissão</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Descrição da profissão</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Faixa salarial</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Flag INSS</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Faixa do benefício</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Faixa renda estimada</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Flag sócio de empresa</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Participação societária</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingFour">
              <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Pessoas relacionadas</button></h6>
            </div>
            <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body  d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Mãe e Pai</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Irmãos </label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Outros Parentes</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Prováveis Parentes</label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Vizinhos </label>
                </div>
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Sócios </label>
                </div>
                <div className='d-flex flex-column border-top'>
                  <span><strong className='text-danger'>Observações:</strong> Somente telefones. </span>
                  <span>É cobrado um enriquecimento extra para cada pessoa, pois trata-se de dados de um CPF diferente do que está sendo enriquecido originalmente.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-25 d-flex justify-content-around mt-3'>
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Voltar' typeBotao='submit' click={props.clickVoltar} />
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Avançar' typeBotao='submit' click={props.clickAvancar} />
      </div>
    </div>
  )
}

function Enriquec4(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
      <BarraProgresso ValorMaxino='4' valorAtual='3' width='75%' NumeroProgresso='75%'/>
      <div className='bg-light w-100 mt-3'>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header border-bottom" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">Dados principais</button></h5>
            </div>
            <div
              className="collapse show"
              id="collapseOne"
              aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingTwo">
              <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Dados de contato</button></h5>
            </div>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingThree">
              <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Dados socio-econômicos</button></h6>
            </div>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body  d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingFour">
              <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Pessoas relacionadas</button></h6>
            </div>
            <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body  d-flex flex-wrap">
                <div className='col-4'>
                  <input type='checkbox' />
                  <label className='pl-1'>Todos</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-25 d-flex justify-content-around mt-3'>
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Voltar' typeBotao='submit' click={props.clickVoltar} />
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Avançar' typeBotao='submit' click={props.clickAvancar} />
      </div>
    </div>
  )
}

function Enriquec5(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
      <BarraProgresso ValorMaxino='4' valorAtual='4' width='100%' NumeroProgresso='100%'/>
      <div className='mt-3'>
        <h4>Concluido com Sucesso!</h4>
      </div>
      <div className='w-25 d-flex justify-content-around mt-3'>
        <Botao classesBotao='btn btn-info' forHtml='inputId' textoBotao='Voltar' typeBotao='submit' click={props.clickConcluir} />
      </div>
    </div>
  )
}

