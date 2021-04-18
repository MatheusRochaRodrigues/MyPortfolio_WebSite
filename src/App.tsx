import React, { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import './Styles/App.css';

import Header from './Pages/Header'
import Select from './Pages/Select'
import Mainly from './Pages/Mainly'
import Footer from './Pages/Footer'

import Dark from './Styles/Themes/Dark'
import Herol from './Styles/Themes/Herol'

import UsedPersistedState from './Utils/UsedPersistedState'

import { Container } from './Styles/container'

function App() {

    const [Theme, setTheme] = UsedPersistedState<DefaultTheme>('theme', Dark);

    const toggleTheme = () => {
        setTheme(Theme.title === 'Dark' ? Herol : Dark);
    };

    return (

        <ThemeProvider theme={Theme}>
            <Container>

                <Header />

                <Select toggleTheme={toggleTheme} />

                <Mainly />

                <Footer />


            </Container>

        </ThemeProvider>

    );
}

export default App;
