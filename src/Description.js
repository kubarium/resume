import Linkify from 'react-linkify';
import React from 'react';

const Description = (props) => {
    return (
        <ul className="description">
          { props
                .entries
                .map((entry, index) => <li key={ index }><span><Linkify properties={ { target: "_blank" } }>{ entry }</Linkify></span></li>) }
        </ul>
    )
}

export default Description