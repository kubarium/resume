import './reset.css';
import './App.css';

import React, {Component} from 'react';

import Resume from './resume.json';
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
        <article></article>
        <footer></footer>
      </main>
    );
  }
}

export default App;
