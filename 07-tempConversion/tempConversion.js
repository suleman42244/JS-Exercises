function convertToCelsius(F){
    return Math.round((F - 32) * (5/9) * 10) / 10;
}
convertToCelsius();

function convertToFahrenheit(C){
    return Math.round(((C * 9) / 5 + 32) * 10) / 10;
}
convertToFahrenheit();

module.exports = {
    convertToCelsius,
    convertToFahrenheit
}