import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
  return (
    <header className="header bg-light">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1 className="header-title">My Application</h1>
          </div>
          <div className="col-12 col-md-6 text-md-right">
            <nav className="header-nav">
              <a href="#home" className="nav-link d-inline-block" > Home </a> &nbsp;
              <a href="#about" className="nav-link d-inline-block">About</a> &nbsp;
              <a href="#contact" className="nav-link d-inline-block">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
