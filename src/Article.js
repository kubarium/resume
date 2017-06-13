import React from 'react';

const Article = (props) => {
    return (
        <article className="article">
            <h2>{props.title}</h2>
            {props.children}
        </article>
    )
}

export default Article