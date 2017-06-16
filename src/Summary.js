import React from 'react';

const Summary = (props) => {
    return (
        <div className="summary">
          { props
                .entries
                .map((entry, index) => <p key={ index }>
                                         { entry }
                                       </p>) }
        </div>
    )
}

export default Summary