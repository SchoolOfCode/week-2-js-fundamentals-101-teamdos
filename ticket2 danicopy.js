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

//Create a function toggleTemperatureDisplay 
//that returns either Celsius or Fahrenheit depending on which was the last returned
// (if the last value returned was Fahrenheit, then you’ll want to return Celsius 
//and vice versa). Start with a default of the last returned format being Celsius.

let lastReturned = isCelsius; 
function toggleTemperatureDisplay(temp) {
  if (lastReturned === true) { 
    return displayTemperatureInFahrenheit(temp); 
  } else {
    return displayTemperatureInCelsius(temp); 
  }
}










// 1. func toggleTempDisplay
// 2. parameter will be a number (assuming for now it is in C)
// 3. if the temp is in celsius, return function displayTempInFahrenheit 
// 4. else, return displayTempInCelsius


//let inputTemp = 40°C
//let isCelsius = false

//function toggleTemperatureDisplay (inputTemp){

 //   if (isCelsius === true){
        // current calculation for inputTemp = celsius
   //     isCelsius = false
   //     return ( inputTemp * 9/5 ) + 32  + "°F"
   // } else {
  //      // else return calculation for inputTemp = fahrenheit
  //      return (inputTemp - 32) * 5/9 + "°C";
    
//console.log(isCelsius)
//console.log(toggleTemperatureDisplay(inputTemp))
let isCelsius = inputTemp === "°C"
let inputTemp = 40°C

function toggleTemperatureDisplay(inputTemp) {
    for (let isCelsius = inputTemp === "°C") {
        if (isCelsius === true) {
            return displayTemperatureInFahrenheit;
        } else {
            return displayTemperatureInCelsius; 
        }
      }
    }

    console.log(toggleTemperatureDisplay(40°C))