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

    color: ${props => (props.theme.colors.bTextBef)};
    opacity: 0.5;

    transition: 0.36s;

    &:hover{
        background-color: ${props => (props.theme.colors.card)};
        /* color: honeydew; */
        color: ${props => (props.theme.colors.bTextAft)};
        /* border: 1px solid black; */
        opacity: 1;
    }

    &:active{
        background-color: ${props => (props.theme.colors.border)};
        /* background-color: rgba(240, 255, 240, 0.452);  rgba(0, 0, 0, 0.5); */
        /* background-color: gray; */
        transition: 0.0s;
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