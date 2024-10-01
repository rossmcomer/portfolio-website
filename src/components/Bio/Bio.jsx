import React, { useState, useEffect } from 'react'
import './Bio.css'
import bioPic from '../../images/bioPicture.jpeg'

const Bio = () => {
  const text = "HI, I'm Ross Comer and I am a full-stack developer currently based in Appleton, WI. I used to work with audio but now I work with code. My applications in this portfolio demonstrate my knowledge of the software development lifecycle, continuous integration, and responsive web design."
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)
      }, 7)

      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return (
    <div className="bioContainer">
      <div className="bioPicAndDescription">
        <div className="blobOpacityFilter">
          <div className="blobContainer">
            <img id="bioPic" src={bioPic} alt="profilePicture" />
          </div>
        </div>
        <div id="summary"><b>{displayedText.slice(0, 3)}</b>{displayedText.slice(3)}</div>
      </div>
    </div>
  )
}

export default Bio
