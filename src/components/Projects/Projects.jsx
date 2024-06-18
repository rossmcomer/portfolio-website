import React from 'react'
import './Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import trackstar from '../../assets/trackstar.png'
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {  
        return (
          <div className="carouselContainer">
          <Carousel showArrows={true} width="500px" showStatus={false}>
          <div className="Project">
            <div className="projectHeader">
              <div className="projectTitle">Trackstar</div>
              <div>Cryptocurrency tracker with customized watchlists</div>
              <div className="refLink">
              <a href="http://3.149.247.65:8080">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="http://github.comyankee3313/trackstar">View on Github</a>
              </div>
            </div>
            <img src={trackstar} className="carouselPic" alt="Trackstar" style={{ border: '2px solid black' }}/>
            <ul>
              <li>Single-page React app utilizing AWS cloud PaaS for hosting Postgres database</li>
              <li>Pulls data from coingecko API and facilitates CRUD for watchlist/user management</li>
              <li>Redux Thunk for complex state management</li>
              <li>Node/Express/Axios backend</li>
              <li>Deployed via AWS EC2</li>
            </ul>
          </div>
          <div className="Project">
            <img src={trackstar} className="carouselPic" alt="Trackstar"/>
            <div className="refLink">
            <a href="https://github.com/yankee3313">Trackstar</a>
            </div>
          </div>
          <div className="Project">
            <img src={trackstar} className="carouselPic" alt="Trackstar"/>
            <div className="refLink">
            <a href="https://github.com/yankee3313">Trackstar</a>
            </div>
          </div>
        </Carousel>
        </div>
        );
}

export default Projects