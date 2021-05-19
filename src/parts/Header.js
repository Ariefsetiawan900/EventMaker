import React from "react";

const Header = () => {
  return (
    <header class="container my-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav p-4">
        <a class="navbar-brand" href="#">
          {/* <img src="img/logo.png" alt="Logo Navbar" /> */}
          <span>EventMaker</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item align-self-center">
              <a class="nav-link" href="#">
                +Add Event
              </a>
            </li>
            <li class="nav-item align-self-center">
              <a class="nav-link" href="#">
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
