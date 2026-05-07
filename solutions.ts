//Problem 1
//  Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

// // Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// // Sample Output:
// [2, 4, 6]
  type NumberOfArray=number[]
 const filterEvenNumbers=(array:NumberOfArray):NumberOfArray=>{
        const newArray:NumberOfArray=[];
        for(let i=1; i<array.length;i++){
             if(array[i]%2===0){
                   newArray.push(array[i])
             }
        }
          return newArray
        
 }
 console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));