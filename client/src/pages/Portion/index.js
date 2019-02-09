import React, { Component } from "react";
import Toggle from "../../components/Toggle";
import "./style.css";


class Portion extends Component {
    render() {
        return (
            <div className="toggleButtons">

                < Toggle>
                    {({ on, toggle }) => (
                        <div>
                            {on && <h1>Fruits</h1>}
                            <button onClick={toggle}>Fruits</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div>
                            {on && <h1>Vegetables</h1>}
                            <button onClick={toggle}>Vegetables</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div>
                            {on && <h1>Priotein</h1>}
                            <button onClick={toggle}>Protein</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div>
                            {on && <h1>Grains</h1>}
                            <button onClick={toggle}>Grains</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div>
                            {on && <h1>Dairy</h1>}
                            <button onClick={toggle}>Dairy</button>
                        </div>
                    )}
                </Toggle>
            </div >
        );
    }
}
export default Portion;