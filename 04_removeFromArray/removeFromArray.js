// const removeFromArray = function(arr, remove1, remove2) {
//     const arrRemoved = [];

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] != remove1) {
//             arrRemoved.push(arr[i]);
//         }
//     }
//     return arrRemoved;
// };

const removeFromArray = function(array, ...argus) {
    const arrRemoved = [];

    array.forEach((item) => {
        if (!argus.includes(item)) {
            arrRemoved.push(item);
        }
    });
    return arrRemoved;
};



console.log(removeFromArray([1,2,3], 3,2));

// Do not edit below this line
module.exports = removeFromArray;
