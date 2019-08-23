import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Botao } from './input-button'
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
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
        <Botao classesBotao='btn btn-warning' textoBotao='Gerenciar' />
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

export const Tabela = () => (
  <Grid
    rows={[
      { id: 0, cliente: 'Sistema', revenda: '', ativo:'Ativo', acao:'' },
      { id: 1, cliente: 'Assis Cred', revenda: 'InfoQualy', ativo:'Inativo', acao:'' },
      { id: 2, cliente: 'CP2 Consultoria', revenda: 'InfoQualy', ativo:'Ativo', acao:'' },
      { id: 3, cliente: 'Agibank', revenda: 'PGA', ativo:'Inativo', acao:'' },
      { id: 4, cliente: 'Renner', revenda: 'PGA', ativo:'Ativo', acao:'' },
      { id: 5, cliente: 'SKY', revenda: 'PGA', ativo:'Ativo', acao:'' },
      { id: 6, cliente: 'Easypay', revenda: 'Unicheck', ativo:'Inativo', acao:'' },
      { id: 7, cliente: 'Gisbi', revenda: 'Unicheck', ativo:'Ativo', acao:'' },
    ]}
    columns={[
      { name: 'cliente', title: 'Cliente' },
      { name: 'revenda', title: 'Revenda' },
      { name: 'ativo', title: 'Ativo' },
      { name: 'acao', title: 'Acão' },
    ]}>
    <Table className='bg-ligh'/>
    <TableHeaderRow />
  </Grid>
);