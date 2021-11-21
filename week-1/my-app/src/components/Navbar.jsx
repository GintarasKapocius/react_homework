import React, { Component } from 'react'

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill me-4 py-2 px-4 alert alert-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}
export default NavBar
