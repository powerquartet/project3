import React from "react";
import "../../components/Header/style.css";
import { auth } from "../../utils/firebase";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = () => {
      auth.signOut().then(result => {
        console.log(result);
        this.setState({
          signOut: !this.state.signOut
        });
      });
    };
  }

  render() {
    return (
      <div className="header">
        <h1> Daily Plate </h1>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default Header;
