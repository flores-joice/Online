import React, { Component } from "react";

export default class InputBuscar extends Component {
  render() {
    return (
      <form onSubmit={e => e.preventDefault()} className=" mb-3 text-light rounded input-group d-flex justify-content-center w-75">
        <div className="input-group-prepend  rounded-bottom">
          <select className="form-control bg-info text-light">
            {this.props.option}
          </select>
        </div>
        <div className="custom-file">
          <input
            id={this.props.idInput}
            value={this.props.value}
            type={this.props.typeInput}
            className={this.props.classeInput}
            placeholder='Insira o valor para busca'
            onChange={this.props.onFunction}
            name='inputValue' />
          {this.props.botao}
        </div>
      </form>
    )
  }
}

export function Option(props) {
  return (
    <option id={props.id}
      className="input-group-text text-light bg-info"
      htmlFor={props.forHtml}>
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