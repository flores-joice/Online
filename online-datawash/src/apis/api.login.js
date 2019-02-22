
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
    .then(token => {
      const dado = JSON.parse(token)
      localStorage.setItem('auth-token', dado.accessToken);
    //   requestInfo.headers.Authorization = ` bearer ${dado.accessToken} `
    })

}


