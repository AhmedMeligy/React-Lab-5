import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



const Navbar = ({ cartItems }) => {
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
              <li className="nav-item">
              <Link className="nav-link" to="/addproducts"><div>Cart ({cartItems.length})</div></Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps)(Navbar);
