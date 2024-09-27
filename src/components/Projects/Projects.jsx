import React from 'react'
import './Projects.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import trackstar from '../../images/trackstar-test.png'
import toerstore from '../../images/toerstore-test.png'
import ffGenie from '../../images/FFGenie-test.png'
import { Carousel } from 'react-responsive-carousel'

const Projects = () => {
  return (
    <div className="carouselContainer">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        swipeable={false}
        showIndicators={false}
      >
        <div className="Project">
          <div className="projectHeader">
            <div className="projectTitle">TOER Store</div>
            <div className='projectSummary'>E-commerce app integrated with Stripe and Auth0</div>
            <div className="refLink">
              <a href="https://toerstore.com">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="http://github.com/rossmcomer/toer-store">
                View on Github
              </a>
            </div>
          </div>
          <a href="https://toerstore.com" className="projectPic">
            <img src={toerstore} className="carouselPic" alt="TOER-store" />
          </a>
          <ul className="projectDetails">
            <li>
              Single-page React app utilizing Google Cloud PaaS for hosting
              Postgres database
            </li>
            <li>
              Containerized via Docker utilizing Nginx for multi-stage build
            </li>
            <li>Responsive web design with dark mode feature</li>
            <li>React Context for complex state management</li>
            <li>Node/Express backend utilizes RESTful APIs</li>
            <li>Deployed on Google Cloud using Nginx as reverse-proxy</li>
          </ul>
        </div>
        <div className="Project">
          <div className="projectHeader">
            <div className="projectTitle">Trackstar</div>
            <div className='projectSummary'>Cryptocurrency tracker with customized watchlists</div>
            <div className="refLink">
              <a href="http://trackstarapp.com">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="https://github.com/rossmcomer/trackstar">
                View on Github
              </a>
            </div>
          </div>
          <a href="https://trackstarapp.com" className="projectPic">
            <img src={trackstar} className="carouselPic" alt="Trackstar" />
          </a>
          <ul className="projectDetails">
            <li>
              Single-page React app utilizing AWS RDS cloud PaaS for hosting
              Postgres database
            </li>
            <li>
              RESTful APIs facilitate CRUD for
              watchlist/user management
            </li>
            <li>
              Containerized via Docker utilizing Nginx for multi-stage build
            </li>
            <li>Redux Thunk for complex state management</li>
            <li>Node/Express backend</li>
            <li>Responsive web design</li>
            <li>Deployed via AWS EC2 using Nginx as reverse-proxy</li>
          </ul>
        </div>
        <div className="Project">
          <div className="projectHeader">
            <div className="projectTitle">FFGenie</div>
            <div className='projectSummary'>Fantasy Football Lineup Helper</div>
            <div className="refLink">
              <a href="https://ffgenie.fly.dev/">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="https://github.com/rossmcomer/FFGenie">
                View on Github
              </a>
            </div>
          </div>
          <a href="https://github.com/rossmcomer/FFGenie" className="projectPic">
            <img src={ffGenie} className="carouselPic" alt="FFGenie" />
          </a>
          <ul className="projectDetails">
            <li>
              Pulls all fantasy football teams for any Sleeper username
            </li>
            <li>
              Provides information about the stadium, weather, and 
              betting odds for each player
            </li>
            <li>
              Single page Vue app utilizing Typescript
            </li>
            <li>Vuex for complex state management</li>
            <li>
              Containerized via Docker
            </li>
            <li>Responsive web design</li>
            <li>Deployed via AWS Elastic Conainer Service</li>
          </ul>
        </div>
      </Carousel>
    </div>
  )
}

export default Projects
