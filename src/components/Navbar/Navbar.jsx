import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
             <li className="nav-item">
                <Link className="nav-link" >NavBar</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/addproducts">AddProducts</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
