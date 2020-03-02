import React from 'react';
import data from './data/data'

class ListItemsLunch extends React.Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <div>{lunchArray}</div>
            </div>
        )
    }
}

const lunchArray = data.lunch.map((data) => {
    return (
        <div>
            <p>{data.name} $ {data.price} <button className="btn pink accent-2">  +  </button></p>
        </div>
    )
}
)
export default ListItemsLunch;