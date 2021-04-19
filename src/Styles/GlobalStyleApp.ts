import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */

  background-color: #000;
  padding-top: 11px;
  /* margin-right: 2.5px; */
  /* padding:13px; */
  text-align:center;
  color: honeydew;
  /* color:rgb(161, 161, 161); */
  font-size: 1.0em;
  margin-bottom: 25px;
  /*display: flex;      2 metodo tb funcional */
  justify-content: center;
  /* flex-direction: column; */

}

body html #root {
  margin: 0;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* i{
  color: rgba(172, 41, 41, 0.404);
  color: rgba(105, 105, 105, 0.575);
} */


`;