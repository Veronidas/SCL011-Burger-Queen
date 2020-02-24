import React from 'react';
import Menu from '../menuorden'
import ListItemsBreakfast from '../ListItemsBreakfast';

class Breakfast extends React.Component {
    render() {
        return (
            <div className="menu container">
                <h1>Desayunos:</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <ListItemsBreakfast />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}

export default Breakfast;
