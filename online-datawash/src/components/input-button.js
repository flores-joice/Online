import React from "react";
import load from '../assets/teste.gif'
import loadBotao from '../assets/circleLoading.gif'
import '../pages/pages.scss'
import './components.scss'

export default function InputBuscar(props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="text-light rounded input-group d-flex justify-content-center w-75">
      <div className="input-group-prepend  rounded-bottom">
        <select className="form-control bg-info text-light input-select">
          {props.option}
        </select>
      </div>
      <div className="custom-file">
        <input
          id={props.idInput}
          value={props.value}
          type={props.typeInput}
          className={`input-consulta bg-white ${props.classeInput}`}
          placeholder='Insira o valor para busca'
          onChange={props.onFunction}
          name='inputValue' autoFocus/>
        {props.botao}
      </div>
    </form>
  )
}

export function Option(props) {
  return (
    <option id={props.id}
      className="input-group-text text-light bg-info"
      htmlFor={props.forHtml}
      value={props.valor}
    >      
      {props.textoOption}
    </option>
  )
}

export function Botao(props) {
  return (
    <button
      onClick={props.click}
      className={props.classesBotao}
      value={props.valueBotao}
      type={props.typeBotao}
      name={props.nameBotao}
      htmlFor={props.forHtmlBotao}
    >
      {props.textoBotao}
    </button>
  )
}

export function BarraProgresso(props) {
  return (
    <div className="progress enriquecer-progresso">
      <div className="progress-bar progress-bar-success progress-bar-striped text-dark" role="progressbar"
        aria-valuenow={props.valorAtual} aria-valuemin="0" aria-valuemax={props.ValorMaxino} style={{ width: props.width }}>
        {props.NumeroProgresso} (success)
        </div>
    </div>
  )
}

export const Spinner = () => (
  <div className='spinner d-flex justifi-content-center align-items-center'>
    <img alt='icone'  src={load}/>
  </div>
)

export const LoadButton = () => (
  <div className='px-2'>
    <img alt='icone' className='loadButton' src={loadBotao}/>
  </div>
)

