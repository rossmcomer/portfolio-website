import React from 'react'
import './Bio.css'
import bioPic from '../../images/bioPicture.jpeg'

const Bio = () => {
  return (
    <div className="bioContainer">
            <div className="bioPicAndDescription">
                <div className="blobOpacityFilter">
                    <div className='blobContainer'>
                        <img id="bioPic" src={bioPic} alt="profilePicture"/>
                    </div>
                </div>
                <div className="summary">
                    <b>Hi,</b> my name is Ross Comer and I am a full-stack developer passionate about creating products that 
                    meet industry standards yet stand out from the 
                    competition.  With a background in biomedical engineering and audio engineering
                    I possess a unique set of problem-solving skills,
                    creativity, and technical prowess.  I am seeking an entry-level 
                    software engineering position where I can contribute to innovative projects.
                </div>
            </div>
    </div>
  )
}

export default Bio