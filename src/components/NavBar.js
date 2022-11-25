
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import  logo  from'../images/logo2.jpeg'


function NavBar() {

    const [showForm, setShowForm]= useState(false)
    function handleClick(){
        setShowForm(showForm=>!showForm)
    }
    return (
      <div className="nb">
          <div className="logo">
            <img src={logo} className="logo" alt="logo"/>
            <h2>Chunga Mjunior</h2>
          </div>
          
          <ul >
          <li><NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    textDecoration: 'none',
                    padding: '3px'
                  })} >Home </NavLink></li>

            <li><NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                     textDecoration: 'none',
                    padding: '4px'
                  })} > About Us </NavLink></li>
      

            <li><NavLink to="/portal" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    textDecoration: 'none',
                    padding: '4px'
                  })} > Portal</NavLink></li>

            <li><NavLink to="/contact" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    textDecoration: 'none',
                    padding: '4px'
                  })} > Contact Us</NavLink></li>
            
          </ul>
      </div>
    );
  }
  
  export default NavBar;