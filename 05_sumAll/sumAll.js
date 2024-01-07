const sumAll = function(num1, num2) {
    let sum = 0;
    const numbersToAdd = []

    if (num1 < num2) {
        for(let i = num1; i <= num2; i++) {
            numbersToAdd.push(i);
        }
    }
    else if (num1 > num2) {
        let newNum1 = num2;
        let newNum2 = num1; 

        for(let i = newNum1; i <= newNum2; i++) {
            numbersToAdd.push(i);
        }
    }

    for(j = 0; j < numbersToAdd.length; j++) {
        sum += numbersToAdd[j];
    }

    return sum; 

};

console.log(sumAll(1, 4)); 
console.log(sumAll(123, 1)); 

// Do not edit below this line
module.exports = sumAll;
