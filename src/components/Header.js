import React from 'react';

const Header = () => {
  return (
    <header className="section__container header__container" id="home">
      <div className="header__image">
        <img src="assets/header2.jpg" alt="header" />
      </div>
      <div className="header__content">
        <div>
          <h1>We Help You Make Modern Interior</h1>
          <p>
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
