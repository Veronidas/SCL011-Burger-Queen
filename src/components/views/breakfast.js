import React from 'react';
import ListItems from '../ListItems'
import Menu from '../menuorden'

class Breakfast extends React.Component {
    render() {
        return (
            <div className="menu container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="col s12 m5 offset-m1">
                            <Menu />
                            <ListItems />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breakfast;
