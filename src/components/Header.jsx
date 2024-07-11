import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Take Me Fishing</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
