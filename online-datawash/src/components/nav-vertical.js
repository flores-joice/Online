import React, { Component } from 'react'
import './components.css'
import { apiMenu } from '../infra/api-config';
import {
  Consulta, Enriquecimento, Higienizacao,
  EnriquecimentoDrop, Gerencial, GerencialDrop, Monitoramento,
  MonitoramentoDrop, Relatario, RelatarioDrop
} from '../components/itensMenu'

export default class NavVertical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // armazenar o token para novas requisiçoes de endpoint
      token: '',
      usuarioLogado: false,
      funcionalidades: [],
      valor: [],
      lista: []
    }
  }

  componentDidMount = async () => {
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
          }
          {
            this.state.valor === "2" &&
              (newFunc = this.state.funcionalidades.concat('enriquecimento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "3" &&
              (newFunc = this.state.funcionalidades.concat('enriquecimentoDrop')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "4" &&
              (newFunc = this.state.funcionalidades.concat('higienizacao')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "5" &&
              (newFunc = this.state.funcionalidades.concat('gerencial')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "6" &&
              (newFunc = this.state.funcionalidades.concat('gerencialDrop')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "7" &&
              (newFunc = this.state.funcionalidades.concat('monitoramento')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "8" &&
              (newFunc = this.state.funcionalidades.concat('monitoramentoDrop')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "9" &&
              (newFunc = this.state.funcionalidades.concat('relatario')) &&
              (this.setState({ funcionalidades: newFunc }))
          }
          {
            this.state.valor === "10" &&
              (newFunc = this.state.funcionalidades.concat('relatarioDrop')) &&
              (this.setState({ funcionalidades: newFunc }))
              console.log(this.state.funcionalidades)
          }
        };
      }
    
      //cria uma constante que pega o valor do token de localstorage
    } catch (response) {
      console.log('messageError', response)
    }
  }

  render() {
    return (
      <div className='nav-vertical bg-dark d-flex align-items-center' >
        <div className='w-100'>
          <p className='text-light'>pegar o valor da funcionalidades</p>
          <p className='text-light'>passar o valor para o render</p>
          {this.state.funcionalidades === "consulta" && (<Consulta />)}
          {this.state.funcionalidades === "enriquecimento" && (<Enriquecimento />)}
          {this.state.funcionalidades === "enriquecimentoDrop" && (<EnriquecimentoDrop />)}
          {this.state.funcionalidades === "higienizacao" && (<Higienizacao />)}
          {this.state.funcionalidades === "gerencial" && (<Gerencial />)}
          {this.state.funcionalidades === "gerencialDrop" && (<GerencialDrop />)}
          {this.state.funcionalidades === "monitoramento" && (<Monitoramento />)}
          {this.state.funcionalidades === "monitoramentoDrop" && (<MonitoramentoDrop />)}
          {this.state.funcionalidades === "relatario" && (<Relatario />)}
          {this.state.funcionalidades === "relatarioDrop" && (<RelatarioDrop />)}
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



