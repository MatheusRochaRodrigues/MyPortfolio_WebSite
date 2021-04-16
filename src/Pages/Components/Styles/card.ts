import styled from 'styled-components'

export const Card_ = styled.div`

    margin-top: 13px;
    /* background-color: rgba(83, 83, 83, 0.63); */
    background-color: rgba(61, 61, 61, 0.63);
    flex-basis: 303px;
    height: 294px;
    border-radius: 3px;
    /* justify-content: center; */
    display: flex;
    /* align-items: center; */
    /* align-items: flex-end; */
    font-size: 1.7em;
    text-shadow: 1px 1px black;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    flex-direction: column;
    padding: 1px 0px;

    cursor: pointer;

    /* caret-color: red; */

    /* border: 1px solid brown; */

    color: rgba(150, 34, 34, 0.425);
    opacity: 0.5;

    transition: 0.36s;

    &:hover{
        background-color: rgba(172, 41, 41, 0.404);
        /* color: honeydew; */
        color: rgba(234, 250, 234, 0.479);

        opacity: 1;
    }

    &:active{
        background-color: rgba(0, 100, 0, 0.37);
        /* background-color: gray; */
        transition: 0.4s;
    }


`


export const Componente1_ = styled.div`
    height: 76%;
    /* background-color: lightblue; */
    justify-content: center;

    /* ------pode ser bom -- vamos ver ainda ------ */
    display: flex;


`

export const Componente2_ = styled.div`
    /* flex-direction:; */
    
    /* background-color: lightcoral; */
    flex-grow: 1;

`