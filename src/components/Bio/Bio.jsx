import React from 'react'
import './Bio.css'
import bioPic from '../../images/bioPicture.jpeg'

const Bio = () => {
  return (
    <div className="bioContainer">
        <div className="bioUpper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 269"><path fill="#2e4dff" fillOpacity="1" d="M0,320L48,277.3C96,235,192,149,288,144C384,139,480,213,576,208C672,203,768,117,864,96C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className="bioLower">
            <div className="bioPicAndDescription">
                    <img id="bioPic" src={bioPic} alt="profilePicture"/>
                <div className="summary">
                    <b>Hi,</b> my name is Ross Comer and I am a full-stack developer. 
                    I am passionate about creating clean, efficient products that stand out from the 
                    competition.  With a background in audio engineering and biomedical engineering
                    I possess a unique set of problem-solving skills,
                    creativity, and technical prowess.  I am seeking an entry-level 
                    software engineering position where I can contribute to innovative projects.
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fillOpacity="1" d="M0,320L48,277.3C96,235,192,149,288,144C384,139,480,213,576,208C672,203,768,117,864,96C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </div>
  )
}

export default Bio