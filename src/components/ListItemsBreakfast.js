import React from 'react';
import data from './data/data'

const desayunos = data.desayunos.map((data) => {
    return (
        <div>
            <p>{data.name} $ {data.price}</p>
        </div>
    )
}
)

class ListItemsBreakfast extends React.Component {
    render() {
        return (
            <h1>{desayunos}  </h1>
        )
    }
}

export default ListItemsBreakfast;