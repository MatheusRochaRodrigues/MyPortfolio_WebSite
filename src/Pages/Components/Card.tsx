import React from 'react'
import { Card_, Componente1_, Componente2_ } from './Styles/card'

interface props {
    titulo: string;
}

const io: React.FC<props> = (props) => {

    return (

        <Card_>
            <Componente1_>
                {props.children}
            </Componente1_>
            <Componente2_>
                {props.titulo}
            </Componente2_>
        </Card_>

    )

}

export default io;

