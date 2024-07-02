import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
      <div className={`navBarContainer ${isCollapsed ? 'collapsed' : ''}`}>
        <div id="HeaderContainer">
          <h1 id="headerName">
            <a className="headerLink" href="/">Ross M. Comer</a>
          </h1>
            <div>
              <button className="navbar-toggle" onClick={toggleNavbar}>
                  &#9776;
              </button>
            </div>
        </div>
        <div className="SelectionBar">
          <div className={`navbar-links ${isCollapsed ? 'collapsed' : ''}`}>
            <NavLink to="/projects" className={(navData) => (navData.isActive ? "active" : 'none')}>Projects</NavLink>
            <NavLink to="/education" className={(navData) => (navData.isActive ? "active" : 'none')}>Education</NavLink>
            <NavLink to="/workhistory" className={(navData) => (navData.isActive ? "active" : 'none')}>Work History</NavLink>
          </div>
        </div>
      </div>
    )
}

export default Navbar