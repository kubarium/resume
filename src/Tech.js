import React from 'react';

const Tech = (props) => {
    return (
        <div className="tech">
            <span>
                {props.indicator}
            </span>
            <ul>
                {props
                    .skills
                    .map((skill, index) => <li key={index}>
                        <span>{skill}</span>
                    </li>)}
            </ul>
        </div>
    )
}

export default Tech