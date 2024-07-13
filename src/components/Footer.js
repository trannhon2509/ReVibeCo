import React from 'react';

const Footer = () => {
  return (
    <footer className="section__container footer__container">
      <div className="footer__content">
        <div className="footer__brand">
          <a href="#" className="logo">furni.shop</a>
          <p className="section__description">
            Furni.shop: transforming spaces with premium furniture and
            exceptional service for your dream home.
          </p>
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
            <a href="#"><i className="ri-instagram-fill"></i></a>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
        <div className="footer__links">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Warranty</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Lighting</a></li>
            <li><a href="#">Decor</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <small>&copy; 2023 furni.shop. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
