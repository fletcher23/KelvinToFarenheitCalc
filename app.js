// This is to set the Kelvin variable
const tempKelvin = 1000
// This helps convert Kelvin to Celsius
const tempCelsius = tempKelvin - 273
// This helps convert Celsius to Farenheit
let tempFarenheit = tempCelsius * (9/5) + 32
// The line below will round down decimals
tempFarenheit = Math.floor(tempFarenheit)
console.log('The temperature is ' + tempFarenheit + ' degrees Farenheit.')
