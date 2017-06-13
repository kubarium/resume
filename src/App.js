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
        {/*<Title
            primary={Resume.experience[0].title}
            secondary={Resume.experience[0].date} />
          */}
        <footer></footer>
      </main>
    );
  }
}

export default App;
