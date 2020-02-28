import React from 'react';
import data from './data/data'

class ListItemsBreakfast extends React.Component {
    state = {
        items: 0
    }
    handleClick = (e) => {
        let counter = this.state.items + 1
        this.setState({ items: counter });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="btn pink accent-2">  +  </button>
                <ul>{data.desayunos.map((data) => <li key={data.id}>{data.name} $ {data.price}</li>)}</ul>
                <span>{this.state.items}</span>
            </div >
        )
    };
}

export default ListItemsBreakfast;

