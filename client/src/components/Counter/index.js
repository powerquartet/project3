import React from "react";

function Counter(props) {
    // console.log(props)
    return (
        <div>

            {props.portionDailyTarget.map((element, index) => {
                return (
                    <div key={index}>
                        <div key={index}>{element.type} group: {element.portion} in {element.measurement} remaining. </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Counter;