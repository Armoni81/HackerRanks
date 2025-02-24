//Create a funtion that takes in an arr of numbers
// calaculate thte ratiots of pos, neg and the nuber zero

//for example
// [1,5,4,-9,0]
// outout - 3/5- 0.60 (positive)
//      1/5 - .20 (negative)
//      1/5 - .20 (zeros)
const plusMinus = (arr) => {
  //somewhere to store the ratios
  // need to loop over each indx in `arr`
  //to see claculate ratio
  let overZero = 0;
  let atZero = 0;
  let negNums = 0;
  let arrLength = arr.length;

  let ans = arr.map((num) => {
    if (num > 0) {
      //nned to store amount of nums thats greater than zero
      overZero++;
    } else if (num === 0) {
      atZero++;
    } else {
      negNums++;
    }
  });

  return [overZero / arrLength, atZero / arrLength, negNums / arrLength];
};

console.log(plusMinus([1, 5, 3, -9, 0, 0, 0, -1, -1, 0]));
