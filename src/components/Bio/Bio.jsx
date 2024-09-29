import React from 'react'
import './Bio.css'
import bioPic from '../../images/bioPicture.jpeg'

const Bio = () => {
  return (
    <div className="bioContainer">
      <div className="bioPicAndDescription">
        <div className="blobOpacityFilter">
          <div className="blobContainer">
            <img id="bioPic" src={bioPic} alt="profilePicture" />
          </div>
        </div>
        <div className="summary">
          <b>Hi,</b> my name is Ross Comer and I am a self-motivated developer
          with two years of experience creating full-stack applications.  
          I am familiar with the entire software development lifecycle, continuous integration, and
          responsive web-design, which is demonstrated in my applications in this portfolio.  
          I am seeking an entry-level software engineering position where 
          I can apply my passion for solving complex problems as part of a team.
        </div>
      </div>
    </div>
  )
}

export default Bio
