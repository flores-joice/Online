import React from 'react'
import './components.scss'

export const Cabecalho = ({ lista }) => (

  <div className='d-flex flex-wrap pb-3 bg-danger' >
    {lista.map((lista, index) =>

      <span key={index}  className='col-6 text-left p-2 h5'>{lista.Nome}</span>
     )}
    {lista.map((lista, index) =>
      <span  className='col-6 text-left p-2 h5'>{lista.Cpf}</span>
  )} 
  </div>
)

export const Dados = ({ lista }) => (
  <div className="tab-pane fade show active" id="dados" role="tabpanel" aria-labelledby="dados-tab">
    <div className='d-flex flex-wrap pt-2' >
      {lista.map((lista, index) =>
        <span key={index} className='col text-left'>
          {lista.NomeMae ? `Nome da mãe: ${lista.NomeMae}` : ''}
        </span>
      )}
      {lista.map((lista, index) =>
        <span key={index} className='col text-left'>
          {lista.DataNasc ? `Data de Nascimento: ${lista.DataNasc}` : ''}
        </span>
      )}
    </div>
  </div>

)

export const Email = ({ lista }) => (

  <div className="tab-pane fade" id="emails" role="tabpanel" aria-labelledby="emails-tab">
    {lista.map((lista, indexEmail) =>
      <span className='text-left'>{lista.Email1 || 'Nenhum email encontrado'}</span>
    )}
  </div>
)

export const Endereco = ({ lista }) => (

  <div className="tab-pane fade" id="end" role="tabpanel" aria-labelledby="end-tab">
    {lista.map((lista, index) =>
      <div className='d-flex flex-wrap ' key={index}>
        {lista.ENDERECOS && lista.ENDERECOS.map((endereco, index) =>
          <span key={index} className='col text-left'><strong>Endereço:</strong>
            {`
                ${endereco.TIPO_LOGRADOURO ? `${endereco.TIPO_LOGRADOURO}` : ''} 
                ${endereco.LOGRADOURO ? `${endereco.LOGRADOURO}` : ''} 
                ${endereco.NUMERO ? `${endereco.NUMERO}` : ''} 
                ${endereco.BAIRRO ? `${endereco.BAIRRO}` : ''}, 
                ${endereco.CIDADE ? `${endereco.CIDADE}` : ''}, 
                ${endereco.UF ? `${endereco.UF}` : ''} - 
                ${endereco.CEP ? `${endereco.CEP}` : ''}  
                ` || 'Nenhum endereço encontrado'
            }
          </span>
        )}
      </div>
    )}
  </div>
)

export const Renda = ({ lista }) => (

  <div className="tab-pane fade d-flex flex-column align-items-start" id="renda" role="tabpanel" aria-labelledby="renda-tab">
    <div className=' pt-2'>
      {lista.map((lista, indexOcup) =>
        <span key={indexOcup} className='text-left'><strong>Provável Empresa:</strong>
          {lista.OCUPACAO ? ` ${lista.OCUPACAO.RazaoSocial}` : ''}
        </span>
      )}
    </div>
    <div className=' pt-2'>
      {lista.map((lista, indexDesc) =>
        <span key={indexDesc} className='text-left'><strong>Ocupação:</strong>
          {lista.OCUPACAO ? ` ${lista.OCUPACAO.DescricaoCBO}` : ''}
        </span>
      )}
    </div>
    <div className=' pt-2'>
      {lista.map((lista, indexRenda) =>
        <span key={indexRenda} className='text-left'> <strong>Renda estimada:</strong>
          {lista.RENDA_ESTIMADA ? ` ${lista.RENDA_ESTIMADA.ValorRenda}` : ''}
        </span>
      )}
    </div>
  </div>
)

export const Telefone = ({ lista }) => (

  <div className="tab-pane fade d-flex justify-content-between w-75" id="telefone">
    {lista.map((lista, indexFixo) =>
      <div key={indexFixo} className='d-flex flex-column pt-2 text-left'><strong>Fixo</strong>
        {lista.TELEFONES_FIXOS && lista.TELEFONES_FIXOS.map((telefoneFixo, index1) =>
          <span key={index1} className='text-left p-2'>
            {telefoneFixo || null}
          </span>
        )}
      </div>
    )}
    {lista.map((lista, indexMovel) =>
      <div key={indexMovel} className='d-flex flex-column pt-2 text-left'><strong>Movel</strong>
        {lista.TELEFONES_MOVEIS && lista.TELEFONES_MOVEIS.map((telefoneMovel, index2) =>
          <span key={index2} className='text-left p-2'>
            {telefoneMovel || null}
          </span>
        )}
      </div>
    )}
    {lista.map((lista, indexCom) =>
      <div key={indexCom} className='d-flex flex-column pt-2 text-left'><strong>Comercial</strong>
        {lista.TELEFONES_COMERCIAIS && lista.TELEFONES_COMERCIAIS.map((telefoneComercial, index3) =>
          <span key={index3} className='text-left p-2'>
            {telefoneComercial || null}
          </span>
        )}
      </div>
    )}
  </div>
)