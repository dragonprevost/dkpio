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
  
const projects = [

];

const skills = [

];

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
    { /* Experiences */ }
    <h2>Experience</h2>
    { experience.map( (element, i) => {
      return(
        <div>
          <hr/>
          <Entry
            header={ element.header }
            duration={ element.duration }
            body={ element.body }
            bullets={ element.bullets } />
        </div>
      ) 
    }) }
  
  </Layout>
)

export default IndexPage
