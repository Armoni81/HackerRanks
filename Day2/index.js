// There is a colection of query strings in an array. Count hwo many times eaach query strign occurs in the string array 
        //Example
            //query arr  ['ab','abc','cd']
            //string arr ['cd','c','ab']

                //result [1,0,1]

                const findQueries = (strings, queries) => {
                    let arr = [];
                
                    for (let i = 0; i < queries.length; i++) {
                        let count = 0; // Reset count for each query
                
                        for (let j = 0; j < strings.length; j++) {
                            if (queries[i] === strings[j]) {
                                count++;
                            }
                        }
                
                        arr.push(count); // Store count after checking all strings
                    }
                
                    return arr;
                };
                
                // Example
                // const strings = ['cd', 'cd', 'ab'];
                // const queries = ['ab', 'abc', 'cd'];
                // console.log(findQueries(strings, queries)); // Output: [1, 0, 1]
                


                //queries              //string        
console.log(findQueries(['ab','abc','bc'],['abc','ab','ab']))

//let each element in queries go throgh  each element in strings