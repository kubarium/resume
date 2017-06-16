import './reset.css';
import './App.css';

import React, {Component} from 'react';

import Article from './Article';
import Description from './Description';
import Resume from './resume.json';
import Section from './Section';
import Summary from './Summary';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>{Resume.id}</h1>
          <ul>
            <li>
              <a href={`mailto:${Resume.email}`}>{Resume.email}</a>
            </li>
            <li>
              <a target="_blank" href={Resume.github}>{Resume.github}</a>
            </li>
            <li>
              <a target="_blank" href={Resume.linkedin}>{Resume.linkedin}</a>
            </li>
          </ul>
          <Summary entries={Resume.summary}/>
        </header>
        <Article title="Highlights">
          <Description entries={Resume.highlights}/>
        </Article>
        <Article title="Notable Projects">
          {Resume
            .notableProjects
            .map((project, index) => <Section key={index} data={project}></Section>)}
        </Article>
        <Article title="Experience" className="page">
          {Resume
            .experience
            .map((experience, index) => <Section key={index} data={experience}></Section>)}
        </Article>
        <Article title="Education" className="page">
          {Resume
            .education
            .map((education, index) => <Section key={index} data={education}></Section>)}
        </Article>
        <Article title="Publications">
          {Resume
            .publications
            .map((publication, index) => <Section key={index} data={publication}></Section>)}
        </Article>
        <Article title="References">
          {Resume
            .references
            .map((reference, index) => <Section key={index} data={reference}></Section>)}
        </Article>
      </main>
    );
  }
}

export default App;
