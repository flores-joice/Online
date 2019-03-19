import React, { Component } from 'react'
import filter from '../assets/filter.png'

export class RelatorioConsulta extends Component {
  constructor() {
    super()
    this.state = {
      renderRelatorio: ''
    }
  }

  handleClick = () => {
    this.setState({ renderRelatorio: <RelatorioTable /> })

  }
  render() {
    return (
      <FiltroRelatorio
        children={
          <div>
            <div className='d-flex align-items-center pb-3 border-bottom'>
              <div className='col-2'>
                <h5>Defina o período:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Tipo de relatório:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Analítico</span>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Sintético</span>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Total</span>
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Cliente:</h5>
              </div>
              <div class="input-group col">
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Escolha o cliente</option>
                  <option value="1">Sistema</option>
                  <option value="2">PGA</option>
                  <option value="3">InfoQualy</option>
                </select>
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Usuário:</h5>
              </div>
              <div class="input-group col">
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Escolha o usuário</option>
                  <option value="1">Alan</option>
                  <option value="2">Alex</option>
                  <option value="3">Douglas</option>
                  <option value="4">Emerson</option>
                  <option value="5">Joice</option>
                  <option value="6">Natália</option>
                </select>
              </div>
            </div>
          </div>
        }
        click={this.handleClick}
        renderRelatorio={this.state.renderRelatorio}
      />
    )
  }
}

function RelatorioTable() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
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
          <tr>
            <th scope="row">4</th>
            <td>14524789632</td>
            <td>Ricardo</td>
            <td>Rua Oriçanga</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>14524789632</td>
            <td>Alex</td>
            <td>Av. Jabaquara</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>14524789632</td>
            <td>Emerson</td>
            <td>Metro Pça da Árvore</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>14524789632</td>
            <td>Natália</td>
            <td>Guaianases</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>14524789632</td>
            <td>Douglas</td>
            <td>Zona Leste</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function FiltroRelatorio(props) {
  return (
    <div className='h-100 relatorio-page container'>
      <div className='w-100  relatorio-page p-3'>
        <div className='w-100 d-flex bg-light justify-content-end container rounded border p-2'>
          <button className="btn d-flex justify-content-center align-items-center border-info rounded relatorio-page__filter " data-toggle="collapse" href="#collapseExample" aria-expanded='false' aria-controls="collapseExample">
            <span className='text-info pr-3'>Filtro</span>
            <img className='relatorio-page__img' src={filter} alt="icone de busca avançada" />
          </button>

        </div>
        <div class="collapse w-100 bg-light container rounded-bottom py-3" id="collapseExample">
          {props.children}
          <div className='d-flex align-items-center pt-2 justify-content-end '>
            <button className='btn btn-info mr-3' onClick={props.click}>Gerar Relatório</button>
          </div>
        </div>
      </div>
      <div className='w-100 container relatorio-page'>
        {props.renderRelatorio}
      </div>
    </div>
  )
}

export class RelatorioEnriquecimento extends Component {
  constructor() {
    super()
    this.state = {
      renderRelatorio: ''
    }
  }

  handleClick = () => {
    this.setState({ renderRelatorio: <RelatorioTable /> })

  }
  render() {
    return (
      <FiltroRelatorio
        children={
          <div>
            <div className='d-flex align-items-center pb-3 border-bottom'>
              <div className='col-2'>
                <h5>Defina o período:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col'>
                <h5 className=''>Tipo de relatório:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Analítico</span>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Sintético</span>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Total</span>
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Tipo de Enriquecimento:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">P.Física</span>
              </div><div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">P. Jurídica</span>
              </div><div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Atribuição</span>
              </div><div class="input-group col">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" aria-label="Radio button for following text input" />
                  </div>
                </div>
                <span class="form-control">Todos</span>
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Cliente:</h5>
              </div>
              <div class="input-group col">
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Escolha o cliente</option>
                  <option value="1">Sistema</option>
                  <option value="2">PGA</option>
                  <option value="3">InfoQualy</option>
                </select>
              </div>
            </div>
          </div>
        }
        click={this.handleClick}
        renderRelatorio={this.state.renderRelatorio}
      />
    )
  }
}

export class RelatorioMailing extends Component {
  constructor() {
    super()
    this.state = {
      renderRelatorio: ''
    }
  }

  handleClick = () => {
    this.setState({ renderRelatorio: <RelatorioTable /> })

  }
  render() {
    return (
      <FiltroRelatorio
        children={
          <div>
            <div className='d-flex align-items-center pb-3 border-bottom'>
              <div className='col-2'>
                <h5>Defina o período:</h5>
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="input-group col">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">De:</span>
                </div>
                <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Cliente:</h5>
              </div>
              <div class="input-group col">
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Escolha o cliente</option>
                  <option value="1">Sistema</option>
                  <option value="2">PGA</option>
                  <option value="3">InfoQualy</option>
                </select>
              </div>
            </div>
            <div className='d-flex align-items-center py-3 border-bottom'>
              <div className='col-2'>
                <h5 className=''>Carteira:</h5>
              </div>
              <div class="input-group col">
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Escolha o carteira</option>
                  <option value="1">Clientes Próprios</option>
                </select>
              </div>
            </div>
          </div>
        }
        click={this.handleClick}
        renderRelatorio={this.state.renderRelatorio}
      />
    )
  }
}