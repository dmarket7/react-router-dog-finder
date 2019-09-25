import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Nav extends Component {
  render(){
    return (
      <nav className="NavBar">
        <NavLink exact to="/dogs/whiskey">Whiskey</NavLink>
        <NavLink exact to="/dogs/tubby">Tubby</NavLink>
        <NavLink exact to="/dogs/duke">Duke</NavLink>
        <NavLink exact to="/dogs/perry">Perry</NavLink>
      </nav>
    );
  }
}

export default Nav;