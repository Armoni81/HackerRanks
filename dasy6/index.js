// Given an array of positive integers arr and an integer target, return the number of contiguous 
//subarrays where the sum of all the elements in the subarray is less than target.

// const lessThanTarget = (arr, target) => {
//     let count = 0;
//     let start = 0;
//     let sum = 0;

//     for (let end = 0; end < arr.length; end++) {
//         sum += arr[end];

//         // shrink the window if sum is too big
//         while (sum >= target && start <= end) {
//             sum -= arr[start];
//             start++;
//         }

//         // all subarrays between start and end are valid
//         count += end - start + 1;
//     }

//     return count;
// };




// console.log(lessThanTarget([1, 2, 3], 5)); // ➞ 4
// // Subarrays: [1], [2], [3], [1, 2]
// console.log(lessThanTarget(([5, 6, 7], 5))) // ➞ 4
// // Subarrays: [2], [1], [1], [2,1], [1,1]
// console.log(lessThanTarget([10, 20, 30], 5))

const hasPairWith = (arr, sum) =>{
    //loop through array and try to find 2 numbers that equal sums
    let left = 0
    let right = arr.length - 1
    let total = 0
   while(left < right ){
    total = arr[left] + arr[right]

    if(total === sum ){
        console.log(arr[left], arr[right])
        return true 
    }else if(total < sum){
        console.log(arr[left], arr[right])
        left++
    }else{
        console.log(arr[left], arr[right])
        right--
    }
   }
   return false
}
// console.log(hasPairWith([1, 2, 3, 4, 6], 6))


// given an arry of intergers [nums] and and interger target, return indeices of thw two numbers such that they add up to target 
    // cnt use the same element twice 
    //answer can be returned in any oreder 

//IMY: loop through the array to find a sum that matches the target 

var twoSum = (arr, target) =>  {
    //nned to loop over the array
        // use two points 
        let pointOne = 0
        let pointTWo = arr.length - 1
        
            //one starting at index zero --- X
            //one starting at arr.length - 1 --- X
        //VARS 
            // something to hold current sum  ---X
        while( pointOne < pointTWo){
          let currentSum = arr[pointOne] + arr[pointTWo]

            // console.log(currentSum)
            
           if(currentSum === target){
            return [pointOne, pointTWo]
           }else if(currentSum < target){
                pointOne+= 1
           }else if ( currentSum > target){
            pointTWo -= 1
           }
        }
        
        return false
}




// console.log(twoSum([2,0,7,15], 9)) // ---> [0,2]
console.log(twoSum([3,2,4], 6))








