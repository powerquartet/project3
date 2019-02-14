import React, { Component } from "react";
import Toggle from "../../components/Toggle";
import "./style.css";


class Portion extends Component {
    render() {
        return (
            <div className="toggleButtons">

                < Toggle>
                    {({ on, toggle }) => (
                        <div className="card-container">
                            {on && <div className="card">1.5 cups means 1 cup raw, frozen or canned / .5 cups dried</div>}
                            <button onClick={toggle}>Fruits</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div className="card-container">
                            {on && <div className="card">2.5 cups means 1 cup raw, frozen or canned / 2 cups leafy / 1 cup juiced</div>}
                            <button onClick={toggle}>Vegetables</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div className="card-container">
                            {on && <div className="card">5 oz means 1 oz cooked or canned lean meat like poultry or seafood / 1 egg / 1 tbsp peanut butter / 1/4 cup cooked beans or peas / 1/2 oz of nuts or seeds</div>}
                            <button onClick={toggle}>Protein</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div className="card-container">
                            {on && <div className="card">6 oz means 1 slice of bread / 1 oz of ready to eat cereal</div>}
                            <button onClick={toggle}>Grains</button>
                        </div>
                    )}
                </Toggle>

                < Toggle>
                    {({ on, toggle }) => (
                        <div className="card-container">
                            {on && <div className="card">3 cups means 1 cup of milk / 1 cup of yogurt / 1 oz of fat cheese / 1.5 oz of natural cheese / 1 cup of procedded cheese</div>}
                            <button bttn-jelly onClick={toggle}>Dairy</button>
                        </div>
                    )}
                </Toggle>
            </div >
        );
    }
}
export default Portion;