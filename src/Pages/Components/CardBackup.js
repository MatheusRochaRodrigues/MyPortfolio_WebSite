import React from 'react'
import { Card_, Componente1_, Componente2_ } from './Styles/card'



export default props => (

    <Card_>
        <Componente1_>
            {props.children}
        </Componente1_>
        <Componente2_>
            {props.titulo}
        </Componente2_>
    </Card_>

);