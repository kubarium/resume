import Description from './Description';
import React from 'react';
import Summary from './Summary';
import Tech from './Tech';
import Title from './Title';

const Section = (props) => {
    return (
        <section className="section">
            <Title primary={props.project.title} secondary={<a href={props.project.url}><i className="material-icons">open_in_new</i></a>} />
            {props.project.tech && <Tech skills={props.project.tech} indicator=">" />}
            {props.project.summary && <Summary entries={props.project.summary} />}
            {props.project.description && <Description entries={props.project.description} />}
{/*
            {props
                .entries
                .map((entry, index) => <p key={index}>{entry}</p>)}*/}
        </section>
    )
}

export default Section