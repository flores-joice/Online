import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './pages.scss'
import ViewConsulta from './viewConsulta';
import Enriquecer from './enriquecer'
import AtribuicaoCpf from '../components/atribuicaoCpf'
import ValidacaoHot from '../components/validacaoHot'
import { RelatorioConsulta, RelatorioEnriquecimento, RelatorioMailing } from './relatorios'
import Monitoracao from './monitoracao'
import { GerenciamentoContas } from './gerencial'
import MailingList from './mailingList'
import { apiMenu } from '../infra/api-config';
import NavHorizontal from '../components/nav-horizontal'
import { DashBoard } from '../components/dashboard'



export default class ViewNav  extends Component {
  // CONSTRUCTOR ESTA RECEBENDO PROPS
  constructor(props) {
    super(props)
    this.state = {
      // armazenar o token para novas requisiçoes de endpoint
      token: '',
      usuarioLogado: false,
      funcionalidades: [],
      valor: [],
      emailLogado: '',
      renderView : <DashBoard/>
    }
  }

  componentWillMount = async () => {
    try {
      const token = await localStorage.getItem('auth-token', token);

      
      if (token) {
        this.setState({ usuarioLogado: true }, () => {
        })
        const response = await apiMenu.get()
        //item armazena o valor da response retornada da api
        const item = response.data

        //FOR = lista todos os valores contido em item
        for (let [key, value] of item.entries(item)) {

          //aqui atribuimos os valores listados do FOR na variavel valor
          this.setState({ valor: value })
          const newFunc = []
          
          //fazemos a comparação dos valores, se true, 
          //ele envia uma string para outra variavel
  
          {
            //se o valor contido na variavel for = 1 ele execura, 
            //senão nao faz nada
            this.state.valor === "1" &&
              (newFunc = this.state.funcionalidades.concat('consulta')) &&
              (this.setState({ funcionalidades: newFunc }))
              console.log('newFunc', newFunc)
              console.log('funcionalidades', this.state.funcionalidades)
          }
          {
            this.state.valor === "9" &&
              (newFunc = this.state.funcionalidades.concat('enriquecimento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            (this.state.valor === ("9" && "10")) &&
              (newFunc = this.state.funcionalidades.concat('enriquecer')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "11" &&
              (newFunc = this.state.funcionalidades.concat('atribuicaoCpf')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "38" &&
              (newFunc = this.state.funcionalidades.concat('validacaoHot')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "16" &&
              (newFunc = this.state.funcionalidades.concat('mailingList')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "33" &&
              (newFunc = this.state.funcionalidades.concat('gerencial')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "33" &&
              (newFunc = this.state.funcionalidades.concat('gerenciamentoContas')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "34" &&
              (newFunc = this.state.funcionalidades.concat('personalizacao')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "35" &&
              (newFunc = this.state.funcionalidades.concat('extratoServicos')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "48" &&
              (newFunc = this.state.funcionalidades.concat('previaFechamento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "7" &&
              (newFunc = this.state.funcionalidades.concat('monitoramento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "7" &&
              (newFunc = this.state.funcionalidades.concat('monitoramento', 'monitConsulta')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "14" &&
              (newFunc = this.state.funcionalidades.concat('monitEnriquecimento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }

          {
            this.state.valor === "31" &&
              (newFunc = this.state.funcionalidades.concat('monitWebService')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "43" &&
              (newFunc = this.state.funcionalidades.concat('higienizacao')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "8" &&
              (newFunc = this.state.funcionalidades.concat('relatorio', 'relatConsulta')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          // {
          //   this.state.valor === "8" &&
          //     (newFunc = this.state.funcionalidades.concat('relatConsulta')) &&
          //     (this.setState({ funcionalidades: newFunc }))
          // }
          {
            this.state.valor === "15" &&
              (newFunc = this.state.funcionalidades.concat('relatEnriquecimento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "19" &&
              (newFunc = this.state.funcionalidades.concat('relatMailingList')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "32" &&
              (newFunc = this.state.funcionalidades.concat('relatWebService')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "46" &&
              (newFunc = this.state.funcionalidades.concat('relatHigienizacao')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
        };
      }
      //cria uma constante que pega o valor do token de localstorage
    } catch (response) {
      console.log('messageError', response)
    }
  }

  handleNav(id) {
    this.setState({ id : id})
    if( id === 'consulta') {
      this.setState({ renderView : <ViewConsulta/>})
    }
    if (id === 'enriquecer'){
      this.setState({ renderView : <Enriquecer/>})
    }
    if(id === 'atibuicaoCpf'){
      this.setState({ renderView : <AtribuicaoCpf/>})
    }
    if(id === 'validacaoHot'){
      this.setState({ renderView : <ValidacaoHot/>})
    }
    if(id === 'higienizacao'){
      this.setState({ renderView : <AtribuicaoCpf/>})
    }
    if(id === 'contas'){
      this.setState({ renderView : <GerenciamentoContas/>})
    }
    if(id === 'personalizacao'){
      this.setState({ renderView : <AtribuicaoCpf/>})
    }
    if(id === 'extrtatoServicos'){
      this.setState({ renderView : <AtribuicaoCpf/>})
    }
    if(id === 'previaFechamento'){
      this.setState({ renderView : <AtribuicaoCpf/>})
    }
    if(id === 'monitConsulta'){
      this.setState({ renderView : <Monitoracao/>})
    }
    if(id === 'monitEnriquec'){
      this.setState({ renderView : <Monitoracao/>})
    }
    if(id === 'monitWebService'){
      this.setState({ renderView : <Monitoracao/>})
    }
    if(id === 'relatConsulta'){
      this.setState({ renderView : <RelatorioConsulta/>})
    }
    if(id === 'relatEnriq'){
      this.setState({ renderView : <RelatorioEnriquecimento/>})
    }
    if(id === 'relatMailingList'){
      this.setState({ renderView : <RelatorioMailing/>})
    }
    if(id === 'relatHigienizacao'){
      this.setState({ renderView : <RelatorioConsulta/>})
    }
    if(id === 'relatWebService'){
      this.setState({ renderView : <RelatorioConsulta/>})
    }
    if(id === 'mailingList'){
      this.setState({ renderView : <MailingList/>})
    }


  }

  render() {
    const { funcionalidades } = this.state;
    return (
      <div className='d-flex view-body  w-100'>
      <NavHorizontal/>
        <div className='view-navVertical w-100 d-flex align-items-start justify-content-end' >
          <div className='view-navVertical__list'>
          
            {funcionalidades.includes("consulta") && (
              <Link onClick={(e) => this.handleNav('consulta')} to='/app/consulta' className='list-group-item view-navVertical__bg d-flex justify-content-between w-100'>
                <span className='text-light'>Consulta</span>
              </Link >
            )}
            {funcionalidades.includes("enriquecimento") && (
              <Link
                to='/app/enriquecimento'
                className='list-group-item view-navVertical__bg d-flex justify-content-between align-items-center dropdown-toggle'
                data-toggle="collapse"
                data-target="#enriquecimento"
                aria-controls="enriquecimento"
                aria-expanded="true"
                aria-label="Alterna navegação">
                <span className='text-light'>Enriquecimento</span>
              </Link >
            )}
            {funcionalidades.includes("enriquecer") && (
              <div className='collapse' id="enriquecimento">
                <ul
                  className="navbar-nav mr-auto pl-5" data-target="#listaEnriquecimento" aria-controls="listaEnriquecimento">
                  <li
                    className="nav-item d-flex"
                    id="listaEnriquecimento">
                    <Link
                      onClick={(e) => this.handleNav('enriquecer')}
                      className="nav-link text-light"
                      to='/app/enriquecimento/enriquecer'>Enriquecer</Link >
                  </li>
                  {funcionalidades.includes("atribuicaoCpf") && <li className="nav-item" id="listaEnriquecimento"><Link onClick={(e) => this.handleNav('atibuicaoCpf')} className="nav-link text-light" to='/app/enriquecimento/atribuicaoCPF'>Atribuição de CPF</Link></li>}
                  {funcionalidades.includes("validacaoHot") && <li className="nav-item" id="listaEnriquecimento"><Link onClick={(e) => this.handleNav('validacaoHot')} className="nav-link text-light" to='/app/enriquecimento/validacaoHot'>Validação Hot</Link></li>}
                </ul>
              </div>)}
            {funcionalidades.includes("higienizacao") && (
              <Link onClick={(e) => this.handleNav('higienizacao')} to='/app/higienizacao' id='higienizacao' className='list-group-item view-navVertical__bg d-flex justify-content-between'>
                <span className='text-light '>Higienização</span>
              </Link >
            )}
            {funcionalidades.includes("gerencial") && (
              <Link
                to='/app/gerencial'
                className='list-group-item view-navVertical__bg d-flex justify-content-between align-items-center dropdown-toggle'
                data-toggle="collapse"
                data-target="#gerencial"
                aria-controls="gerencial"
                aria-expanded="false"
                aria-label="Alterna navegação">
                <span className='text-light'>Gerencial</span>
              </Link >
            )}
            {funcionalidades.includes("gerenciamentoContas") && (
              <div className="collapse navbar-collapse" id="gerencial">
                <ul className="navbar-nav mr-auto pl-5" data-target="#listaGerencial">
                  <li className="nav-item" id="listaGerencial"><Link onClick={(e) => this.handleNav('contas')} id='contas' className="nav-link text-light" to='/app/gerencial/contas'>Contas</Link></li>
                  {
                    funcionalidades.includes("personalizacao") && <li className="nav-item" id="listaGerencial"><Link onClick={(e) => this.handleNav('personalizacao')} id='personalizacao' className="nav-link text-light" to='/app/gerencial/personalizacaoConta'>Personalização</Link></li>
                  }
                  {funcionalidades.includes("extratoServicos") && <li className="nav-item" id="listaGerencial"><Link onClick={(e) => this.handleNav('extrtatoServicos')} id='extrtatoServicos' className="nav-link text-light" to='/app/gerencial/extratoServico'>Extrato de serviços</Link></li>}
                  {funcionalidades.includes("previaFechamento") && <li className="nav-item" id="listaGerencial"><Link onClick={(e) => this.handleNav('previaFechamento')} id='previaFechamento' className="nav-link text-light" to='/app/gerencial/previaFechamento'>Prévia de fechamento</Link></li>}
                </ul>
              </div>
            )}
            {funcionalidades.includes("monitoramento") && (
              <Link to='/app/monitoracao' className='list-group-item view-navVertical__bg d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#monitoracao" aria-controls="monitoracao" aria-expanded="true" aria-label="Alterna navegação">
                <span className='text-light'>Monitoração</span>
              </Link >
            )}
            {funcionalidades.includes("monitConsulta") && (
              <div className="collapse" id="monitoracao">
                <ul className="navbar-nav mr-auto pl-5" data-target="#monitoracao">
                  <li className="nav-item" ><Link onClick={(e) => this.handleNav('monitConsulta')} id='monitConsulta' className="nav-link text-light" to='/app/monitoracao/consulta'>Consulta</Link></li>
                  {funcionalidades.includes("monitEnriquecimento") && <li className="nav-item" id="monitoracao"><Link onClick={(e) => this.handleNav('monitEnriquec')} id='monitEnriquec' className="nav-link text-light" to='/app/monitoracao/enriquecimento'>Enriquecimento</Link></li>}
                  {funcionalidades.includes("monitWebService") && <li className="nav-item" id="monitoracao"><Link onClick={(e) => this.handleNav('monitWebService')} id='monitWebService' className="nav-link text-light" to='/app/monitoracao/WebService'>Web Service</Link ></li>}
                </ul>
              </div>
            )}

            {funcionalidades.includes("relatorio") && (
              <Link to='/app/relatorio' className='list-group-item view-navVertical__bg d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado5" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className='text-light'>Relatório</span>
              </Link >
            )}
            {funcionalidades.includes("relatConsulta") && (
              <div className="collapse navbar-collapse" id="conteudoNavbarSuportado5">
                <ul className="navbar-nav mr-auto pl-5" data-toggle="#listRelatorio">
                  <li className="nav-item"><Link onClick={(e) => this.handleNav('relatConsulta')} id='relatConsulta' className="nav-link text-light" to='/app/relatorio/consulta'>Consulta</Link></li>
                  {funcionalidades.includes("relatEnriquecimento") && <li className="nav-item" id="listRelatorio"><Link onClick={(e) => this.handleNav('relatEnriq')} id='relatEnriq' className="nav-link text-light" to='/app/relatorio/enriquecimento'>Enriquecimento</Link></li>}
                  {funcionalidades.includes("relatMailingList") && <li className="nav-item" id="listRelatorio"><Link onClick={(e) => this.handleNav('relatMailingList')} id='relatMailingList' className="nav-link text-light" to='/app/relatorio/mailinglist'>Mailing list</Link></li>}
                  {funcionalidades.includes("relatHigienizacao") && <li className="nav-item" id="listRelatorio"><Link onClick={(e) => this.handleNav('relatHigienizacao')} id='relatHigienizacao' className="nav-link text-light" to='/app/relatorio/higienizacao'>Higienização</Link></li>}
                  {funcionalidades.includes("relatWebService") && <li className="nav-item" id="listRelatorio"><Link onClick={(e) => this.handleNav('relatWebService')} id='relatWebService' className="nav-link text-light" to='/app/relatorio/webService'>Web Service</Link></li>}
                </ul>
              </div>
            )}

            {funcionalidades.includes("mailingList") && (
              <Link onClick={(e) => this.handleNav('mailingList')} id='mailingList' to='/app/mailingList' className='list-group-item view-navVertical__bg d-flex justify-content-between'>
                <span className='text-light '>Mailing List</span>
              </Link >
            )}
            {/* {funcionalidades.includes("monitMailingList") && (<MonitoramentoMalingLista />)} */}
          </div >
        </div>

        <div className='view_navVertical__render mt-2 d-flex justify-content-center align-items-center'>          
          {this.state.renderView}
          {/* <MailingList/> */}
        </div>

      </div>
    )
  }
}



