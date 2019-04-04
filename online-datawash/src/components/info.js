import React from 'react'
import info from '../assets/info.png'
import './components.scss'

const Tootip = (props) => (
    <div className='dica d-flex mt-5 position-absolute '>
        <img className='dica-img mr-3' src={info} />
        <div className='dica-texto px-2 position-absolute rounded bg-light sombra'>
            {props.children}
        </div>
    </div>
)
export default Tootip