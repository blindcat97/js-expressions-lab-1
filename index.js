//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// 32°F, 25°C, 
// 70°F, 18°C, 
// 80°F, 15°C, 
// 72°F, 28°C, 
// 68°F, 20°C, 
// 75°F, 23°C, 
// 82°F, 30°C, 
// 65°F, 22°C, 
// 77°F, 26°C, 
// 78°F, 24°C, 
// 73°F, 21°C, 
// 79°F, 27°C, 
// 71°F, 19°C, 
// 74°F, 17°C, 
// 76°F, 29°C

const tempListF = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76]
const tempListC = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29]

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius


// Functions to convert between units
function convertCtoF(tempC) {
    return (tempC * 9 / 5) + 32
}
function convertFtoC(tempF) {
    return (tempF - 32) * 5 / 9
}

// Calculate total temperature in Fahrenheit
let totalTempF = 0

for (let i = 0; i < tempListF.length; i++) {
    totalTempF += tempListF[i]
}
for (let i = 0; i < tempListC.length; i++) {
    totalTempF += convertCtoF(tempListC[i])
}

// Calculate total temperature in Celsius
let totalTempC = 0

for (let i = 0; i < tempListF.length; i++) {
    totalTempC += convertFtoC(tempListF[i])
}
for (let i = 0; i < tempListC.length; i++) {
    totalTempC += tempListC[i]
}

const tot_temperature_in_fahrenheit = totalTempF
const tot_temperature_in_celsius = totalTempC



//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

const avg_temperature_in_celsius = tot_temperature_in_celsius / (tempListC.length + tempListF.length)

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / (tempListC.length + tempListF.length)


//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};