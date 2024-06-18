import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'

function App() {
  return (
    <Router>
      <div id="App">
        <div id="content">
          <div id="HeaderDiv">
            <Header/>
            <Navbar/>
          </div>
        <hr id="Splitter"></hr>
        <div id="ItemsList">
        <Routes>
          <Route path="/" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/workhistory" element={<WorkHistory/>}/>
        </Routes>
        </div>
        </div>
        <hr></hr>
      {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
