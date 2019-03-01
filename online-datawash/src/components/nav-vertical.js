import React, { Component } from 'react'
import './components.css'
import { apiMenu } from '../infra/api-config';
import { Consulta, Enriquecimento, Higienizacao, EnriquecimentoDrop, Gerencial, GerencialDrop, Monitoramento, MonitoramentoDrop, Relatario, RelatarioDrop } from '../components/itensMenu'


export default class NavVertical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // armazenar o token para novas requisiçoes de endpoint
      token: '',
      usuarioLogado: false,
      funcionalidades: []

    }
  }

  componentDidMount = async () => {
    try {
      //cria uma constante que pega o valor do token de localstorage
      const token = await localStorage.getItem('auth-token', token);

      if (token) {
        console.log(token)
        this.setState({ usuarioLogado: true }, () => {
        })
        const response = await apiMenu.get()
        const item = response.data
        for (let i = 0; i >= item.length; i++) {
          if (item === "1") {
            return (
              console.log('ok')
              
              )
            }
          }
          console.log(item)
        }
    } catch (response) {
      // const error = responseMenu.originalError;
      // const messageError = error.response
      console.log('messageError', response)
    }
  }

  render() {
    const { item } = this.state;
    return (
      <div className='nav-vertical bg-dark d-flex align-items-center'>
        <div className='w-100'>
        <p>pegar o valor da lista</p>
          {/* {item.teste && <Consulta/>} */}
          {/* {item.enriquecimento ? <Enriquecimento /> : null}
          {item.enriquecimentoDrop ? <EnriquecimentoDrop /> : null}
          {item.gerencial ? <Gerencial /> : null}
          {item.gerencialDrop ? <GerencialDrop /> : null}
          {item.monitoramento ? <Monitoramento /> : null}
          {item.monitoramentoDrop ? <MonitoramentoDrop /> : null}
          {item.relatorio ? <Relatario /> : null}
          {item.relatorioDrop ? <RelatarioDrop /> : null} */}
        </div>
      </div >
    )
  }
}

//FUNÇÃO MAP()


// {lista.map((lista, index) =>
//   <div className='d-flex flex-wrap ' key={index}>
//     {lista.ENDERECOS && lista.ENDERECOS.map((endereco, index) =>
//       <span key={index} className='col text-left'><strong>Endereço:</strong>
//         {`
//             ${endereco.TIPO_LOGRADOURO ? `${endereco.TIPO_LOGRADOURO}` : ''} 
//             ${endereco.LOGRADOURO ? `${endereco.LOGRADOURO}` : ''} 
//             ${endereco.NUMERO ? `${endereco.NUMERO}` : ''} 
//             ${endereco.BAIRRO ? `${endereco.BAIRRO}` : ''}, 
//             ${endereco.CIDADE ? `${endereco.CIDADE}` : ''}, 
//             ${endereco.UF ? `${endereco.UF}` : ''} - 
//             ${endereco.CEP ? `${endereco.CEP}` : ''}  
//             ` || 'Nenhum endereço encontrado'
//         }
//       </span>
//     )}
//   </div>
// )}




//////////////////////////////////////////////////////

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



