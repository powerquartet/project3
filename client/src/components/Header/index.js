import React from "react";
import "../../index.css";
import { auth } from "../../utils/firebase";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Current user object:", auth.currentUser);
    return (
      <div className="header">

        <h1> Daily Plate </h1>

        <button className = "btnSignout" onClick={() => { this.props.handleSignOut() }}>Sign Out</button>
        
      </div>
    );
  }
}

export default Header;
