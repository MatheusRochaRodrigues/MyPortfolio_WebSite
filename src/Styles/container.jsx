import styled from 'styled-components'

export const Container = styled.div`
    width: 1301px;
    height: 1700px;
    /* display: flex; */
    /* background-color: rgb(56, 73, 73); */
    background-color: rgb(26, 25, 25);

    /* margin:0 auto;			 */     /* 1primeiro metodo Funcional  */ 

    padding: 15px;
    /* padding: 15px; */
    /* padding-left: 10px;      vai ajudar a centralizar, aumentar os pixels   pode comentalo para manter em seu padrao q tb esta centralizado */
    /* text-align:left; */
    /* justify-content: center; */
    border-radius: 6px;
    border: 1.6px solid rgba(105, 105, 105, 0.575);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    /* ---------Especifico para alinhar os elementos com flex box no container ------------------------- */
    display: flex;
    /* align-items: center; */

    /* -------------para centralizar o flex box no centro da pagina se necessario ----------------------- */
    /* justify-content: center; */ 


    flex-wrap: wrap;

    /* flex-direction: column; */

    h1,h2{

        /* color: green; */
        text-shadow: 1px 1px black;
        /* flex-grow: 1; */
        font-size: 1.9em;
        color: rgb(170, 15, 15);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* overflow: hidden; */
        /* cores padroes de branco para o titulo branco */
        
    }

    h2{
            /* color: rgb(202, 202, 7); */
            color: rgb(1, 139, 1);
            margin-bottom: 60px;

            /* &:hover{
                color: white;
            } */

        }

    img{
        border: 2.2px solid black;
        /* ola 1 */
    }

`