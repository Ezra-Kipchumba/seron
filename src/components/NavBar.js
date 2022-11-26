
import React from "react";
import  logo  from'../images/logo2.jpeg'


function NavBar() {

  
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="collapse navbar-collapse">
          <div class="collapse navbar-collapse" id="navbar">
            <h1 className="header">
              <a href="/" id="ch">
                Chunga Mjunior
              </a>
            </h1>
            <form class="form-inline" id="inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="./About">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Portal">
                  Portal
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;