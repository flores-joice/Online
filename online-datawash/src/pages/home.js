// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import '../components/components.scss'
// import ViewConsulta from './viewConsulta';
// import Enriquecer from './enriquecer'
// import AtribuicaoCpf from '../components/atribuicaoCpf'
// import ValidacaoHot from '../components/validacaoHot'
// import MailingListPessFisica from './mailingList'
// import { apiMenu } from '../infra/api-config';
// import NavHorizontal from '../components/nav-horizontal'
// import { ViewNav } from './view-nav';

// export default class Home extends Component {
//     //CONSTRUCTOR ESTA RECEBENDO PROPS
//     constructor(props) {
//         super(props)
//         this.state = {
//             // armazenar o token para novas requisiçoes de endpoint
//             token: '',
//             usuarioLogado: false,
//             funcionalidades: [],
//             valor: [],
//             emailLogado: '',
//             renderView: null
//         }
//     }

//     componentWillMount = async () => {
//         try {
//             const token = await localStorage.getItem('auth-token', token);


//             if (token) {
//                 this.setState({ usuarioLogado: true }, () => {
//                 })
//                 const response = await apiMenu.get()
//                 //item armazena o valor da response retornada da api
//                 const item = response.data

//                 //FOR = lista todos os valores contido em item
//                 for (let [key, value] of item.entries(item)) {

//                     //aqui atribuimos os valores listados do FOR na variavel valor
//                     this.setState({ valor: value })
//                     const newFunc = []
//                     //fazemos a comparação dos valores, se true, 
//                     //ele envia uma string para outra variavel
//                     {
//                         //se o valor contido na variavel for = 1 ele execura, 
//                         //senão nao faz nada
//                         this.state.valor === "1" &&
//                             (newFunc = this.state.funcionalidades.concat('consulta')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "9" &&
//                             (newFunc = this.state.funcionalidades.concat('enriquecimento')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         (this.state.valor === ("9" && "10")) &&
//                             (newFunc = this.state.funcionalidades.concat('enriquecer')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "11" &&
//                             (newFunc = this.state.funcionalidades.concat('atribuicaoCpf')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "38" &&
//                             (newFunc = this.state.funcionalidades.concat('validacaoHot')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "16" &&
//                             (newFunc = this.state.funcionalidades.concat('mailingList')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "33" &&
//                             (newFunc = this.state.funcionalidades.concat('gerencial')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "33" &&
//                             (newFunc = this.state.funcionalidades.concat('gerenciamentoContas')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "34" &&
//                             (newFunc = this.state.funcionalidades.concat('personalizacao')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "35" &&
//                             (newFunc = this.state.funcionalidades.concat('extratoServicos')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "48" &&
//                             (newFunc = this.state.funcionalidades.concat('previaFechamento')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "7" &&
//                             (newFunc = this.state.funcionalidades.concat('monitoramento')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "7" &&
//                             (newFunc = this.state.funcionalidades.concat('monitoramento', 'monitConsulta')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "14" &&
//                             (newFunc = this.state.funcionalidades.concat('monitEnriquecimento')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }

//                     {
//                         this.state.valor === "31" &&
//                             (newFunc = this.state.funcionalidades.concat('monitWebService')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "43" &&
//                             (newFunc = this.state.funcionalidades.concat('higienizacao')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "8" &&
//                             (newFunc = this.state.funcionalidades.concat('relatatorio', 'relatConsulta')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     // {
//                     //   this.state.valor === "8" &&
//                     //     (newFunc = this.state.funcionalidades.concat('relatConsulta')) &&
//                     //     (this.setState({ funcionalidades: newFunc }))
//                     // }
//                     {
//                         this.state.valor === "15" &&
//                             (newFunc = this.state.funcionalidades.concat('relatEnriquecimento')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "19" &&
//                             (newFunc = this.state.funcionalidades.concat('relatMailingList')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "32" &&
//                             (newFunc = this.state.funcionalidades.concat('relatWebService')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                     {
//                         this.state.valor === "46" &&
//                             (newFunc = this.state.funcionalidades.concat('relatHigienizacao')) &&
//                             (this.setState({ funcionalidades: newFunc }))
//                     }
//                 };
//             }
//             //cria uma constante que pega o valor do token de localstorage
//         } catch (response) {
//             console.log('messageError', response)
//         }
//     }

//     handleNav(id) {
//         this.setState({ id: id })
//         if (id === 'consulta') {
//             this.setState({ renderView: <ViewConsulta /> })
//             console.log('if id', this.state.id)
//         }
//         if (id === 'enriquecer') {
//             this.setState({ renderView: <Enriquecer /> })
//         }
//         if (id === 'atibuicaoCpf') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'validacaoHot') {
//             this.setState({ renderView: <ValidacaoHot /> })
//         }
//         if (id === 'higienizacao') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'contas') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'personalizacao') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'extrtatoServicos') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'previaFechamento') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'monitConsulta') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'monitEnriquec') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'monitWebService') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'relatConsulta') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'relatEnriq') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'relatMailingList') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'relatHigienizacao') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'relatWebService') {
//             this.setState({ renderView: <AtribuicaoCpf /> })
//         }
//         if (id === 'mailingList') {
//             this.setState({ renderView: <MailingListPessFisica /> })
//         }


//     }

//     render() {
//         const { funcionalidades } = this.state;
//         return (
//             <div>
//                 <ViewNav 
//                     funcionalidades={funcionalidades} 
//                     clickConsulta={(e) => this.handleNav('consulta')}
//                     clickEnriquecer={(e) => this.handleNav('enriquecer')}
//                     clickAtribuir={(e) => this.handleNav('atibuicaoCpf')}
//                     clickValidacao={(e) => this.handleNav('validacaoHot')}
//                 />
//                 <div className='w-100 mt-5 d-flex justify-content-center align-items-center'>
//                     {this.state.renderView}
//                 </div>
//             </div>
//         )
//     }
// }
