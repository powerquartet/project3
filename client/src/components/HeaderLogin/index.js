import React from "react";
// import "../../components/Header/style.css";


const HeaderLogin = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        Daily Plate
      </li>
      {/* <li className="nav-item">
      {console.log(props)}
        <button onClick={() => (props.handleDisplay())}>
          Sign In
        </button>
      </li> */}
    </ul>
  </nav>
);

export default HeaderLogin;
