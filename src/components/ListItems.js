import React from 'react';
import data from './data/data'

const newdata = data.map((data) => {
    return (
        <div>
            <p>{data.id}: {data.name} $ {data.price}</p>
        </div>
    )
}
)




export default class ListItems extends React.Component {
    render() {
        return (
            <h1>{newdata}  </h1>
        )
    }
}