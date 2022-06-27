import React from 'react'
import PropTypes from 'prop-types'
import{ Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode Enabled</label>
</div>

    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title : PropTypes.string.isRequired,
                  aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    about: 'About text here'
};