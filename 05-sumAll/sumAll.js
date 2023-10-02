function sumAll(a, b){
   if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
   if(a < 0 || b <0) return 'ERROR';
   if(a > b){
    let temp = a;
    a = b;
    b = temp;
   }
   let sum = 0;
   for(let i = a; i <= b; i++){
    sum += i;
   }
   return sum;
}

sumAll(1, 4);

module.exports = sumAll;