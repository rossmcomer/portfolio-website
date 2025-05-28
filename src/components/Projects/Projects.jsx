import React from 'react'
import './Projects.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Project from './Project.jsx'

const Projects = ({ projects }) => {
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
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Carousel>
    </div>
  )
}

export default Projects
