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
        const desayunos = data.desayunos.map((data) => {
            return (
                <div>
                    <p>{data.name} $ {data.price}
                        <button onClick={this.handleClick} className="btn pink accent-2">  +  </button>
                        {this.state.items}
                    </p>
                </div>
            )
        });
        return (
            <div>
                {desayunos}
            </div>
        )
    }
}

export default ListItemsBreakfast;

