import React from 'react'
import { Content_ } from './Styles/mainly'
import Card from './Components/Card'

import img1 from './Components/img/link1.jpg'
import img2 from './Components/img/pixel-sword-png-7-png-image-pixel-sword-png-216_222.png'
import img3 from './Components/img/dbj3t7n-0c7002d9-755d-4f8c-90a4-28930c75e371.png'
// import img4 from './Components/img/2.png'
import img5 from './Components/img/3.png'
import img6 from './Components/img/5.png'
import img7 from './Components/img/6.png'
import img8 from './Components/img/7.png'
import img9 from './Components/img/8.png'
import img10 from './Components/img/10.png'
import img11 from './Components/img/11.png'


function Mainly() {
    return (
        <Content_>

            <Card titulo="Primeira caixa ola baby two"><img src={img3}></img></Card>
            <Card titulo="Segunda caixa"><img src={img7}></img></Card>
            <Card titulo="Terceira caixa"><img src={img11}></img></Card>
            <Card titulo="Quarta caixa"><img src={img5}></img></Card>

            <Card titulo="Quinta caixa"><img src={img6}></img></Card>
            <Card titulo="Sexta caixa"><img src={img8}></img></Card>
            <Card titulo="Sabado caixa"><img src={img10}></img></Card>
            <Card titulo="Domingo caixa"><img src={img9}></img></Card>

        </Content_>
    );
}

export default Mainly;