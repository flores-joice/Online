import React, { Component } from "react"
import InputBuscar, { Option, Botao, LoadButton } from "../components/input-button"
import Planilha from '../components/planilhaConsulta'
import axios from "axios"
import '../components/components.scss'


class ViewConsulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: '',
      lista: ''
    };
  }
  // pega o valor digitado no input
  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  //armazeno o valor do input e insere o valor na url da api e mostra a resposta
  handleClick = () => {
    this.setState({ loading: true, lista: '', renderPlanilha: '' })
    const token = localStorage.getItem('auth-token', token);

    const { user } = this.state

    axios.get(`http://localhost:52231/api/consultaCpf/${user}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'mode': 'no-cors',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        let resposta = response.data;
        // let dado = JSON.stringify(resposta)
        this.setState({ lista: resposta, loading: false })
        const retorno = this.state.lista.statusRetorno

        console.log('lista', this.state.lista)
        if (retorno === 0) {
          this.setState({
            renderPlanilha:
              <Planilha
                lista={this.state.lista}
                clickRelacionadas={this.handleRelacionadas} />,
            loading: false
          });
        }
        if (retorno === 1) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>CPF ou CNPJ não localizado</p>, loading: false
          });
        }
        if (retorno === 2) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Cliente sem saldo</p>, loading: false
          });
        }
        if (retorno === 3) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Cliente Inativo</p>, loading: false
          });
        }
        if (retorno === 4) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Usuário não logado</p>, loading: false
          });
        }
        if (retorno === 5) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>Erro inesperado!</p>, loading: false
          });
        }
        if (retorno === 99) {
          this.setState({
            renderPlanilha:
              <p className='mt-5 h3 text-info'>demora do banco para processar a solicitação </p>, loading: false
          });
        }
      })
    // this.handleRalacionadas()
  }

  // handleRelacionadas() {
  //   const token = localStorage.getItem('auth-token', token);

  //   axios.get(`http://localhost:52231/api/pessoasRelacionadas/${this.state.user}`, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       'mode': 'no-cors',
  //       'Authorization': 'Bearer ' + token,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(resp => {
  //       let respo = resp.data;
  //       // let dado = JSON.stringify(resposta)
  //       // this.setState({ lista : [resposta], loading: false})
  //       // this.setState({renderPlanilha: <Planilha lista={this.state.lista}/>});
  //       // console.log('lista', this.state.lista)
  //       console.log('respo', respo)

  //     })

  // }

  render(props) {
    const { loading } = this.state
    return (
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 w-75 marginPage">
        <p className='dashboard-title h4 text-info'>Consulta</p>
        <InputBuscar
          option={[
            <Option key='cpf' fotHtml='cpf' textoOption='CPF' />,
            <Option key='cnpj' fotHtml='cnpj' textoOption='CNPJ' />,
            <Option key='nome' fotHtml='nome' textoOption='Nome' />,
            <Option key='end' fotHtml='end' textoOption='Endereço' />,
            <Option key='bairro' fotHtml='bairro' textoOption='Bairro' />,
            <Option key='cidade' fotHtml='cidade' textoOption='Cidade' />,
            <Option key='telefone' fotHtml='telefone' textoOption='Telefone' />,
            <Option key='placa' fotHtml='placa' textoOption='Placa' />]}
          value={this.state.user}
          type='text'
          classeInput="form-control input-consulta"
          onFunction={this.handleChange}

          botao={
            <Botao
              click={this.handleClick}
              classesBotao='btn btn-info rounded-right button-border'
              textoBotao={!loading ? 'Buscar' : < LoadButton />}
            />
          }
        />

        {this.state.renderPlanilha}
          <p></p>
      </div>
    );
  }
}

export default ViewConsulta;

// export default ViewConsulta;
// import React, { Component } from "react"
// import { Botao, LoadButton } from "../components/input-button"
// import Planilha, { ListaConsultaNome, ListaConsultaEndereco } from '../components/planilhaConsulta'
// import { consultaCpf } from '../infra/apiConsulta'
// import axios from "axios"
// import '../components/components.scss'


// class ViewConsulta extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       user1: '',
//       user2: '',
//       user3: '',
//       lista: '',
//       id: 'endereco',
//       token: ''

//     };
//     console.log('id no constructor', this.state.id)
//   }

//   handleSelectButton = event => {

//     this.setState({ id: event.target.value })
//     console.log('id no handleSelect', this.state.id)
//     if (this.state.id === 'nome') {
//       this.setState({ colorButtonNome: 'btn-warning', user1: '', user2: '', user3: '' })
//     }
//   }

//   // pega o valor digitado no input
//   handleChange1 = event => {
//     this.setState({ user1: event.target.value });
//   };
//   handleChange2 = event => {
//     this.setState({ user2: event.target.value });
//   };
//   handleChange3 = event => {
//     this.setState({ user3: event.target.value });
//   };

//   //armazeno o valor do input e insere o valor na url da api e mostra a resposta
//   handleClick = (id) => {

//     const { user1, user2, user3 } = this.state
//     this.setState({ loading: true, lista: '', renderPlanilha: '' })

//     if (this.state.token) {

//       if (id === 'cpf') {
//         this.setState({ colorButtonCpf: 'btn-danger', })
//         let resp = consultaCpf(user1, this.state.token)
//           //parei aqui >>> inserindo REDUX
//           .then(response => {
//             let resposta = resp.data;
//             // let dado = JSON.stringify(resposta)
//             this.setState({ lista: resposta, loading: false })
//             const retorno = this.state.lista.statusRetorno
//             this.setState({ user1: '' })

//             if (retorno === 0) {
//               this.setState({
//                 renderPlanilha:
//                   <Planilha
//                     lista={this.state.lista}
//                     clickRelacionadas={this.handleRelacionadas} />,
//                 loading: false
//               });
//             }
//             if (retorno === 1) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>CPF ou CNPJ não localizado</p>, loading: false
//               });
//             }
//             if (retorno === 2) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente sem saldo</p>, loading: false
//               });
//             }
//             if (retorno === 3) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente Inativo</p>, loading: false
//               });
//             }
//             if (retorno === 4) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Usuário não logado</p>, loading: false
//               });
//             }
//             if (retorno === 5) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Erro inesperado!</p>, loading: false
//               });
//             }
//             if (retorno === 99) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>demora do banco para processar a solicitação </p>, loading: false
//               });
//             }
//           })
//       }

//       if (id === 'nome') {
//         this.setState({ colorButtonNome: 'btn-warning' })
//         axios.get(`http://localhost:52231/api/consultanome?${user1 ? `nome=${user1}` : ''}${user2 ? `&datanasc=${user2}` : ''}${user3 ? `&cidade=${user3}` : ''}`, {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             'mode': 'no-cors',
//             'Authorization': 'Bearer ' + this.state.token,
//             'Content-Type': 'application/json'
//           }
//         })
//           .then(response => {
//             let resposta = response.data;
//             // let dado = JSON.stringify(resposta)
//             this.setState({ lista: resposta, loading: false })
//             const retorno = this.state.lista[0].statusRetorno

//             console.log('retorno + lista', retorno, this.state.lista)
//             this.setState({ user1: '', user2: '', user3: '' })
//             if (retorno === 0) {
//               this.setState({
//                 renderPlanilha:
//                   <ListaConsultaNome
//                     lista={this.state.lista}
//                   />,
//                 loading: false
//               });
//             }
//             if (retorno === 1) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>CPF ou CNPJ não localizado</p>, loading: false
//               });
//             }
//             if (retorno === 2) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente sem saldo</p>, loading: false
//               });
//             }
//             if (retorno === 3) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente Inativo</p>, loading: false
//               });
//             }
//             if (retorno === 4) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Usuário não logado</p>, loading: false
//               });
//             }
//             if (retorno === 5) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Erro inesperado!</p>, loading: false
//               });
//             }
//             if (retorno === 99) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>demora do banco para processar a solicitação </p>, loading: false
//               });
//             }
//           })
//       }
//       if (id === 'endereco') {
//         this.setState({ colorButtonNome: 'btn-warning' })
//         axios.get(`http://localhost:52231/api/consultavizinhos?${user1 ? `logradouro=${user1}` : ''}${user2 ? `&numero=${user2}${user3 ? `&cep=${user3}` : ''}` : ''}`, {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             'mode': 'no-cors',
//             'Authorization': 'Bearer ' + this.state.token,
//             'Content-Type': 'application/json'
//           }
//         })
//           .then(response => {
//             let resposta = response.data;
//             // let dado = JSON.stringify(resposta)
//             this.setState({ lista: resposta, loading: false })
//             const retorno = this.state.lista[0].statusRetorno

//             console.log('retorno + lista', retorno, this.state.lista)
//             this.setState({ user1: '', user2: '', user3: '' })
//             if (retorno === 0) {
//               this.setState({
//                 renderPlanilha:
//                   <ListaConsultaEndereco
//                     lista={this.state.lista}
//                   />,
//                 loading: false
//               });
//             }
//             if (retorno === 1) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>CPF ou CNPJ não localizado</p>, loading: false
//               });
//             }
//             if (retorno === 2) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente sem saldo</p>, loading: false
//               });
//             }
//             if (retorno === 3) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Cliente Inativo</p>, loading: false
//               });
//             }
//             if (retorno === 4) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Usuário não logado</p>, loading: false
//               });
//             }
//             if (retorno === 5) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>Erro inesperado!</p>, loading: false
//               });
//             }
//             if (retorno === 99) {
//               this.setState({
//                 renderPlanilha:
//                   <p className='mt-5 h3 text-info'>demora do banco para processar a solicitação </p>, loading: false
//               });
//             }
//           })
//       }
//     }

//   }
//   componentWillMount(){
//     const token = localStorage.getItem('auth-token')
//     this.setState({ token })
//   }

//   render(props) {
//     const { loading, id } = this.state
//     console.log('id no render', this.state.id)

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center pt-3 w-100 container">
//         <p className='dashboard-title h4 text-info'>Consulta</p>
//         <div className="btn-group w-50 mb-5" role="group" aria-label="Exemplo básico">
//           <button type="button" value='cpf' className={`btn ${this.state.id === 'cpf' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>CPF</button>
//           <button type="button" value='cnpj' className={`btn ${this.state.id === 'cnpj' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>CNPJ</button>
//           <button type="button" value='nome' className={`btn ${this.state.id === 'nome' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>Nome</button>
//           <button type="button" value='endereco' className={`btn ${this.state.id === 'endereco' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>Endereço</button>
//           <button type="button" value='telefone' className={`btn ${this.state.id === 'telefone' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>Telefone</button>
//           <button type="button" value='placa' className={`btn ${this.state.id === 'placa' ? 'btn-warning' : 'btn-info'}`} onClick={this.handleSelectButton}>Placa</button>
//         </div>
//         <div className="d-flex w-100 justify-content-center container">
//           {this.state.id === 'cpf' && <input value={this.state.user1} type='text' placeholder="Digite um CPF válido..." aria-label="Campo de busca..." className="form-control rounded-left w-25" onChange={this.handleChange1} />}
//           {this.state.id === 'cnpj' && <input value={this.state.user1} type='text' placeholder="Digite um CNPJ válido..." aria-label="Campo de busca..." className="form-control rounded-left w-25" onChange={this.handleChange1} />}
//           {this.state.id === 'nome' &&
//             <div className='d-flex w-50'>
//               <input value={this.state.user1} type='text' placeholder="Nome completo..." aria-label="Nome completo..." className="form-control rounded-left" onChange={this.handleChange1} />
//               <input value={this.state.user3} type='text' placeholder="Cidade..." aria-label="Cidade..." className="form-control rounded-left" onChange={this.handleChange3} />
//               <input value={this.state.user2} type='text' placeholder="Nasc. Ex.: 01/01/1900..." aria-label="Data de nasc. Ex.: 01/01/1900..." className="form-control rounded-left" onChange={this.handleChange2} />
//             </div>
//           }
//           {this.state.id === 'telefone' && <input value={this.state.user} type='text' placeholder="Ex.: (11)9999-9999" aria-label="Nome..." className="form-control rounded-left" onChange={this.handleChange} />}
//           {this.state.id === 'endereco' &&
//             <div className='d-flex w-50'>
//               <input value={this.state.user1} type='text' placeholder="Nome da rua..." aria-label="Nome da rua..." className="form-control rounded-left" onChange={this.handleChange1} />
//               <input value={this.state.user2} type='text' placeholder="número..." aria-label="numero..." className="form-control rounded-left" onChange={this.handleChange2} />
//               <input value={this.state.user3} type='text' placeholder="CEP" aria-label="CEP" className="form-control rounded-left" onChange={this.handleChange3} />
//             </div>
//           }
//           {this.state.id === 'placa' && <input value={this.state.user} type='text' placeholder="ABC-1234..." aria-label="Data de nasc..." className="form-control rounded-left" onChange={this.handleChange} />}
//           <div className="input-group-append">
//             <Botao type="button" click={(e) => this.handleClick(this.state.id)} classesBotao='btn btn-info rounded-right button-border' textoBotao={!loading ? 'Buscar' : < LoadButton />} />
//           </div>
//         </div>
//         {this.state.renderPlanilha}
//       </div>
//     );
//   }
// }

// export default ViewConsulta;