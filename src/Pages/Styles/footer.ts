import styled from 'styled-components'

export const Footer_ = styled.div`

    width: 100%;
    height: 20%;
    /* background-color: red; */
    text-align: left;
    color: maroon;
    /* color: darkmagenta; */
    text-shadow: 0px 0px rgb(107, 107, 107);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.3em;
    display: flex;
    flex-direction: column-reverse;
    /* line-height: 80px; */
    color: ${props => props.theme.colors.secundary};

`