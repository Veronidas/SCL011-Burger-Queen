import React from 'react';
import data from './data/data'

const almuerzos = data.almuerzos.map((data) => {
    return (
        <div>
            <p>{data.name} $ {data.price}</p>
        </div>
    )
}
)

class ListItemsLunch extends React.Component {
    render() {
        return (
            <h1>{almuerzos}  </h1>
        )
    }
}

export default ListItemsLunch;