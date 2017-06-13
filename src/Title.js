import React from 'react';

const Title = (props) => {
    return (
        <h3 className="title">
            {props.primary}
            <span>{props.secondary}</span>
        </h3>
    )
}

export default Title