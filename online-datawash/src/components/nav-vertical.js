import React, {Component} from 'react'
import ApiMenu from '../apis/api.menu'
import config from '../apis/api.login'
import './components.css'

export default class NavVertical extends Component {
  constructor(props){
    super(props)
    this.state= {
      // armazenar o token para novas requisiçoes de endpoint
      token : '',
      menu : '',
    }
  }
  token(email, senha, token){
    config(email, senha, token)
    .then(token => {
      let dado = JSON.parse(token)
      console.log(dado.accessToken)
    })

  }

  render () {
    return (
      <div className='nav-vertical bg-dark d-flex align-items-center'>
        <div className='w-100' onChange={this.token}>
          <h1>teste</h1>
          <ApiMenu />
        </div>
      </div >
  
    )

  }
}
//  <a href='#menu2' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado1" aria-controls="conteudoNavbarSuportado1" aria-expanded="false" aria-label="Alterna navegação">
//             <span className='text-light'>Enriquecimento</span>
//           </a >
//           <div className='collapse navbar-collapse' id="conteudoNavbarSuportado1">
//             <ul className="navbar-nav mr-auto pl-5">
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Enriquecer</a ></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Atribuição de CPF</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Validação Hot</a></li>
//             </ul>
//           </div>
//           <a href='#menu4' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between'>
//             <span className='text-light '>Higienização</span>
//           </a >
//           <a href='/menu6' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado4" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
//             <span className='text-light'>Gerencial</span>
//           </a >
//           <div className="collapse navbar-collapse" id="conteudoNavbarSuportado4">
//             <ul className="navbar-nav mr-auto pl-5">
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Contas</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Personalização</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Extrato de serviços</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Prévia de fechamento</a></li>
//             </ul>
//           </div>
//           <a href='#menu5' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado3" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
//             <span className='text-light'>Monitoramento</span>
//           </a >
//           <div className="collapse navbar-collapse" id="conteudoNavbarSuportado3">
//             <ul className="navbar-nav mr-auto pl-5">
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Consulta</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Enriquecimento</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Web Service</a ></li>
//             </ul>
//           </div>
//           <a href='/menu7' className='list-group-item list-group-item-action bg-dark d-flex justify-content-between align-items-center dropdown-toggle' data-toggle="collapse" data-target="#conteudoNavbarSuportado5" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
//             <span className='text-light'>Relatório</span>
//           </a >
//           <div className="collapse navbar-collapse" id="conteudoNavbarSuportado5"> 
//   <ul className="navbar-nav mr-auto pl-5">
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Consulta</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Enriquecimento</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Mailing list</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Higienização</a></li>
//               <li className="nav-item"><a className="nav-a text-light" href='/'>Web Service</a></li>
//             </ul>
//           </div> 



