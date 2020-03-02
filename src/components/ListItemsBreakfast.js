import React from 'react';
import data from './data/data'

class ListItemsBreakfast extends React.Component {
    state = {
        count: 0
    }
    handleClick = data => {
        console.log(data);
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <button
                    onClick={() => this.handleClick(data)}
                    className="btn pink accent-2">
                    +
                    </button>
                <ul>{data.breakfast.map((data) => <li key={data.id}>{data.name} $ {data.price}</li>)}</ul>
                <span>{this.state.count}</span>
            </div >
        )
    };
}

export default ListItemsBreakfast;

