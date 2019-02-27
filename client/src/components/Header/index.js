import React from "react";
import "../../components/Header/style.css";
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

        <button className = "btn-default" onClick={() => { this.props.handleSignOut() }}>Sign Out</button>
        
      </div>
    );
  }
}

export default Header;
