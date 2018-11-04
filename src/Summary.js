import Linkify from 'react-linkify';
import React from 'react';

const Summary = (props) => {
    return (
        <div className="summary">
            {props
                .entries
                .map((entry, index) => <p key={index}>
                    <Linkify
                        properties={{
                        target: "_blank"
                    }}>{entry}</Linkify>
                </p>)}
        </div>
    )
}

export default Summary