import React from "react";

function calculateBMI(weight, height) {
    let BMI;
    BMI = 703 * (weight / (Math.pow(height, 2))
        // console.log(`calculateBMI = ${BMI}`)
    );
    return <span style={{ fontSize: BMI }}>{BMI}</span>;
}

export default calculateBMI;