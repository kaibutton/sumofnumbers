"use strict";
const numArray = [1, 2, 3, 4];
function sumFor(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
function sumWhile(numArray) {
    let sum = 0;
    let i = 0;
    while (i < numArray.length) {
        sum += numArray[i];
        i++;
    }
    return sum;
}
function sumRecursion(numArray) {
    let sum = 0;
    let numberArray = numArray;
    if (numArray.length > 1) {
        sum += numberArray.pop();
        sumRecursion(numberArray);
    }
    else
        [
            sum += numberArray[0],
        ];
    return sum;
}
function sumTheFunctionalWay(numArray) {
    let sum = numArray.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    });
    return sum;
}
console.log(sumFor(numArray));
console.log(sumWhile(numArray));
console.log(sumRecursion(numArray));
console.log(sumTheFunctionalWay(numArray));
