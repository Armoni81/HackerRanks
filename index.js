
// Given an interger array [nums] , return true if there exists a triple of indeicies. 
// i < j < k 

// if no such indicies exists, return false. 

// for example [ 1, 2, 3, 4, 5]
    // 1 < 2 < 3  so return true 
// for example [ 2,3,1,6,2 ]
    //  return false becasue ther is no 3 num sequence where each num is less than the previous one 


// IMY: given an arr of nums find 3 consecutive nums where each index is lower than the otehr . if no such thing exists return false



            function increasingTriplet(nums) {
              // i need two pointers to keep track of nubers 
              // loop through each number find the smallest num first 
                // if SmallestNum <=  newNum 
                    // smallestNum = new num 
                //else if newNum <= SecondSmallestNum
                    //SecondSmallestNum = newNum 
                // else 
                    // ive found a num bigger than smallestNUm and SecondSmallest num 
                        // return true 


                // return false
                    // i havent found a triplet
              }
              
console.log(increasingTriplet([ 1, 2, 3, 4, 5]))

// if( nums[i] < nums[j]){
//     counter++
// //    if(counter < 2){
//     console.log(counter, 'oppp')
//        i++
// //    }
//     console.log(counter, nums[i], nums[j])
// }
// if( counter === 2){
//     return true
// }