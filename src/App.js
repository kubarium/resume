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
              <a href={Resume.github}>{Resume.github}</a>
            </li>
            <li>
              <a href={Resume.linkedin}>{Resume.linkedin}</a>
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
            .map((project, index) => <Section key={index} project={project}></Section>)}
        </Article>
        <Article title="Experience">
          {Resume
            .experience
            .map((experience, index) => <Section key={index} project={experience}></Section>)}
        </Article>
        <Article title="Education">
          {Resume
            .education
            .map((education, index) => <Section key={index} project={education}></Section>)}
        </Article>
        <Article title="Publications">
          {Resume
            .publications
            .map((publication, index) => <Section key={index} project={publication}></Section>)}
        </Article>
        <Article title="References">
          {Resume
            .references
            .map((reference, index) => <Section key={index} project={reference}></Section>)}
        </Article>
        <footer></footer>
      </main>
    );
  }
}

export default App;
