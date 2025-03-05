//Ice Cream Parlor 
// 2 friends go  to the store to with m dollars. THe ice Cream parlor will have an arr of the prices of icecream  
// return which icecrema  theyt can afford if they put thier money together 

//IMY 
// Jack and Chris have $8(m) the prices are [2,4,5,6,7,8]
// this shoudl return 1 and 4 

function icecreamParlor(m, arr) {
    // Write your code here


    if ( m <= 0 ){
        return 'You cannot afford any Ice Cream Today'
    }else if(arr.length ===0){
        return 'Sorry we arent serving Ice cream Today'
    }
    if(m >= arr.reduce((a,b) => a+b,  0)){
        return ' You can have any Ice Cream we have today'
    }
    // need to start with first index and loop to see if i  can find a number eqal  to m 
    for(let i =  0 ;  i< arr.length; i++){
        let diff =  m - arr[i]
        // console.log(diff, 'here')

        if(arr.includes(diff)){
     
            return [diff ,arr[i]]
            console.log(diff, 'diff')
        }
    }
  
}

//Test cases
console.log(icecreamParlor(0, [2,4,5,6,7,9]))
console.log(icecreamParlor(20, []))
console.log(icecreamParlor(35, [2,4,5,6,7,9]))
console.log(icecreamParlor(11, [2,4,5,6,7,9]))
console.log(icecreamParlor(6, [2,4,5,6,7,9]))
console.log(icecreamParlor(-9, [2,4,5,6,7,9]))