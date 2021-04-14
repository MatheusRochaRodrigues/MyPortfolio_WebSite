import React from "react";
import logo from './img/Zelda.jpg'
import './Styles/header.css'

export default function Mainly() {
    return (

        <div id='header'>
            <h1>A PÁGINA NÃO OFICIAL DO <a href='dsda.com'>LINK</a></h1> <br></br>
            {/* <h1>A PÁGINA NÃO OFICIAL DO BATMAN</h1> */}
            <img src={logo} alt="ds" />
            <h2>SÓ PROS TOP</h2>
        </div>
    )
}