import Description from './Description';
import React from 'react';
import ReactSVG from 'react-svg';
import Summary from './Summary';
import Tech from './Tech';
import Title from './Title';

const Section = (props) => {
    const data = props.data
    let secondary = null
    if (data.url)
        secondary = <a target="_blank" href={ data.url }>
                      <ReactSVG path="external-link.svg" style={ { width: 24 } } />
                    </a>
    if (data.date)
        secondary = data.date
    if (data.location)
        secondary = `${data.location} - ${data.date}`
    if (data.role)
        secondary = data.role

    return (
        <section className="section">
          <Title primary={ data.title } secondary={ secondary } />
          { data.tech && <Tech skills={ data.tech } indicator=">" /> }
          { data.summary && <Summary entries={ data.summary } /> }
          { data.description && <Description entries={ data.description } /> }
        </section>
    )
}

export default Section