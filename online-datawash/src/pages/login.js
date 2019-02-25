import React, { Component } from 'react'
import logo from '../assets/logo.png'
import './pages.css'
import api from '../infra/api-config'
// import { AsyncStorage } from 'AsyncStorage'
// import { userInfo } from 'os';
// import { setUser } from '../infra/local-storage';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { msg: '', resposta: '', usuarioLogado: null, }
    // this.email = React.createRef()
    // this.senha = React.createRef()
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('', {
        email: 'asf@asdf.com',
        senha: 'asdf',
      });
      console.log('try', response)

      const config = response.config;
      const user = config.data;
      const chaveToken = response.data;
      const token = chaveToken.accessToken;
      const codeToken = JSON.stringify(token)
      console.log('user', user)
      localStorage.setItem('auth-token', codeToken);
      localStorage.setItem('auth-user', user);
      
      this.setState({ usuarioLogado : user })
    } 
    catch (response) {
      console.log('resposta catch', response)
      const token  = response.data;
      console.log('token', token)
      const mensagem = token.message
      console.log('mensagem' , mensagem)
      if (mensagem === '1') {
        this.setState({ msg: 'Cliente ou usuário inválido(s).' })
      } else if (mensagem === '2') {
        this.setState({ msg: '' })
      } else if (mensagem === '3') {
        this.setState({ msg: 'Senha inválida' })
      } else if (mensagem === '4') {
        this.setState({ msg: 'IP não autorizado para acesso.' })
      } else if (mensagem === '5') {
        this.setState({ msg: 'Prazo de validade da licença expirado.' })
      } else if (mensagem === '6') {
        this.setState({ msg: 'Saldo esgotado' })
      } else if (mensagem === '7') {
        this.setState({ msg: 'Cliente sem acesso ao sistema' })
      } else if (mensagem === '8') {
        this.setState({ msg: 'Este email não pode ser utilizado. Está associado a mais de uma usuário' })
      } else if (mensagem === '9') {
        this.setState({ msg: 'Problemas no acesso ao banco de dados. Por favor tente mais tarde.' })
      } else if (mensagem === '10') {
        this.setState({ msg: 'Produto não autorizado para este cliente/usuário.' })
      } else if (mensagem === '11') {
        this.setState({ msg: 'Módulo não autorizado para este cliente/usuário.' })
      } else if (mensagem === '12') {
        this.setState({ msg: 'Cliente ou usuário sem acesso ao sistema.' })
      }
      else if (mensagem === '13') {
        this.setState({ msg: '"Existe mais de um e-mail para essa conta, por favor informe o fornecedor ou cliente' })
      } else {
        this.setState({ msg: 'Logado' })
      }
      console.log('retorno', mensagem)
      //deifinir a rota para home apos a captura do token
      // BrowserRouter.push('/home');
    }
  }
  // async componentDidMount() {
  //   let tokenStorage = await localStorage.setItem('auth-token', codeToken)
  //   console.log('compoentdidmount token',tokenStorage)
  //   let userStorage = await localStorage.setItem('auth-user', user)
  //   console.log('compoentdidmount user',userStorage)
  // }

//     .then((response) => {
//       console.log('response', response)
//       this.props.history.push('/')
//     })
//     .then(token => {
//       const dado = JSON.parse(token)
//       setUser('auth-token', dado.accessToken);
//       console.log(dado)
//       // requestInfo.headers.Authorization = ` `

//   const mensagem = dado.message
//   if (mensagem === '1') {
//     this.setState({ msg: 'Cliente ou usuário inválido(s).' })
//   } else if (mensagem === '2') {
//     this.setState({ msg: '' })
//   } else if (mensagem === '3') {
//     this.setState({ msg: 'Senha inválida' })
//   } else if (mensagem === '4') {
//     this.setState({ msg: 'IP não autorizado para acesso.' })
//   } else if (mensagem === '5') {
//     this.setState({ msg: 'Prazo de validade da licença expirado.' })
//   } else if (mensagem === '6') {
//     this.setState({ msg: 'Saldo esgotado' })
//   } else if (mensagem === '7') {
//     this.setState({ msg: 'Cliente sem acesso ao sistema' })
//   } else if (mensagem === '8') {
//     this.setState({ msg: 'Este email não pode ser utilizado. Está associado a mais de uma usuário' })
//   } else if (mensagem === '9') {
//     this.setState({ msg: 'Problemas no acesso ao banco de dados. Por favor tente mais tarde.' })
//   } else if (mensagem === '10') {
//     this.setState({ msg: 'Produto não autorizado para este cliente/usuário.' })
//   } else if (mensagem === '11') {
//     this.setState({ msg: 'Módulo não autorizado para este cliente/usuário.' })
//   } else if (mensagem === '12') {
//     this.setState({ msg: 'Cliente ou usuário sem acesso ao sistema.' })
//   }
//   else if (mensagem === '13') {
//     this.setState({ msg: '"Existe mais de um e-mail para essa conta, por favor informe o fornecedor ou cliente' })
//   } else {
//     this.setState({ msg: 'Logado' })
//   }
//   console.log('retorno', mensagem)
//   //deifinir a rota para home apos a captura do token
//   // BrowserRouter.push('/home');
// })
//     .catch(error => {
//       console.log('error', error)
//     })
// }

render() {
  return (
    <div className='background d-flex justify-content-center align-items-center '>
      <div className='login-filtro d-flex justify-content-center align-items-center flex-column'>
      <h1>Pegar valor do input enviar para o state, verificar se o token esta armazenado</h1>
        <form className='login-section d-flex flex-column justify-content-center align-items-center px-3 rounded shadow-lg' onSubmit={this.handleSubmit.bind(this)}>
          <img src={logo} width="180" height="auto" alt="logo" className='pb-5' />
          <span className='resposta text-danger font-weight-bold position-absolute'>{this.state.msg}</span>
          <input type='email' className='form-control shadow  ' ref={(input) => this.email = input} />
          <input type='password' className='form-control my-3 shadow' ref={(input) => this.senha = input} />
          <a href='/' className='text-light' >Esqueci minha senha</a>
          <input type='submit' className='btn btn-info w-75 mt-3 shadow' />
        </form>
      </div>
    </div>
  )
}
}
