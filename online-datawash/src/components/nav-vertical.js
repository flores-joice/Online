import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './components.css'
import { apiMenu } from '../infra/api-config';
import {
  Consulta, Enriquecimento, Enriquecer,
  Higienizacao, Gerencial, Monitoramento,
  Relatario, GerenciamentoContas, MonitoramentoConsulta,
  RelatarioConsulta, MailingList
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
      emailLogado: '',

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
        console.log('item', item)

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
              (newFunc = this.state.funcionalidades.concat('relatatorio', 'relatConsulta')) &&
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
      console.log(this.state.funcionalidades)
      //cria uma constante que pega o valor do token de localstorage
    } catch (response) {
      console.log('messageError', response)
    }
  }

  render() {
    const { funcionalidades } = this.state;
    return (
      <div className='nav-vertical bg-dark d-flex align-items-center' >
        <div className='w-100'>
         
          {funcionalidades.includes("consulta") && <Consulta />}
          {funcionalidades.includes("enriquecimento") && <Enriquecimento />}
          {funcionalidades.includes("enriquecer") && <Enriquecer funcionalidades={funcionalidades} />}
          {funcionalidades.includes("higienizacao") && <Higienizacao />}
          {funcionalidades.includes("gerencial") && <Gerencial />}
          {funcionalidades.includes("gerenciamentoContas") && <GerenciamentoContas funcionalidades={funcionalidades} />}
          {funcionalidades.includes("monitoramento") && (<Monitoramento />)}
          {funcionalidades.includes("monitConsulta") && (<MonitoramentoConsulta funcionalidades={funcionalidades} />)}

          {funcionalidades.includes("ralatorio") && (<Relatario />)}
          {funcionalidades.includes("relatConsulta") && (<RelatarioConsulta funcionalidades={funcionalidades} />)}

          {funcionalidades.includes("mailingList") && (<MailingList />)}
          {/* {funcionalidades.includes("monitMailingList") && (<MonitoramentoMalingLista />)} */}
        </div >
      </div>
    )
  }
}



