import React, { Component } from 'react'
import BasicTable from '../components/tabela'
import './pages.scss'


export class GerenciamentoContas extends Component {
  constructor() {
    super()
    this.state = {
      view: ''
    }
  }

  handleClick = () => {
    this.setState({ view: <BasicTable /> })
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-around align-items-center marginPage'>
        <p className='dashboard-title h4 text-info'>Gerenciamento de Contas</p>
        <div className="input-group">
          <select className="selectpicker" data-live-search="true">
            <option >Escolher...</option>
            <option data-tokens='sistema' value='sistema'>Sistema</option>
            <option data-tokens='alx revenda' value='alx'>ALX Revenda</option>
            <option data-tokens='auto facil' value='autoFacil'>Auto Facil</option>
            <option data-tokens='busco minha familia' value='buscoFamilia'>Busco Minha Familia</option>
            <option data-tokens='pga' value='PGA'>PGA</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-info" type="button" onClick={this.handleClick}>Buscar</button>
          </div>
        </div>
        <div className='w-100 mt-3 '>
          {this.state.view}
        </div>
      </div>
    )
  }
}


const Detalhes = () => {
  return (
    
    <div className='w-100 d-flex align-items-center rounded pt-3 px-3 mb-2'>
      <div className='w-50 d-flex flex-column pr-3'>

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

      </div>
      <div className='w-50 d-flex flex-column pr-3'>

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
  )
}

const Acesso = () => {
  return (
    <div className='w-100 d-flex rounded pt-3 px-3 mb-2 '>
      <div className='w-100 d-flex flex-column'>

        <table class="table rounded border ml-2">
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
  )
}

