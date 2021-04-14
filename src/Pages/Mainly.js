import React from 'react'
import './Styles/mainly.css'
import Card from './Components/Card'

import img1 from './Components/img/link1.jpg'
import img2 from './Components/img/pixel-sword-png-7-png-image-pixel-sword-png-216_222.png'
import img3 from './Components/img/dbj3t7n-0c7002d9-755d-4f8c-90a4-28930c75e371.png'

function Mainly() {
    return (
        <main id='content'>

            {/* <article className="item"></article>
        <article className="item"></article>
        <article className="item"></article>
        <article className="item"></article>
        
        <article className="item"></article>
        <article className="item"></article>
        <article className="item"></article>
        <article className="item"></article> */}

            <Card titulo="Primeira caixa ola baby two"><img src={img3}></img></Card>
            <Card titulo="Segunda caixa"><img src={img2}></img></Card>
            <Card titulo="Terceira caixa"><img src={img3}></img></Card>
            <Card titulo="Quarta caixa"><img src={img3}></img></Card>

            <Card titulo="Quinta caixa"><img src={img3}></img></Card>
            <Card titulo="Sexta caixa"><img src={img3}></img></Card>
            <Card titulo="Sabado caixa"><img src={img3}></img></Card>
            <Card titulo="Domingo caixa"><img src={img3}></img></Card>

        </main>
    );
}

export default Mainly;