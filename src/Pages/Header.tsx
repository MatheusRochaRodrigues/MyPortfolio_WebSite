import React from "react";
import logo from './img/Zelda.jpg'
// import './Styles/header.css'
import { Header_ } from './Styles/header'

export default function Header() {
    return (

        <Header_>
            <h1>A PÁGINA NÃO OFICIAL DO <a href='EmProducao'>LINK</a></h1> <br></br>
            {/* <h1>A PÁGINA NÃO OFICIAL DO BATMAN</h1> */}
            <img src={logo} alt="ds" />
            <h2>SÓ PROS TOP</h2>
        </Header_>
    )
}