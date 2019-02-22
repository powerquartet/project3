import React from "react";

function calculateBMICalories(weight, height, age, sex, userAL) {
    let u_weight;
    let u_height;
    let u_age;
    let u_activity;
    let value;
    console.log(`BMICalc - reporting for duty.`);

    switch (sex) {
        // if the user has male inputs
        case "male":
            u_weight = 10 * (weight / 2.205);
            u_height = 6.25 * (height / .394);
            u_age = 5 * age;
            u_activity = parseInt(userAL);

            value = ((u_weight + u_height - u_age) + 5) * u_activity;

            console.log(`male BMICalc - ${value}`);
            break;

        // if the user has female inputs
        case "female":
            u_weight = 10 * (weight / 2.205);
            u_height = 6.25 * (height / .394);
            u_age = 5 * age;
            u_activity = parseInt(userAL);

            value = ((u_weight + u_height - u_age) - 161) * u_activity;

            console.log(`female BMICalc - ${value}`)
            console.log(weight, height, age);
            break;

        default:
            value = NaN;
    }
    return <span style={{ fontSize: value }}>{value}</span>;
}

export default calculateBMICalories;

// calculateBMICalories(300, 72, 30, 'male');
// calculateBMICalories(120, 62, 30, 'female');



// Underweight = < 18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater