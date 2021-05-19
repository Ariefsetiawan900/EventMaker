import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "actives" : "";
  };
  return (
    <header className="container my-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav p-4">
        <Link className="navbar-brand" to="/">
          {/* <img src="img/logo.png" alt="Logo Navbar" /> */}
          <span>EventMaker</span>
        </Link>
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
              <Link
                className={`nav-link  ${getNavLinkClass("/addevent")}`}
                to="/addevent"
              >
                +Add Event
              </Link>
            </li>
            <li className="nav-item align-self-center">
              <Link
                className={`nav-link  ${getNavLinkClass("/dashboard")}`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
