// Reverse Words in a string
// IMY Im oging to take s and reverse it. Return the reverse string 

// exmpale  : 'Armoni' ---> 'inomrA' 

var reverseWords = function(s) {
    let rvrStr =  ''
    let trimmedAndNormalized = s.trim().split(/\s+/).join(' ');
    console.log(trimmedAndNormalized, 'here')
    let split= trimmedAndNormalized.split(" ");

 for(let  i =  split.length - 1; i >= 0; i--){
    rvrStr +=  split[i]  + " "
 }

 return rvrStr
};

//test  cases
console.log(reverseWords('Armoni is   cool'))
console.log(reverseWords('car is red'))
console.log(reverseWords('yankees are      bad'))
console.log(reverseWords('PAnthers will win  the     superbowl'))
console.log(reverseWords('Windex  is the  best  '))