import React from 'react';
import Menu from '../menuorden';
import Enviar from '../botonenviar';


class Lunch extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Almuerzos!</h1>
                <Menu />
                <Enviar />
            </div>
        )
    }
}

export default Lunch;