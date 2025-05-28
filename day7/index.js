// given an arr of intergers arr and a number k find the maximum sum of any contiguous sub array of sizr k 

const maxSubArraySum = (arr,target) => {
    //need to loop through the arr to find the largetst max subarry arr sum 
        //VARS 
            //prevSum 
            //currentSum 
        let prevSum = 0
        let currentMaxSum = 0

        //loop through the first 3 nums in arr
            //to get currentSum 
        for(let i = 0; i < target;i++ ){
            currentMaxSum += arr[i]
        }
    //  console.log(currentMaxSum)

        
        //loop again to start my slidind window sum 
       let cacheSum = currentMaxSum
        for(let i = 1; i <=arr.length;i++){
             prevSum =  cacheSum - arr[i - 1] + arr[i + target - 1 ]
            //    console.log(prevSum, 'prev')
        //- 4 + 7 = 10 
        //current max SUm is 10 
            
        // console.log(cacheSum , arr[i - 1] , arr[target])
             
            if(prevSum > currentMaxSum){

                // console.log('in')
                currentMaxSum = prevSum
            }
            cacheSum = prevSum
   
          
        }
        return currentMaxSum
            //get the value of the sliding window 
                //take away leading index from currentSum and add the next index to current sum 
                    //if sliding window > currentSum 
                        // currentMaxSUm = slidingWindow
                        
                
                    //return currentMaxSUm
        //if sliding window


}

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // Expected: 9 → [5,1,3]

// console.log(maxSubArraySum([1, 9, 3, 4, 5, 6], 2)); // Expected: 11 → [5,6]

// console.log(maxSubArraySum([4, 2, 1, 7, 8, 1, 2, 8, 10], 3)); // Expected: 21 → [8,2,11] or [8,10,3]

// console.log(maxSubArraySum([5, 2, -1, 0, 3], 3)); // Expected: 6 → [2,-1,0,3] → best is [5,2,-1]

// console.log(maxSubArraySum([1, 2], 3)); // Expected: null or 0 or error → k > array length

// console.log(maxSubArraySum([], 2)); // Expected: null or 0 → empty array

console.log(maxSubArraySum([1, 2, 3, 4, 5], 1)); // Expected: 5 → just the largest element

// console.log(maxSubArraySum([-2, -3, -1, -4], 2)); // Expected: -3 → best of worst [-2,-1]
