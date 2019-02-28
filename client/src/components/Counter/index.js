import React from "react";

function Counter(props) {

    return (
        <div>
            {props.portionDailyTarget.map((element, index) => {
                return (
                    <div>
                        <p className="counter" key={index}>{element.portion}
                        </p>
                        <p className="counter-unit">{element.measurement}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Counter;