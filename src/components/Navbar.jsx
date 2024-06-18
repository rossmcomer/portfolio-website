import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <div id="SelectionBar">
        <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Projects</NavLink>
        <NavLink to="/education" className={(navData) => (navData.isActive ? "active" : 'none')}>Education</NavLink>
        <NavLink to="/workhistory" className={(navData) => (navData.isActive ? "active" : 'none')}>Work History</NavLink>
      </div>
    )
}

export default Navbar