import React from 'react';

const Description = (props) => {
    return (
        <ul className="description">
            {props
                .entries
                .map((entry, index) => <li key={index}><span>{entry}</span></li>)}
        </ul>
    )
}

export default Description