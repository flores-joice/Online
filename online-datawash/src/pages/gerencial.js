import React, { Component } from 'react'
import './pages.scss'
// import InputBuscar, { Option } from '../components/input-button'

export class GerenciamentoContas extends Component {
  constructor() {
    super()
    this.state = {
      view: <p>Sem Click</p>
    }
  }

  handleClick = (e) => {
    this.setState({ view: <FormGerenciamento /> })
  }

  render() {
    return (
      <div className='container d-flex flex-column justify-content-around align-items-center marginPage'>
        <p className='dashboard-title h4 text-info'>Gerenciamento de Contas</p>
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect04" aria-label="Exemplo de select com botão addon">
            <option selected>Escolher...</option>
            <option value='sistema'>Sistema</option>
            <option value='alx'>ALX Revenda</option>
            <option value='autoFacil'>Auto Facil</option>
            <option value='buscoFamilia'>Busco Minha Familia</option>
            <option value='PGA'>PGA</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-info" type="button" onClick={this.handleClick}>Buscar</button>
          </div>
        </div>
        <div className='w-100 mt-3'>
          {this.state.view}
        </div>
      </div>
    )
  }
}

const FormGerenciamento = (props) => {
  return (
    <div className='col-12 border rounded bg-light p-2 d-flex flex-wrap'>

      <div className='w-50 d-flex rounded pt-3 px-3 mb-2'>
        <div className='w-100 d-flex flex-column pr-3'>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Cliente</span>
            </div>
            <input type="text" class="form-control" placeholder='Sistema' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Contato</span>
            </div>
            <input type="text" class="form-control" placeholder='' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" placeholder='datawash@datawash.com.br' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Tipo de Cliente</span>
            </div>
            <input type="text" class="form-control" placeholder='Sistema' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Razão Social</span>
            </div>
            <input type="text" class="form-control" placeholder='' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Telefone</span>
            </div>
            <input type="text" class="form-control" placeholder='' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">IP de Acesso</span>
            </div>
            <input type="text" class="form-control" placeholder='' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Ativo</span>
            </div>
            <input type="text" class="form-control" placeholder='Sim' aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>

        </div>
      </div>

      <div className='w-50 d-flex rounded pt-3 px-3 mb-2'>
        <div className='w-100 d-flex flex-column'>

          <table class="table rounded">
            <thead class="table-info">
              <tr>
                <th scope="col"></th>
                <th scope="col">Produto</th>
                <th scope="col">Ativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Consulta Online</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Consultas + Enriquecimento</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Enriquecimento</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Higienização</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Mailing List</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>SMS</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Web Service</td>
                <td>Ativo</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      <div className='w-50 d-flex rounded pt-3 px-3'>
        <div className='w-50 d-flex flex-column pr-3'>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Cliente</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Contato</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Tipo de Cliente</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className='w-50 d-flex flex-column'>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Razão Social</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Telefone</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">IP de Acesso</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Ativo</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
      </div>
      <div className='w-50 d-flex rounded pt-3 px-3'>
        <div className='w-50 d-flex flex-column pr-3'>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Cliente</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Contato</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Tipo de Cliente</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className='w-50 d-flex flex-column'>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Razão Social</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Telefone</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">IP de Acesso</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Ativo</span>
            </div>
            <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
      </div>

    </div>
  )

}