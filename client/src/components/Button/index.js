import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Button () {
    return (
        <button type="button" className="btn btn-outline-dark">Dark
            <Link className="button-brand" to="/">
                Mindful Plate
      </Link>
            <div>
                <ul className="btn">
                    <li className="btn-item">
                        <Link
                            to="/portion"
                            className={
                                window.location.pathname === "/portion" || window.location.pathname === "/portion"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Portion
            </Link>
                    </li>
                    <li className="btn-item">
                        <Link
                            to="/form"
                            className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
                        >
                            Form
            </Link>
                    </li>
                    <li className="btn-item">
                        <Link
                            to="/grid"
                            className={window.location.pathname === "/grid" ? "nav-link active" : "nav-link"}
                        >
                            Grid
            </Link>
                    </li>
                </ul>
            </div>
        </button>
    );
}

export default Navbar;
