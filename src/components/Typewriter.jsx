import React, { useState, useEffect } from 'react'

const Typewriter = () => {
  const text = 'Hello, world!'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return <div>{displayedText}</div>
}

export default Typewriter
