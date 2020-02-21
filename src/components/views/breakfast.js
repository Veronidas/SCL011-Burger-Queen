import React from 'react';
import ListItems from '../ListItems'
import Menu from '../menuorden'

class Breakfast extends React.Component {
    render() {
        return (
            <div className="menu container">
                <h1>Desayunos:</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <Menu />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <ListItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default Breakfast;
