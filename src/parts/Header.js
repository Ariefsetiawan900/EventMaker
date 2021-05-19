import React from "react";

const Header = () => {
  return (
    <header className="container my-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav p-4">
        <a className="navbar-brand" href="#">
          {/* <img src="img/logo.png" alt="Logo Navbar" /> */}
          <span>EventMaker</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item align-self-center">
              <a className="nav-link" href="#">
                +Add Event
              </a>
            </li>
            <li className="nav-item align-self-center">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
