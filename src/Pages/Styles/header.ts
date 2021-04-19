import styled from 'styled-components'

export const Header_ = styled.div`

    width: 100%;
    height: 25%;
    /* background-color: grey; */
    /* margin-bottom: 30px; */

    a{ 
        /* text-decoration:none;  */
        /* color: green; */
        /* text-decoration: none; */
        color: rgb(182, 18, 18);

        &:hover{
            color: ${props => (props.theme.colors.link)};
            transition: 0.3s;
        }

    } 

    a { color: inherit; } 

    img{
        border: 2.45px solid black;
    }

    @media (max-width: 720px){

        img{
            width: 550px;
    }
        

    }


`