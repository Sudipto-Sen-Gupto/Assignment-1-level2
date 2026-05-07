//Problem 1
//  Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

// // Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// // Sample Output:
// [2, 4, 6]
 
 const filterEvenNumbers=(array:number[]):number[]=>{
        const newArray:number[]=[];
        for(let i=1; i<array.length;i++){
             if(array[i]%2===0){
                   newArray.push(array[i])
             }
        }
          return newArray
        
 }
//  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//problem 2
// Write a function reverseString that takes a string as input and returns the reversed version of that string.

// // Sample Input:
// reverseString("typescript");

// // Sample Output:
// "tpircsepyt";

   const reverseString=(input:string):string=>{
             const reversed=input.split('').reverse().join('');
             return reversed
   }
    //   console.log(reverseString('typescript'));

