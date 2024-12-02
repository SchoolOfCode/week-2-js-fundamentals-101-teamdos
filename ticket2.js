// Develop a JavaScript function displayTemperatureInCelsius -- done
// that takes in a numerical Fahrenheit temperature reading -- done
// and converts it to Celsius

// returning the number representing the Celsius value. 


function displayTemperatureInCelsius(temperatureInFahrenheit){

    // let temperatureInCelsius = (temperatureInFahrenheit - 32) * 5/9;

    return (temperatureInFahrenheit - 32) * 5/9 + "°C";

}
console.log(displayTemperatureInCelsius(50))


// Implement another function displayTemperatureInFahrenheit that performs the inverse operation.

// declare function displayTempInFahrenheit with input parameter in celsius
// convert from celsius to fahrenheit
// return the fahrenheit temp

function displayTemperatureInFahrenheit(tempInCelsius){

    // (0°C × 9/5) + 32 

    // let tempInFahrenheit = ( tempInCelsius * 9/5 ) + 32

    return ( tempInCelsius * 9/5 ) + 32  + "°F"
}

console.log(displayTemperatureInFahrenheit(-6))





let currentTemp = 21
let isCelcius = true

function toggleTempDisplay(currentTemp) {
    if (isCelcius === true) {
        let tempF = (currentTemp * 9/5 ) + 32  + "°F";
        isCelcius = false;
        console.log(tempF)
        console.log(isCelcius)
    }
    
}

console.log(toggleTempDisplay(currentTemp))
console.log(toggleTempDisplay())




// BODY OF THE FUNCTION

//     CONVERT A TEMPERATURE IN Celcius TO Fahrenheit - Done

//     A. function takes in a parameter currentTemp
//     - But how do we know if currentTemp is C or F?
//     - The function can't tell if currentTemp is C or F, but it can test if a variable is True or False
//     - And how do we toggle it between C & F?
//     - How do we link isCelcius to currentTemp?

//     B. The function needs to know if it's C or F so that it can toggle it to the opposite
//     - Take the input parameter currentTemp and change it to C or F within the body of the function, 
//     - depending on whether isCelcius is True of False 
//     - We will create a new variable which is the boolean isCelcius
//     - We will set this to True initially (meaning temperature is in Celcius by default)
//     - If isCelcius is true, we need to convert currentTemp to Fahrenheit

//     CONVERT CURRENT TEMP FROM FAHRENHEIT TO CELSIUS 
//     - Check if isCelcius is true or false
//     - if it is true, set to False
//     - if it is false, then run the calculation to turn from fahrenheit to celcius

// RETURN CALCULATION

//     - Temperature in either Celcius or Fahrenheit
//     - 


// Olie's Test
// 1. Create a new test to see if we can change a global variable from true to false within a function
// 2. Separate from the existing code by creating a new variable(s) and new function
// 3. This function will test if a variable is true or false and then change it to the opposite
// 4. The function will then return the variable to update the global variable to false

// let olieInputTemp = 10
// let olieIsCelsius = true
// console.log("olieIsCelcius is " + olieIsCelsius)

// function olieToggle(olieIsCelsius) {
//     if (olieIsCelsius === true) {
//         return olieIsCelsius = false;
//     }
//     // else {return olieIsCelsius = true}
// }





// console.log("olieIsCelcius is now " + olieToggle(olieIsCelsius))

