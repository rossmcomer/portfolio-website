import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import projects from './components/Projects/projectsList.json'

function App() {
  return (
    <Router>
      <div id="App">
        <div id="content">
          <Navbar />
          <div id="ItemsList">
            <Routes>
              <Route path="/" element={<Bio />} />
              <Route path="/projects" element={<Projects projects={projects} />} />
              <Route path="/education" element={<Education />} />
              <Route path="/workhistory" element={<WorkHistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
