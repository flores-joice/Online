import React from 'react'
import { Link } from 'react-router-dom'

// export const Consulta = (props) => (
//   <Link onClick={props.click} to='#' id='consulta' className='list-group-item bg-marine d-flex justify-content-between w-100'>
//     <span className='text-light'>Consulta</span>
//   </Link >
// )

// export const Enriquecimento = () => (
//   <Link
//     to='#menu2'
//     className='list-group-item bg-marine d-flex justify-content-between align-items-center dropdown-toggle'
//     data-toggle="collapse"
//     data-target="#enriquecimento"
//     aria-controls="enriquecimento"
//     aria-expanded="false"
//     aria-label="Alterna navegação">
//     <span className='text-light'>Enriquecimento</span>
//   </Link >
// )

// export function Enriquecer({ funcionalidades }, props ) {
//   return (
//     <div className='collapse navbar-collapse' id="enriquecimento">
//       <ul
//         className="navbar-nav mr-auto pl-5" data-target="#listaEnriquecimento" aria-controls="listaEnriquecimento">
//         <li
//           className="nav-item"
//           id="listaEnriquecimento">
//             <Link
//             onClick={(e) => this.handleNav('enriquecer')}
//             id='enriquecer'
//             className="nav-link text-light"
//             to='/app'>Enriquecer</Link ></li>
//         {funcionalidades.includes("atribuicaoCpf") && <li className="nav-item" id="listaEnriquecimento"><Link onClick={props.click} id='atibuicaoCpf' className="nav-link text-light" to='/app'>Atribuição de CPF</Link></li>}
//         {funcionalidades.includes("validacaoHot") && <li className="nav-item" id="listaEnriquecimento"><Link onClick={props.click} id='validacaoHot' className="nav-link text-light" to='/app'>Validação Hot</Link></li>}
//       </ul>
//     </div>
//   )
// }

// export const Higienizacao = (props) => (
//   <Link onClick={props.click} to='#menu4' id='higienizacao' className='list-group-item bg-marine d-flex justify-content-between'>
//     <span className='text-light '>Higienização</span>
//   </Link >
// )
// export const MailingList = (props) => (
//   <Link onClick={props.click} id='mailingList' to='#menu44' className='list-group-item bg-marine d-flex justify-content-between'>
//     <span className='text-light '>Mailing List</span>
//   </Link >
// )
// export const Gerencial = () => (
//   <Link
//     to='/menu6'
//     className='list-group-item bg-marine d-flex justify-content-between align-items-center dropdown-toggle'
//     data-toggle="collapse"
//     data-target="#gerencial"
//     aria-controls="gerencial"
//     aria-expanded="false"
//     aria-label="Alterna navegação">
//     <span className='text-light'>Gerencial</span>
//   </Link >)


// export function GerenciamentoContas({ funcionalidades }, props ) {
//   return (
//     <div className="collapse navbar-collapse" id="gerencial">
//       <ul className="navbar-nav mr-auto pl-5" data-target="#listaGerencial">
//         <li className="nav-item" id="listaGerencial"><Link onClick={props.click} id='contas' className="nav-link text-light" to='/app'>Contas</Link></li>
//         {
//           funcionalidades.includes("personalizacao") && <li className="nav-item" id="listaGerencial"><Link onClick={props.click} id='personalizacao' className="nav-link text-light" to='/app'>Personalização</Link></li>
//         }
//         {funcionalidades.includes("extratoServicos") && <li className="nav-item" id="listaGerencial"><Link onClick={props.click} id='extrtatoServicos' className="nav-link text-light" to='/app'>Extrato de serviços</Link></li>}
//         {funcionalidades.includes("previaFechamento") && <li className="nav-item" id="listaGerencial"><Link onClick={props.click} id='previaFechamento' className="nav-link text-light" to='/app'>Prévia de fechamento</Link></li>}
//       </ul>
//     </div>
//   )
// }

// export const Monitoramento = () => (
//   <Link to='#menu5' className='list-group-item bg-marine d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado3" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
//     <span className='text-light'>Monitoramento</span>
//   </Link >
// )

// export function MonitoramentoConsulta({ funcionalidades }, props ) {
//   return (
//     <div className="collapse navbar-collapse" id="conteudoNavbarSuportado3">
//       <ul className="navbar-nav mr-auto pl-5" data-target="#monitoracao">
//         <li className="nav-item" id="monitoracao"><Link onClick={props.click} id='monitConsulta' className="nav-link text-light" to='/app'>Consulta</Link></li>
//         {funcionalidades.includes("monitEnriquecimento") && <li className="nav-item" id="monitoracao"><Link onClick={props.click} id='monitEnriquec' className="nav-link text-light" to='/app'>Enriquecimento</Link></li>}
//         {funcionalidades.includes("monitWebService") && <li className="nav-item" id="monitoracao"><Link onClick={props.click} id='monitWebService' className="nav-link text-light" to='/app'>Web Service</Link ></li>}
//       </ul>
//     </div>
//   )
// }

// export const Relatario = () => (
//   <Link to='/menu7' className='list-group-item bg-marine d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado5" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
//     <span className='text-light'>Relatório</span>
//   </Link >
// )

// export function RelatarioConsulta({ funcionalidades }, props) {
//   return (
//     <div className="collapse navbar-collapse" id="conteudoNavbarSuportado5">
//       <ul className="navbar-nav mr-auto pl-5" data-toggle="#listRelatorio">
//         <li className="nav-item"><Link onClick={props.click} id='relatConsulta' className="nav-link text-light" to='/app'>Consulta</Link></li>
//         {funcionalidades.includes("relatEnriquecimento") && <li className="nav-item" id="listRelatorio"><Link onClick={props.click} id='monitEnriquec' className="nav-link text-light" to='/app'>Enriquecimento</Link></li>}
//         {funcionalidades.includes("relatMailingList") && <li className="nav-item" id="listRelatorio"><Link onClick={props.click} id='monitMailingList' className="nav-link text-light" to='/app'>Mailing list</Link></li>}
//         {funcionalidades.includes("relatHigienizacao") && <li className="nav-item" id="listRelatorio"><Link onClick={props.click} id='monitHigienizacao' className="nav-link text-light" to='/app'>Higienização</Link></li>}
//         {funcionalidades.includes("relatWebService") && <li className="nav-item" id="listRelatorio"><Link onClick={props.click} id='monitWebService' className="nav-link text-light" to='/app'>Web Service</Link></li>}
//       </ul>
//     </div>
//   )
// }
