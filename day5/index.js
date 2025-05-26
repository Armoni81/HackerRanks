// Minimum size array sub array sum 


// GIven an array of positive nums and a positive target return the minimal length of a subarrray whose sum is greater thewan or equal to target. 
// If there is no such subarray return 0 instead 

// IMY: Take a target num and find the least amount of nums that eqaul the target. If none are found return 0 

// 43 [ 45,2,4,6,77,8,4,2,33,2]

// var minSubArrayLen = (target, nums) => {
//     let iterationCount = 0
//     let count = 0
   
//     for( let i = 0; i <= nums.length; i++ ){
//         count += nums[i]
//         iterationCount++

//         if(count >= target){
//             break;
//         }
     
//      }

//      for (let i = 1; i < nums.length; i++){
//         let newCount = count - nums[i - 1]

//         if(newCount >= target){
//             iterationCount--
//             count = newCount
//         }else{
//             count = newCount + nums[i + iterationCount - 1]
//         }
        
//     }
//     return iterationCount 
       
// }




// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))


//Maximum sum of Sub arrays of Size K 

// GIven an array of positive integers and a number 'k' find the maximum sum of any contigious sub array of size k 

//IMY - Loop through an array and find the max sub array at the size of length k 
    // exampple 
        //[2,3,4,5,6,1]  k = 3   output is 15  [4,5,6]

const maxSubArraySum = (arr , k ) => {
    // VARS
        //   cache --> current max sum 
        //  cache --->  prevSum 
    let currentMaxSum = 0
    let prevSum = 0
    //loop through the array unitl i hit k 
    for(let i = 0;  i <= arr.length ; i++){
        if(i === k ){
            break 
        }
        currentMaxSum += arr[i]

        // console.log(currentMaxSum)
    }

    //currentMAxSum = 8 
    //prevSum = 6
    let windowSum = currentMaxSum
    for(let i = 1 ; i < arr.length; i ++){
        
    
  windowSum = windowSum - arr[i - 1]  + arr[i + k - 1]
      
        if (windowSum > currentMaxSum){
            currentMaxSum = windowSum
        }
       
        
    }

    return currentMaxSum 
        // once i hit k update or dont update current maxsum 



    // returning Max sum (Interger) 
}


console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 2))