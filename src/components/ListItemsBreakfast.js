import React from 'react';
import data from './data/data'

class ListItemsBreakfast extends React.Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="btn pink accent-2">  +  </button>
                <ul>{data.desayunos.map((data) => <li key={data.id}>{data.name} $ {data.price}</li>)}</ul>
                <span>{this.state.count}</span>
            </div >
        )
    };
}

export default ListItemsBreakfast;

