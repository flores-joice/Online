import React, { Component } from "react";
import InputBuscar, { Option,  Botao } from "./input-button";
import './components.scss'

export class Enriquecer extends Component {
  render() {
    return (
      <div className='w-100 d-flex justify-content-around align-items-center' >
        <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
        <h4>Enriquecimento</h4>
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
          <BarraProgresso />
        </div>
        <Info/>
      </div>
    )
  }
};

export class AtribuicaoCpf extends Component {
  render() {
    return (
      <div className='w-100 d-flex justify-content-around align-items-center' >
        <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
        <h4>Atribuição CPF</h4>
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
          <BarraProgresso />
        </div>
        <Info/>
      </div>
    )
  }
};

export class ValidacaoHot extends Component {
  render() {
    return (
      <div className='w-100 d-flex justify-content-around align-items-center' >
        <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
        <h4>Validacao Hot</h4>
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
          <BarraProgresso />
        </div>
        <Info/>
      </div>
    )
  }
};

function BarraProgresso(props) {
  return (
    <div className="progress enriquecer-progresso">
      <div className="progress-bar progress-bar-success progress-bar-striped text-dark" role="progressbar"
        aria-valuenow={props.valorAtual} aria-valuemin="0" aria-valuemax={props.ValorMaxino} style={{ width: '0%' }}>
        {props.NumeroProgresso} (success)
        </div>
    </div>
  )
};

const Info = () => (
  <div id='enriquecerInfo' className='bg-light enriquecer-info p-3 rounded list-group '>
    <div>
      <h5 className='text-info'>Ponto de partida</h5>
      <p className='text-info'>Você deve escolher e carregar para o servidor o arquivo que será enriquecido.</p>
    </div>
    <ul className='enriquecer-info__list p-1 text-info'>
      <strong>Regras sobre os arquivos:</strong>
      <li className='text-info'>Tamanho máximo do arquivo: 300MB</li>
      <li className='text-info'>Tipos de arquivos permitidos: csv, txt, xls e xlsx</li>
      <li className='text-info'>Arquivos csv e txt deverão ter terminador de linha CR+LF e ser delimitados, ou seja, ter um caractér que separe os campos. Caracteres aceitos como separador:</li>
      <li className='text-info'>; (ponto-e-vírgula)</li>
      <li className='text-info'>, (vírgula)</li>
      <li className='text-info'>| (barra vertical)</li>
      <li className='text-info'>tab (caractér ascii 009)</li>
      <li className='text-info'>Todos os arquivos deverão ter na primeira linha o nome dos campos</li>
      <li className='text-info'>Única exceção para arquivos com somente CPF / CNPJ</li>
      <li className='text-info'>Os nomes dos campos não deverão conter espaço, caracteres acentuados ou especiais</li>
      <li className='text-info'>O campo de CPF / CNPJ deve ser obrigatóriamente o primeiro campo do arquivo</li>
      <li className='text-info'>Para arquivos Excel o nome da planilha (aba na parte inferior esquerda) deve estar da forma original, sem alteração (Plan1)</li>
      <li className='text-info'>Arquivos com mesmo nome de arquivos já carregados se sobrepõe aos mesmos</li>
    </ul>
  </div>
);