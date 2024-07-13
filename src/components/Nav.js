import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="/" className="logo">Revibeco</a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#product">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav__search" id="nav-search">
        <Link to="/order" className="btn btn-light"><i className="bi bi-receipt" style={{ fontSize: "23px" }}></i></Link>
        <Link to="/shoppingcard" className="btn btn-light"><i className="bi bi-bag-heart" style={{ fontSize: "23px" }}></i></Link>
      </div>
    </nav>
  );
};

export default Nav;
