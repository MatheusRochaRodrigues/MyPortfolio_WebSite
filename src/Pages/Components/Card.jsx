import React from 'react'
import './Styles/card.css'

export default props => (

    <div className='card'>
        {/* <div className='nom'>
            
            <span className='titulo'>{props.titulo}
            </span>
        </div> */}
        <div className='comp1'>
            {props.children}
        </div>
        <div className='comp2'>
            {props.titulo}
        </div>
    </div>

);