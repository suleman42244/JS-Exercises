function leapYears(year){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else{
        return false;
    }
}

leapYears(2000);

module.exports = leapYears;