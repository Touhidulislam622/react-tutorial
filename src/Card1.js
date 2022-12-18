import React from 'react';

const Card1 = (props) => {
    const {name , desc } = props;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{desc}</h1>
        </div>
    );
}; 

export default Card1;