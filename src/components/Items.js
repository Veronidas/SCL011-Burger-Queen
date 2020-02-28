import React from 'react';

const desayunos = data.desayunos.map((data) => {
    return (
        <div>
            <p>{data.name} $ {data.price} <button className="btn pink accent-2">  +  </button></p>
        </div>
    )
}
)

import desayunos;