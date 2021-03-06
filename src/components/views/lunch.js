import React from 'react';
import Menu from '../menuorden';
import ListItemsLunch from '../ListItemLunch'


class Lunch extends React.Component {
    render() {
        return (
            <div className="menu container">
                <h1>Almuerzos:</h1>
                <div className="row">
                    <div className="col s12 m6">
                        <ListItemsLunch />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}

export default Lunch;