/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputNumber = document.getElementById('input')
let solucion = document.getElementById('solucion')
let solucion2 = document.getElementById('solucion2')
let solucion3 = document.getElementById('solucion3')

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

function meter(){
    let inputValue = inputNumber.value
    let feet = (inputValue * meterToFeet).toFixed(3)
    let meter = (inputValue / meterToFeet).toFixed(3)
    
    solucion.innerHTML = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters` 
    
    let gallon =  (inputValue * literToGallon).toFixed(3)
    let liter = (inputValue / literToGallon).toFixed(3)
    solucion2.innerHTML = `${inputValue} liters = ${gallon} gallons | ${inputValue} gallons = ${liter} liters` 
    
    let pound = (inputValue * kiloToPound).toFixed(3)
    let kilo = (inputValue / kiloToPound).toFixed(3)
    solucion3.innerHTML = `${inputValue} kilo = ${pound} pounds | ${inputValue} pounds = ${kilo} kilos` 
    }


