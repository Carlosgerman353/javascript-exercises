const sumAll = function(num1, num2) {
    let sum = 0;
    const numbersToAdd = []

    for(let i = num1; i <= num2; i++) {
        numbersToAdd.push(i);
    }

    for(j = 0; j < numbersToAdd.length; j++) {
        sum += numbersToAdd[j];
    }

    return sum; 

};

console.log(sumAll(1, 4)); 

// Do not edit below this line
module.exports = sumAll;
