/// GIven an array of strings , group anagrams togehtre. YOu can return the answer in any orfer 
    // 'eat' --> 'ate' ---> 'tea' 

// COnstriants 
    // if input is an empty string return [['']]
    //INput is ['a'] ---> [['a']]


const groupAnagrams = (strs) => {
    //create an obj to hold anagrams
    let obj = {}
    //sort out the arr to make anagrams all the same 
    const sortArr = strs.map((str) => {
        return str.split("").sort().join("")
    })

    // loopthrough strs and put them in the obj 
    for(let i = 0; i < strs.length; i++ ){
        if(!obj[sortArr[i]]){
            obj[sortArr[i]] = [strs[i]]
        }else {
            obj[sortArr[i]].push(strs[i])
        }
    }
        //

return Object.values(obj)
}


let strings = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// 'eat' 
   // store it in an arr 
    // comparsion that says does strs[i].include(arr[0])
        //if yes add strs[i] to arr 
            
