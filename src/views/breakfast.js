import React from 'react';
import Enviar from '../components/botonenviar'
import Menu from '../components/menuorden'

class Breakfast extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Desayunos!!</h1>
                <Menu />
                <Enviar />
            </div>
        )
    }
}

export default Breakfast;