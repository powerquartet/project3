// import React, { Component } from "react";

// function calculateBMICalories(weight, height, age, sex) {
//     let value;
//     console.log(`BMICalc - reporting for duty. Here is your value: ${value}`);

//     switch (sex) {
//         case "male":
//             m_weight = 10 * (weight / 2.205);
//             m_height = 6.25 * (height / .394);
//             m_age = 5 * age;
//             m_activity = 1.4;

//             value = ((m_weight + m_height - m_age) + 5) * m_activity;

//             console.log(`male BMICalc - ${value}`);

//             break;
//         case "female":
//             f_weight = 10 * (weight / 2.205);
//             f_height = 6.25 * (height / .394);
//             f_age = 5 * age;
//             f_activity = 1.45;

//             value = ((f_weight + f_height - f_age) - 161) * f_activity;


//             console.log(`female BMICalc - ${value}`)
//             console.log(weight, height, age);
//             break;
//         default:
//             value = NaN;
//     }
// };
// export default calculateBMICalories;

// // calculateBMICalories(300, 72, 30, 'male');
// // calculateBMICalories(120, 62, 30, 'female');



// // Underweight = < 18.5
// // Normal weight = 18.5–24.9
// // Overweight = 25–29.9
// // Obesity = BMI of 30 or greater