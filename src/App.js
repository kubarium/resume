import "./reset.css";
import "./App.css";

import React, { Component } from "react";

import Article from "./Article";
import Description from "./Description";
import Resume from "./resume.json";
import Section from "./Section";
import Summary from "./Summary";

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
              <a target="_blank" rel="noopener noreferrer" href={Resume.website}>
                {Resume.website}
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={Resume.linkedin}>
                {Resume.linkedin}
              </a>
            </li>
          </ul>
          <Summary entries={Resume.summary} />
        </header>
        <Article title="Highlights">
          <Description entries={Resume.highlights} />
        </Article>
        <Article title="Notable Projects">
          {Resume
            .notableProjects
            .slice(0, 3)
            .map((project, index) => <Section key={index} data={project} />)}
        </Article>
        <Article title="Experience" className="page">
          {Resume
            .experience
            .map((experience, index) => <Section key={index} data={experience} />)}
        </Article>
        <Article title="Education" className="page">
          {Resume
            .education
            .map((education, index) => <Section key={index} data={education} />)}
        </Article>
        <Article title="Followed Podcasts">
          {Resume
            .following
            .podcasts
            .map((podcast, index) => <Section key={index} data={podcast} />)}
        </Article>
        <Article title="Followed Conferences">
          {Resume
            .following
            .conferences
            .map((conference, index) => <Section key={index} data={conference} />)}
        </Article>
        <Article title="Attended Meetups">
          {Resume
            .following
            .meetups
            .map((meetup, index) => <Section key={index} data={meetup} />)}
        </Article>
        <Article title="Publications" className="page">
          {Resume
            .publications
            .slice(0, 5)
            .map((publication, index) => <Section key={index} data={publication} />)}
        </Article>
        <Article title="References">
          {Resume
            .references
            .map((reference, index) => <Section key={index} data={reference} />)}
        </Article>
      </main>
    );
  }
}

export default App;
