import React, { Component } from 'react'
import './components.scss'
import MailingList from '../pages/mailingList';

export default class MailingListPessFisica extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: <Localizacao avancar={(e) => this.handleRender('renda')} cancelar={(e) => this.handleRender('mailling')} />
    }
  }
  handleRender(id) {
    if (id == 'renda') {
      this.setState({ view: <Renda clickNext={(e) => this.handleRender('idade')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'idade') {
      this.setState({ view: <Idade clickNext={(e) => this.handleRender('profissao')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'profissao') {
      this.setState({ view: <Profissao clickNext={(e) => this.handleRender('sexo')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'sexo') {
      this.setState({ view: <Sexo clickNext={(e) => this.handleRender('escolaridade')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'escolaridade') {
      this.setState({ view: <Escolaridade clickNext={(e) => this.handleRender('exclusoes')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'localizacao') {
      this.setState({ view: <Localizacao avançar={(e) => this.handleRender('localizacao')} cancelar={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'exclusoes') {
      this.setState({ view: <Exclusoes clickNext={(e) => this.handleRender('resumo')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'resumo') {
      this.setState({ view: <Resumo clickNext={(e) => this.handleRender('conclusao')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'conclusao') {
      this.setState({ view: <Conclusao clickFim={(e) => this.handleRender('conclusao')} clickCancel={(e) => this.handleRender('mailling')} /> })
    }
    if (id == 'mailling') {
      this.setState({ view: <MailingList /> })
    }
  }
  render() {
    return (
      <div className=' d-flex justify-content-center'>
        {this.state.view}
      </div>
    )
  }
}

export class Localizacao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderView: <Cidade />
    }
  }

  handleView(id) {
    if (id == 'cidade') {
      this.setState({ renderView: <Cidade /> })
    }
    if (id == 'estado') {
      this.setState({ renderView: <Estado /> })
    }
    if (id == 'brasil') {
      this.setState({ renderView: <Brasil /> })
    }
    if (id == 'cep') {
      this.setState({ renderView: <CEP /> })
    }
    if (id == 'ddd') {
      this.setState({ renderView: <DDD /> })
    }
  }

  render(props) {
    return (
      <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
        <div className='w-75 bg-light p-5 loca-div shadow rounded'>
          <p>Quer filtrar por:</p>
          <div className='d-flex justify-content-around  border-top pt-4 mailing-div__local mb-4'>
            <button className='btn border-info col mx-1' onClick={(e) => this.handleView('cidade')}>Cidade</button>
            <button className='btn border-info col mx-1' onClick={(e) => this.handleView('estado')}>Estado</button>
            <button className='btn border-info col mx-1' onClick={(e) => this.handleView('brasil')}>Brasil</button>
            <button className='btn border-info col mx-1' onClick={(e) => this.handleView('cep')}>CEP</button>
            <button className='btn border-info col mx-1' onClick={(e) => this.handleView('ddd')}>DDD</button>
          </div>
          {this.state.renderView}
          <div className='d-flex justify-content-end pt-3'>
            <span className='mr-5'>Localização Obrigatória *</span>
            <button className='btn btn-info' onClick={this.props.avancar}>Avançar</button>
            <button className='btn btn-danger ml-2' onClick={this.props.cancelar}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  }
}
function Cidade(props) {
  return (
    <div className='w-100 border p-4 rounded'>
      <div className='w-100 d-flex align-items-center'>
        <div className='col-5 p-0'>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Estado</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Escolher...</option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
              <option value='São Paulo'>São Paulo</option>
              <option value='Minas Gerais'>Minas Gerais</option>
              <option value='Espírito Santo'>Espírito Santo</option>
              <option value='Paraná'>Paraná</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Cidade</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" disabled>
              <option selected>Escolher...</option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
              <option value='São Paulo'>São Paulo</option>
              <option value='Vitória'>Vitória</option>
              <option value='Curitiba'>Curitiba</option>
              <option value='Belo Horizonte'>Belo Horizonte</option>
            </select>
          </div>
        </div>
        <div className='col-2 d-flex flex-column'>
          <button className='btn btn-info'>Adicionar</button>
          <button className='btn btn-info my-1'>Remover</button>
          <button className='btn btn-info'>Limpar</button>
        </div>
        <div className='col-5 border rounded box-select'>
          <span>{props.selecao}</span>
        </div>
      </div>
      <div className='d-flex flex-wrap mt-4 border-top py-2'>
        <p className='col-12 h6'>Selecione como deseja a saída da contagem:</p>
        <div className="input-group col-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p className="form-control">Contagem única</p>
        </div>
        <div className="input-group col-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p className="form-control">Contagem separada por cidade</p>
        </div>
      </div>
    </div>
  )
}
function Estado(props) {
  return (
    <div className='w-100 border p-4 rounded'>
      <div className='w-100 d-flex align-items-center'>
        <div className='col-5 p-0'>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Estado</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Escolher...</option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
              <option value='São Paulo'>São Paulo</option>
              <option value='Minas Gerais'>Minas Gerais</option>
              <option value='Espírito Santo'>Espírito Santo</option>
              <option value='Paraná'>Paraná</option>
            </select>
          </div>
        </div>
        <div className='col-2 d-flex flex-column'>
          <button className='btn btn-info'>Adicionar</button>
          <button className='btn btn-info my-1'>Remover</button>
          <button className='btn btn-info'>Limpar</button>
        </div>
        <div className='col-5 border rounded box-select'>
          <span>{props.selecao}</span>
        </div>
      </div>
      <div className='d-flex flex-wrap mt-4 border-top py-2'>
        <p className='col-12 h6'>Selecione como deseja a saída da contagem:</p>
        <div className="input-group col-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p className="form-control">Contagem única</p>
        </div>
        <div className="input-group col-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p className="form-control">Separar por Estado</p>
        </div>
        <div className="input-group col-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p className="form-control">Separar por cidade</p>
        </div>
      </div>
    </div>
  )
}
function Brasil() {
  return (
    <div className='w-100 border p-4 rounded'>
      <div class="alert alert-info" role="alert">
        O tempo para contagem em nível nacional pode ser alto, recomendamos que defina os filtros de pesquisa.
      </div>
      <div className='d-flex flex-wrap mt-4 border-top py-2'>
        <p className='col-12 h6'>Selecione como deseja a saída da contagem:</p>
        <div class="input-group col-4">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p class="form-control">Contagem única</p>
        </div>
        <div class="input-group col-4">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p class="form-control">Separar por Estado</p>
        </div>
        <div class="input-group col-4">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p class="form-control">Separar por cidade</p>
        </div>
      </div>
    </div>

  )
}
function DDD(props) {
  return (
    <div className='w-100 border p-4 rounded'>
      <div className='w-100 d-flex align-items-center'>
        <div className='col-5 p-0'>
          <div class="input-group mb-3 ">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">DDD</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Escolher...</option>
              <option value='Rio de Janeiro'>21</option>
              <option value='São Paulo'>11</option>
              <option value='Minas Gerais'>31</option>
              <option value='Espírito Santo'>27</option>
              <option value='Paraná'>41</option>
            </select>
          </div>
        </div>
        <div className='col-2 d-flex flex-column'>
          <button className='btn btn-info'>Adicionar</button>
          <button className='btn btn-info my-1'>Remover</button>
          <button className='btn btn-info'>Limpar</button>
        </div>
        <div className='col-5 border rounded box-select'>
          <span>{props.selecao}</span>
        </div>
      </div>
      <div className='d-flex flex-wrap mt-4 border-top py-2'>
        <p className='col-12 h6'>Selecione como deseja a saída da contagem:</p>
        <div class="input-group col-6">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p class="form-control">Contagem única</p>
        </div>
        <div class="input-group col-6">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
            </div>
          </div>
          <p class="form-control">Contagem separada por cidade</p>
        </div>
      </div>
    </div>
  )
}
function CEP(props) {
  return (
    <div className='w-100 border p-4 rounded'>
      <div className='w-100 d-flex'>
        <div className='col-5 border rounded box-select'>
          <span>{props.selecao}</span>
        </div>
        <div className='col-2 d-flex flex-column'>
          <button className='btn btn-info'>Adicionar</button>
          <button className='btn btn-info my-1'>Remover</button>
          <button className='btn btn-info'>Limpar</button>
        </div>
        <div className='col-5 border rounded box-select'>
          <span>{props.selecao}</span>
        </div>
      </div>
      <div className='d-flex flex-wrap mt-4 border-top py-2'>
        <p className='col-12 h6'>Digite o CEP para pesquisar</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">CEP</span>
          </div>
          <input type="text" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1" />
        </div>
      </div>
    </div>

  )
}
function Renda(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Origem da renda</p>
        <hr />
        <div className='d-flex py-2'>
          <div class="input-group col-4">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Indiferente</p>
          </div>
          <div class="input-group col-4">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Filtrar</p>
          </div>
        </div>
        <hr />
        <div className='d-flex'>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" name="renda" aria-label="Botão checkbox para usar faixa de renda" />
              </div>
            </div>
            <p class="form-control">Usar Faixa de Renda</p>
          </div>
          <div className='d-flex col-5 justify-content-around'>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">De</span>
              </div>
              <input type="number" class="form-control" value="500" />
            </div>
            <div class="input-group mb-3 ml-1">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Até</span>
              </div>
              <input type="number" class="form-control" value="50000" />
            </div>

          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <span className='mr-5'>Localização Obrigatória *</span>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
function Idade(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Idade</p>
        <hr />
        <div className='d-flex py-2'>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Indiferente</p>
          </div>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Filtrar</p>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-center'>
          <div className='d-flex justify-content-around'>
            <div class="input-group mb-3 col">
              <div class="input-group-prepend">
                <span class="input-group-text">De</span>
              </div>
              <input type="number" class="form-control" value="18" />
            </div>
            <div class="input-group mb-3 ml-1 col">
              <div class="input-group-prepend">
                <span class="input-group-text">Até</span>
              </div>
              <input type="number" class="form-control" value="75" />
            </div>

          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
function Profissao(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Profissão</p>
        <hr />
        <div className='d-flex py-2'>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Indiferente</p>
          </div>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Filtrar</p>
          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
function Sexo(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Sexo</p>
        <hr />
        <div className='d-flex py-2'>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Indiferente</p>
          </div>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Masculino</p>
          </div>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Feminino</p>
          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
function Escolaridade(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Escolaridade</p>
        <hr />
        <div className='d-flex py-2'>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Indiferente</p>
          </div>
          <div class="input-group col">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="estado" aria-label="Botão radio para acompanhar input text" />
              </div>
            </div>
            <p class="form-control">Filtrar</p>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-center'>
          <div className='d-flex justify-content-around'>
            <div class="input-group mb-3 col">
              <div class="input-group-prepend">
                <span class="input-group-text">De</span>
              </div>
              <input type="number" class="form-control" value="18" />
            </div>
            <div class="input-group mb-3 ml-1 col">
              <div class="input-group-prepend">
                <span class="input-group-text">Até</span>
              </div>
              <input type="number" class="form-control" value="75" />
            </div>

          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
export function Exclusoes(props) {
  return (
    <div className='p-3 w-25 d-flex flex-column justify-content-center bg-light rounded'>
      <div>
        <p className='text-danger text-center font-weight-bold m-0 p-0'>Exclusões</p>
      </div>
      <div className='d-flex justify-content-center pt-3'>
        <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
        <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
      </div>
    </div>
  )
}
export function Resumo(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h6'>Resumo</p>
        <hr />
        <div className='d-flex py-2'>
          <div className="card text-white bg-warning mb-3 col mx-1">
            <div className="card-header">Endereços</div>
            <div className="card-body">
              <p className="h4 text-center">5.670</p>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3 col mx-1">
            <div className="card-header">Telefones</div>
            <div className="card-body">
              <p className="h4 text-center">3.737</p>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3 col mx-1">
            <div className="card-header">Tel. Fixos</div>
            <div className="card-body">
              <p className="h4 text-center">1.345</p>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3 col mx-1">
            <div className="card-header">Tel. Móveis</div>
            <div className="card-body">
              <p className="h4 text-center">2.850</p>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3 col mx-1">
            <div className="card-header">Emails</div>
            <div className="card-body">
              <p className="h4 text-center">454</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="card text-white bg-info mb-3 col mx-1">
            <div className="card-header text-center h4">Total</div>
            <div className="card-body">
              <p className="card-text text-center h3">5.670</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickNext}>Avançar</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
export function Conclusao(props) {
  return (
    <div className='py-3 w-100 local d-flex flex-column justify-content-center align-items-center'>
      <div className='w-75 bg-light p-5 loca-div shadow rounded'>
        <p className='col-12 h4'>Finalizar</p>
        <hr />
        <p>Preencha os dados finais e aperte Concluir</p>
        <div className='d-flex py-2'>
          <div className='col-12 p-0 d-flex'>

            <div className="input-group mb-3 col">
              <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Cliente</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Escolher...</option>
                <option value='Rio de Janeiro'>Sistema</option>
                <option value='São Paulo'>PGA</option>
                <option value='Minas Gerais'>InfoQualy</option>
                <option value='Espírito Santo'>Exata</option>
              </select>
            </div>

            <div class="input-group mb-3 col">
              <div class="input-group-prepend">
                <span class="input-group-text">Identificador</span>
              </div>
              <input type="text" class="form-control" placeholder='Identificador único para esta contagem' />
            </div>

          </div>
        </div>

        <hr />

        <div className='d-flex justify-content-center flex-column col-12'>
        
          <div className='mb-3'>
            <p className='h6'>Acompanhamento</p>
          </div>
          <div className='d-flex'>

            <div class="input-group mb-3 col">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Chebox para permitir input text" />
                </div>
              </div>
              <p class="form-control">Ao final do processo será enviado e-mail para...    </p>
            </div>

            <div className='col'>
              <input class="form-control" type="email" aria-label="Chebox para permitir input text" placeholder='Digite aqui seu email' />
            </div>

          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-end pt-3'>
          <button className='btn btn-info' onClick={props.clickFim}>Concluir</button>
          <button className='btn btn-danger ml-2' onClick={props.clickCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}