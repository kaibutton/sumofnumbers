const numArray: number[] = [1, 2, 3, 4];

function sumFor (numArray: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

function sumWhile (numArray: number[]): number {
  let sum: number = 0;
  let i = 0;
  while (i < numArray.length) {
    sum += numArray[i];
    i++
  }
  return sum;
}

function sumRecursion (numArray: number[]): number {
  let sum: any = 0;
  let numberArray: number[] = numArray;
  if (numArray.length > 1) {
    sum += numberArray.pop();
    sumRecursion(numberArray);
  } 
  else [
    sum += numberArray[0],
  ]
  return sum;
}

function sumTheFunctionalWay (numArray: number[]) :number {
  let sum: number = numArray.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  });
  return sum;
}

console.log(sumFor(numArray));
console.log(sumWhile(numArray));
console.log(sumRecursion(numArray));
console.log(sumTheFunctionalWay(numArray));