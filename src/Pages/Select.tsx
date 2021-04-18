import React, { useContext } from 'react';
import { Select_ } from './Styles/select';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'
import { title } from 'node:process';
// import { title } from 'node:process';

interface props {
    toggleTheme(): void;
}

const Select: React.FC<props> = ({ toggleTheme }) => {

    const { title } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <Select_>

                <p>Escolha um tema a seguir : </p>

                <Switch
                    onChange={toggleTheme}
                    checked={title === 'Herol'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    // height={10}
                    width={50}
                    height={19}
                    handleDiameter={23}
                    offColor='#152'
                    onColor='#888'

                    boxShadow='0 0 2px 3px #134d5f'
                    activeBoxShadow='0 0 2px 3px #2a135f'
                />

            </Select_>
        </React.Fragment>
    )

}

export default Select;