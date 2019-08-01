import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Entry from "../components/entry"


const experience = [
  {
    header: `Embedded Developer, Barnacle Systems - Victoria BC`,
    duration: `October 2018 - December 2018`,
    body: `Developing daemons that monitor industrial input output for sudden spikes in the onboard accelerometer. These daemons interface through the Legato Application Framework.`,
    bullets: [ `Extensive C Programming`, `Legato Development Framework`, `IoT Development`, `Posix Multithreading`, `Industrial Input Output (iio)` ],
  },
  {
    header: `Full Stack Web Developer, SES Consulting - Victoria BC`,
    duration: `January 2019 – May 2019`,
    body: ` Used the React library to develop a front-end platform for users to visualize and track energy
     consumption of a specific building or site. Developed backend on the Django framework, for
     user accounts and acquiring energy data from the database.`,
    bullets: [ `React Library`, `JavaScript, Python, HTML, CSS`, `Django REST Framework`, `PostgreSQL` ],
  },
  {
    header: `React Developer, SES Consulting - Remote`,
    duration: `June 2019 - Current`,
    body: `Contracted to develop design system for the front end team.`,
    bullets: [ `Storybook`, `JavaScript`, `Node` ],
  },
];

const summary = {
  body: `Third year Computer Science student looking 
    for a co-op that will enable my ambition to learn 
    new skills and development a professional work flow.`,
  bullets: [ `Excels in Object Oriented Programming`, `Web Developement`, `Embedded Programming`],
}

const education = [
  {
    header: `Computer Sience W/ Software Engineering Option - Bachelors Degree`,
    duration: `University of Victoria, June 2015 - August 2020`,
    body: `Network & Communication • Data Structures & Algorithms • Operating Systems • Databases`,
    bullets: [ ],
  },
  {
    header: `Business Administration - Diploma`,
    duration: `University of Victoria, Sept 2014 – April 2015`,
    body: `Interpersonal Communications • Organizational Behavior • Strategic Management`,
    bullets: [ ],
  },
];
const projects = [
  {
    header: `Software Lead UVic Aero - Victoria BC`,
    duration: `June 2018 - Current`,
    body: `Developed Python framework to enable modularity, inter-application communication, and
     process management. Improved flight-line debugging time 50%.`,
    bullets: [ `Project Management`, `Task Delegation`, `Documentation`, `Version Control`, `Networking & Communications`, `Python`, `MongoDB`, `Architecture & Design Patterns`, `React` ],
  },
  {
    header: `Battle Snake - Victoria BC`,
    duration: `March 2018, March 2019`,
    body: ` Python3 • Docker • Git • REST API`,
    bullets: [],
  },
  {
    header: `EEG Classifier - Victoria BC`,
    duration: `March 2018, March 2019`,
    body: `Python3 • PyTorch • NumPY • MatplotLib`,
    bullets: [],
  },
  {
    header: `NorthWest Hacks - Vancouver BC`,
    duration: `Feb 2019`,
    body: `React • Django • NodeJS • SpotifyAPI • Digital Ocean`,
    bullets: [],
  },

];
/*
const skills = [

];
*/

const makeEntries = (entries) => {
  return(
    entries.map( (element, i) => {
      return(
        <div>
          <hr/>
          <Entry
            header={ element.header }
            duration={ element.duration }
            body={ element.body }
            bullets={ element.bullets } 
            key={ i }/>
        </div>
      ) 
    }) 
  );
}
const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    { /* Summary */ }
    <h2>Summary</h2>
    <hr/>
    <p>{ summary.body }</p>
    <ul>
    { summary.bullets.map( (element, i) => <li key={ i }>{ element }</li> )}
    </ul>
    {/* Education */}
    <h2>Education</h2>
    { makeEntries(education) }
    { /* Experiences */ }
    <h2>Experience</h2>
    { makeEntries(experience) }
    { /* projects */ }
    <h2>Projects</h2>
    { makeEntries(projects) }
  
  </Layout>
)

export default IndexPage
