let repeatString = function(string, num){
    if(num < 0){
        return 'ERROR'
    }
    let result = '';
    for(let i = 0; i < num; i++){
        result += string;
    }
    return result
}

const repeatedString = repeatString('hello', 4);
console.log(repeatedString)

module.exports = repeatString;