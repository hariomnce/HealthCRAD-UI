import React from 'react'
import healthcrad2 from './image/healthcrad2.png'
import { FiSearch } from 'react-icons/fi'; 


const Navbar = () => {
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-light" style={{ height: '60px' }}>
              <div className="container-fluid">
                   <a className="navbar-brand" href="/"><img style={{width:'80px'}} src={healthcrad2} alt='logo'/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Services
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/">Doctors's Appoinment</a></li>
                                  <li><a className="dropdown-item" href="/">Medicines</a></li>
                                  {/* <li><hr className="dropdown-divider"/></li> */}
                                  <li><a className="dropdown-item" href="/">Ambulances</a></li>
                                  <li><a className="dropdown-item" href="/">Emergency</a></li>
                                  <li><a className="dropdown-item" href="/">Pathlab</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Contact Us
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/">Request a call</a></li>
                                  <li><a className="dropdown-item" href="/">Email</a></li>
                              </ul>
                          </li>
                      </ul>
                      <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success mx-2" type="submit"><FiSearch/></button>
                          <button className="btn btn-outline-success">Login</button>
                          <button className="btn btn-outline-success mx-2">Signup</button>
                      </form>
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar