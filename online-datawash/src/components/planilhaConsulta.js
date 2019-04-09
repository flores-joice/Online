import React from 'react'
import './components.scss'

const Planilha = ({ lista }) => (
  <form className='w-100  mb-5' >
    {lista.map((lista, index) =>
      <div key={index}>
        <div className='bg-white rounded my-3 p-3 text-center h5 d-flex justify-content-center align-items-center'>
          {lista.Nome && <span className='col-6 d-flex justify-content-center align-items-center'>{lista.Nome}</span>}
          {lista.Cpf && <span className='col-6 d-flex justify-content-center align-items-center'>{lista.Cpf}</span>}
        </div>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header border-bottom" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">Dados principais</button></h5>
            </div>
            <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                
                {lista.NomeMae && <p className='col-6'><b>Nome da mãe: </b>{lista.NomeMae}</p>}
                {lista.DataNasc && <p className='col-6'><b>Data de nascimento: </b>{lista.DataNasc}</p>}
                {lista.Sexo && <p className='col-6'><b>Sexo: </b>{lista.Sexo}</p>}
                {lista.Idade && <p className='col-6'><b>Idade: </b>{lista.Idade} anos</p>}
                {lista.Escolaridade && <p className='col-6'><b>Escolaridade: </b>{lista.Escolaridade}</p>}
                {lista.Signo && <p className='col-6'><b>Signo: </b>{lista.Signo}</p>}
                {lista.DataConsulta && <p className='col-6'><b>Data da consulta à RF: </b>{lista.DataConsulta}</p>}
                {lista.SituacaoCadastral && <p className='col-6'><b>Situação na Receita Federal: </b>{lista.SituacaoCadastral}</p>}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingTwo">
              <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Telefones</button></h5>
            </div>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                {lista.Telefone1 && <p className='col-3'>{lista.Telefone1}<small> (fixo)</small></p>}
                {lista.Telefone2 && <p className='col-3'>{lista.Telefone2}<small> (fixo)</small></p>}
                {lista.Telefone3 && <p className='col-3'>{lista.Telefone3}<small> (fixo)</small></p>}
                {lista.Celular1 && <p className='col-3'>{lista.Celular1}<small> (cel)</small></p>}
                {lista.Celular2 && <p className='col-3'>{lista.Celular2}<small> (cel)</small></p>}
                {lista.Celular3 && <p className='col-3'>{lista.Celular3}<small> (cel)</small></p>}
                {lista.Celular4 && <p className='col-3'>{lista.Celular4}<small> (cel)</small></p>}

              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingThree">
              <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Emails</button></h5>
            </div>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                {lista.Email1 && <p className='col-6'>{lista.Email1}</p>}
                {lista.Email2 && <p className='col-6'>{lista.Email2}</p>}
                {lista.Email3 && <p className='col-6'>{lista.Email3}</p>}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingFour">
              <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Endereços</button></h6>
            </div>
            <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                <p className=''>{`
                ${lista.TipoLogradouro1}  ${lista.Logradouro1}  ${lista.Numero1},  ${lista.Cidade1} - ${lista.UF1}. CEP: ${lista.CEP1}`}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom" id="headingFive">
              <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Fontes de renda</button></h5>
            </div>
            <div className="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div className="card-body d-flex flex-wrap">
                {lista.FlagCLT && <p className='col-6'><b>Ativa mercado de trabalho formal: </b>{lista.FlagCLT}</p>}
                {lista.RendaEstimadaFaixa && <p className='col-6'><b>Faixa salarial: </b>{lista.RendaEstimadaFaixa}</p>}
                {lista.RendaEstimada && <p className='col-6'><b>Renda estimada: </b>{lista.RendaEstimada}</p>}
                {lista.CBODescricao && <p className='col-6'><b>Ocupação: </b>{lista.CBODescricao}</p>}
                {lista.EmpregadorNome && <p className='col-6'><b>Provável empresa: </b>{lista.EmpregadorNome}</p>}
                {lista.DataAdmissao && <p className='col-6'><b>Data de admissão: </b>{lista.DataAdmissao}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </form>
)

export default Planilha
