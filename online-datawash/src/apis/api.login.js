
export default function Config(props) {
  const url = `http://localhost:52231/api/login`
  

  const requestInfo = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email: this.email.value, senha: this.senha.value }),
    headers: ({
      'Content-type': 'application/json',
    })
  }
  fetch(url, requestInfo)
    .then(response => {
      console.log('response', response)
      if (response.ok) {
        return response.text();

      } else {
        throw new Error('Senha ou login incorreto!');
      }
    })
    .then(token => {
      const dado = JSON.parse(token)
      localStorage.setItem('auth-token', dado.accessToken);
      requestInfo.headers.Authorization = ` `

      const mensagem = dado.message
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
    })
    .catch(error => {
      console.log('error', error)
    })

}


