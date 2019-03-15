import React from "react";

export default function InputBuscar(props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="text-light rounded input-group d-flex justify-content-center w-75">
      <div className="input-group-prepend  rounded-bottom">
        <select className="form-control bg-info text-light">
          {props.option}
        </select>
      </div>
      <div className="custom-file">
        <input
          id={props.idInput}
          value={props.value}
          type={props.typeInput}
          className={props.classeInput}
          placeholder='Insira o valor para busca'
          onChange={props.onFunction}
          name='inputValue' />
        {props.botao}
      </div>
    </form>
  )
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

export function BarraProgresso(props) {
  return (
    <div className="progress enriquecer-progresso">
      <div className="progress-bar progress-bar-success progress-bar-striped text-dark" role="progressbar"
        aria-valuenow={props.valorAtual} aria-valuemin="0" aria-valuemax={props.ValorMaxino} style={{ width: props.width }}>
        {props.NumeroProgresso} (success)
        </div>
    </div>
  )
};

export const Info = () => (
  <div id='enriquecerInfo' className='bg-light enriquecer-info p-3 rounded list-group mt-5' data-toggle="tooltip" title='Ponto de partida'>
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