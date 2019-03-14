import React from 'react'
import { Cabecalho, Dados, Renda, Email, Endereco, Telefone } from './mapConsulta'
import './components.scss'


const Planilha = ({ lista }) => (
  <form className='container ' >
  <div className='bg-white rounded my-3 p-3 text-center h5'>Joice Flores Lazarino</div>
    {/* <div className=' flex-column planilha pl-2 rounded'> */}
    {/* <Cabecalho lista={lista} />
      <Dados lista={lista} />
      <Endereco lista={lista} />
      <Telefone lista={lista} />
      <Email lista={lista} />
      <Renda lista={lista} /> */}
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
        <div 
        className="collapse show" 
        id="collapseOne" 
        aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body d-flex flex-wrap">
            <p className='col-6'>CPF: 120.452.807-13</p>
            <p className='col-6'>Sexo: Feminino</p>
            <p className='col-6'>Signo: Touro</p>
            <p className='col-6'>Escolaridade: Colegial completo, ou Médio completo</p>
            <p className='col-6'>Data da consulta à RF: 30/07/2018</p>
            <p className='col-6'>Data de nascimento: 30/04/1986 - 32 anos</p>
            <p className='col-6'>Nome da mãe: ALZIRA FLORES LAZARINO</p>
            <p className='col-6'>Situação na Receita Federal: REGULAR</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingTwo">
          <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Telefones</button></h5>
        </div>
        <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body d-flex flex-wrap">
            <p className='col-4'>(11) 3696-8074</p>
            <p className='col-4'>(11) 4376-7894</p>
            <p className='col-4'>(32) 99947-8628 (celular)</p>
            <p className='col-4'>(11) 99643-3672 (celular)</p>
            <p className='col-4'>(32) 99950-8257 (celular)</p>
            <p className='col-4'>(32) 99928-7139</p>
            <p className='col-4'>(32) 3741-6816 (comercial)</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingThree">
          <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Emails</button></h5>
        </div>
        <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body d-flex flex-wrap">
            <p className='col-6'>flores.joice@hotmail.com</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingFour">
          <h6 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Endereços</button></h6>
        </div>
        <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
          <div className="card-body">
            <p className=''>R HELIOTROPIO 239 CS 4	MUTINGA	OSASCO	SP	06286120</p>
            <p className=''>R WIDGISTON MENDES DE SO 75		CARANGOLA	MG	36800000</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingFive">
          <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Fontes de renda</button></h5>
        </div>
        <div className="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample">
          <div className="card-body d-flex flex-wrap">
            <p className='col-6'>Ativa mercado de trabalho formal: SIM</p>
            <p className='col-6'>Faixa salarial: E (até 2 SM)</p>
            <p className='col-6'>Ocupação: Vendedor de comércio varejista</p>
            <p className='col-6'>	Provável empresa: LAZARINO & SOUZA COSMETICOS LTDA ME</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingSix">
          <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Pessoas relacionadas</button></h5>
        </div>
        <div className="collapse" id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionExample">
          <div className="card-body d-flex flex-wrap">
            <p className='col-6'>CINTIA LAZARINO DE SOUZA	IRMÃ</p>
            <p className='col-6'>ALZIRA FLORES LAZARINO	MÃE</p>
            <p className='col-6'>ANTONIO SILVIO LAZARINO	PROVÁVEL PARENTE</p>
            <p className='col-6'>TATIANA FLORES LAZARINO DE SOUZA	IRMÃ</p>
            <p className='col-6'>BRENDAH SANDY FLORES LAZARINO DE SOUZA	PROVÁVEL PARENTE</p>
            <p className='col-6'>BIANCA FERREIRA FONTENELLE	MESMO ENDEREÇO</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-bottom" id="headingSeven">
          <h5 className="mb-0"><button className="btn btn-link p-0 collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Vizinhos</button></h5>
        </div>
        <div className="collapse" id="collapseSeven" aria-labelledby="headingSeven" data-parent="#accordionExample">
          <div className="card-body">
            <p>MARIA THEREZA FARO NOGUEIRA FOTOCOPIAS	HELIOTROPIO 239	</p>
            <p>TANIA REGINA DE NOGUEIRA 17660877879	HELIOTROPIO 239	(11) 2218-0490</p>
            <p>MARIA JOANA SOARES DA COSTA	HELIOTROPIO 239 C S 4	(11) 5992-7830	(11) 3599-2783</p>
            <p>MARCOS ANTONIO AUGUSTINHO DE OLIVEIRA	HELIOTROPIO 239 C S 4	(11) 3697-0407	(11) 99763-7569	(11) 95720-3685	(11) 95420-3685</p>
            <p>MARCOS ANTONIO AUGUSTINHO DE OLIVEIRA	HELIOTROPIO 239 C S 4	(11) 3697-0407	(11) 99763-7569	(11) 95720-3685	(11) 95420-3685</p>
            <p>ANTONIO AUGUSTO NOGUEIRA	HELIOTROPIO 239 C S 4	(11) 3686-2130	(11) 95559-4990</p>
            <p>MAURICIO JOSE FARO	HELIOTROPIO 239 C S 4	(11) 99600-9790	</p>
            <p>ANDERSON LUIS DA ROCHA	HELIOTROPIO 239 C S 4	(11) 3686-2130	(11) 96964-9446	(11) 98319-8296	</p>
            <p>EDMILSON SOARES NEVES	HELIOTROPIO 239 C S 4	(11) 3656-6124</p>
            <p>MARIM PEREIRA SOUSA	HELIOTROPIO 239 C S 4	(11) 3656-0948</p>
            <p>MARIA THEREZA FARO NOGUEIRA	HELIOTROPIO 239 C S 4	(11) 3686-8571</p>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </form>
)

export default Planilha