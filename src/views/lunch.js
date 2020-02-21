import React from 'react';
import Menu from '../components/menuorden';
import Enviar from '../components/botonenviar';


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