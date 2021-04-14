import React from 'react'
import './Styles/App.css';

import Header from './Pages/Header'
import Select from './Pages/Select'
import Mainly from './Pages/Mainly'
import Footer from './Pages/Footer'
import Theme from './Themes/Theme'
import { Container } from './Styles/container'

function App() {
    return (
        // <div theme={Theme}>
        // <div id='container'>
        <Container>

            <Header />

            <Select />

            <Mainly />

            <Footer />


        </Container>

        // </div>
        // </div>
    );
}

export default App;
