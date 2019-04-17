import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Botao } from './input-button'
import './components.scss'




export default class BasicTable extends React.Component {
  constructor() {
    super()
    this.state = {
      valor: []
    }
  }
  buttonFormatter() {
    return (
      <div className='d-flex justify-content-around'>
        <Botao classesBotao='btn btn-info' textoBotao='Visualizar' />
        <Botao classesBotao='btn btn-warning' textoBotao='Editar' />
        <Botao classesBotao='btn btn-danger' textoBotao='Excluir' />
      </div>
    )
      ;
  }

  componentWillMount() {
    const products =
      [
        { name: 'sistema', revenda: 'InfoQualy', ativo: 'Ativo', botao: <Botao /> },
        { name: 'pga', revenda: 'InfoQualy', ativo: 'Ativo', botao: <Botao /> },
        { name: 'infoqualy', revenda: 'InfoQualy', ativo: 'Inativo', botao: <Botao /> },
        { name: 'sistema', revenda: 'InfoQualy', ativo: 'Ativo', botao: <Botao /> },
        { name: 'pga', revenda: 'PGA', ativo: 'Ativo', botao: <Botao /> },
        { name: 'infoqualy', revenda: 'PGA', ativo: 'Inativo', botao: <Botao /> },
        { name: 'sistema', revenda: 'PGA', ativo: 'Ativo', botao: <Botao /> },
        { name: 'pga', revenda: 'PGA', ativo: 'Inativo', botao: <Botao /> },
        { name: 'infoqualy', revenda: 'PGA', ativo: 'Ativo', botao: <Botao /> }
      ];
    this.setState({ valor: products })
    console.log('valor', this.state.valor)
  }

  render() {
    const { valor } = this.state
    return (
      <div className='p-2'>
        <BootstrapTable data={valor} className='bg-light rounded'>
          <TableHeaderColumn className='bg-info' dataField='name' isKey={true}>Cliente</TableHeaderColumn>
          <TableHeaderColumn className='bg-info' dataField='revenda'>Revenda</TableHeaderColumn>
          <TableHeaderColumn className='bg-info' dataField='ativo'>Ativo</TableHeaderColumn>
          <TableHeaderColumn className='bg-info' dataField="button" dataFormat={this.buttonFormatter.bind(this)}>Buttons</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }

}