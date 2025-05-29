//given a string find the longest substring without duplicate character 

//constraints 
    // no duplicates 
        //ex : [p,w,w,k,e,w]
                //wke counts as the substring not pwke
        //output: bcdef
//return 
    //length of the subarray
    // need to loop thorugh the arr
        // create all possible substrings 
           //as im looping i can use .icludes to check if the char is alreay in the substring
           
                // if it is i need ot create a new sub string 
                    // and add the previous substring to an object
    
                    //do this until i get to the end of the arr
                        // return the longest sub array 

var longestSubStr = (s) => {
   let obj = {}
   let newArr = []
   let max = 0

   for(let i = 0; i < s.length; i++){

       if(newArr.includes(s[i])){
    
           obj[newArr.length] = newArr
           newArr= []

       }
        
       newArr.push(s[i])
      
       
   }
let parseStr = Object.keys(obj)

parseStr.map(num => {
    if(num > max ){
        max = num
    }

})
    return Number(max)
}
console.log(longestSubStr("abcabcbb"))
//ex : [p,w,w,k,e,w]