import React, { Component } from "react";
import InputBuscar, { Option, Botao, BarraProgresso, Info } from './input-button';
import '../components/components.scss'

export default class AtribuicaoCpf extends Component {
  //componente ainda será desenvolvido
    render() {
      return (
        <div className='w-100 flex-column d-flex justify-content-around align-items-center' >
          <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
            <InputBuscar
              option={[
                <Option key='layoutLivre' id='layoutLivre' fotHtml='layoutLivre' textoOption='Layout Livre' />,
                <Option key='layoutPersonalizado' id='layoutPersonalizado' fotHtml='layoutPersonalizado' textoOption='Layout Personalizado' />]}
              classeInput="custom-file-input"
              idInput='inputId'
              typeInput='file'
              classesBotao='btn btn-info px-3'
              botao={<Botao classesBotao='btn btn-info custom-file-label w-100' forHtml='inputId' />}
            />
          </div>
          <Info />
        </div>
      )
    }
  };