const Usuarios = () => {
  return (
    <div className='w-100 d-flex rounded pt-3 px-3 mb-2 '>
      <div className='w-100 d-flex flex-column'>

        <table class="table rounded border">
          <thead class="table-info">
            <tr>
              <th scope="col"></th>
              <th scope="col">E-mail</th>
              <th scope="col">Administrador</th>
              <th scope="col">Acessos</th>
              <th scope="col">Ativo</th>
              <th scope="col">Último acesso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>alan@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>alex.lima@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>datawash@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>douglas.acioli@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>emerson.tamura@datawash.com.br	</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>joice.flores@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>natalia@datawash.com.br</td>
              <td>Sim</td>
              <td>Todos</td>
              <td>Sim</td>
              <td>09/04/2019 09:18:06</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    // <div>
    //   <div className='w-100 d-flex rounded pt-3 px-3'>
    //     <div className='w-50 d-flex flex-column pr-3'>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Cliente</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Contato</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Email</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Tipo de Cliente</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //     </div>
    //     <div className='w-100 d-flex flex-column'>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Razão Social</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Telefone</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">IP de Acesso</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Ativo</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className='w-50 d-flex rounded pt-3 px-3'>
    //     <div className='w-50 d-flex flex-column pr-3'>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Cliente</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Contato</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Email</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Tipo de Cliente</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //     </div>
    //     <div className='w-50 d-flex flex-column'>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Razão Social</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Telefone</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">IP de Acesso</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //       <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //           <span class="input-group-text bg-info text-light" id="inputGroup-sizing-default">Ativo</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Exemplo do tamanho do input" aria-describedby="inputGroup-sizing-default" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

const Politica = () => {
  return (
    <div className='w-100 d-flex rounded pt-3 px-3 mb-2 '>
      <div className='w-100 d-flex flex-column'>

        <table class="table rounded border">
          <thead class="table-info">
            <tr>
              <th scope="col"></th>
              <th scope="col">Produto</th>
              <th scope="col">Modalidade de Pagamento</th>
              <th scope="col">Tipo Tarifação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>Preço fixo</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

const Creditos = () => {
  return (
    <div className='w-100 d-flex flex-column rounded pt-3 pl-5 pr-3 mb-2'>
      <div className='w-100 d-flex flex-column'>

        <table class="table rounded border">
          <thead class="table-info">
            <tr>
              <th scope="col"></th>
              <th scope="col">Produto</th>
              <th scope="col">Modalidade de pagamento</th>
              <th scope="col">Total créditos</th>
              <th scope="col">Créditos consumidos</th>
              <th scope="col">Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Consulta Online</td>
              <td></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Enriquecimento</td>
              <td></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mailing List</td>
              <td>Pré-pago</td>
              <td>0</td>
              <td>8607375</td>
              <td>-8607375</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Higienização</td>
              <td>Pré-pago</td>
              <td>0</td>
              <td>8607375</td>
              <td>-8607375</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Consultas + Enriquecimento</td>
              <td>Pré-pago</td>
              <td>50</td>
              <td>35423418</td>
              <td>-35423368</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Web Service</td>
              <td>Pré-pago</td>
              <td>0</td>
              <td>29487</td>
              <td>-29487</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>SMS</td>
              <td>Pré-pago</td>
              <td>10000</td>
              <td>39164</td>
              <td>-29164</td>
            </tr>
          </tbody>
        </table>

      </div>

      <hr />

      <div className='w-100 mt-2 d-flex flex-column'>
        <h6>Histórico de Crédito</h6>
        <table class="table rounded border">
          <thead class="table-info">
            <tr>
              <th scope="col"></th>
              <th scope="col">Produto</th>
              <th scope="col">Data</th>
              <th scope="col">Créditos inseridos</th>
              <th scope="col">Saldo</th>
              <th scope="col">Realizado por</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Enriquecimento</td>
              <td>10/03/2015 15:44:46</td>
              <td>50</td>
              <td>-7205</td>
              <td>*</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Consulta Online</td>
              <td>06/07/2015 15:59:07</td>
              <td>50</td>
              <td>50</td>
              <td>*</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Consulta Online</td>
              <td>26/01/2017 16:38:38</td>
              <td>1</td>
              <td>0</td>
              <td>Alan</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Web Service</td>
              <td>26/01/2017 16:59:29</td>
              <td>20</td>
              <td>-2596</td>
              <td>Alan</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}
// const FormGerenciamento = (props) => {
//   return (
//     <div className='border bg-light d-flex flex-wrap' id='link-navegacao'>
//       <div class="w-100 d-flex justify-content-between">
//         <div class="col-3 bg-secondary py-3">
//           <div class="nav flex-column  gerencial-link" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//             <a class="nav-link border-bottom active  " id="detalhes" data-toggle="pill" href="#v-detalhes" role="tab" aria-controls="v-detalhes" aria-selected="true">Detalhes</a>
//             <a class="nav-link border-bottom" id="acesso" data-toggle="pill" href="#v-acesso" role="tab" aria-controls="v-acesso" aria-selected="false">Acesso</a>
//             <a class="nav-link border-bottom" id="usuarios" data-toggle="pill" href="#v-usuarios" role="tab" aria-controls="v-usuarios" aria-selected="false">Usuários</a>
//             <a class="nav-link border-bottom" id="politica" data-toggle="pill" href="#v-politica" role="tab" aria-controls="v-politica" aria-selected="false">Política Comercial</a>
//             <a class="nav-link" id="creditos" data-toggle="pill" href="#v-creditos" role="tab" aria-controls="v-creditos" aria-selected="false">Creditos</a>
//           </div>
//         </div>
//         <div class="col-9">
//           <div class="tab-content " id="v-pills-tabContent">
//             <div class="tab-pane fade show active" id="v-detalhes" role="tabpanel" aria-labelledby="detalhes"><Detalhes /></div>
//             <div class="tab-pane fade" id="v-acesso" role="tabpanel" aria-labelledby="acesso"><Acesso /></div>
//             <div class="tab-pane fade" id="v-usuarios" role="tabpanel" aria-labelledby="usuarios"> <Usuarios /></div>
//             <div class="tab-pane fade" id="v-politica" role="tabpanel" aria-labelledby="politica"><Politica /></div>
//             <div class="tab-pane fade" id="v-creditos" role="tabpanel" aria-labelledby="creditos"><Creditos /></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }