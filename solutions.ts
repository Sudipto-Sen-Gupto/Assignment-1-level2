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

 //problem 3
// Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

// // Sample Input 1:
// checkType("Hello");

// // Sample Output 1:
// "String";

// // Sample Input 2:
// checkType(42);

// // Sample Output 2:
// "Number";

type StringOrNumber=string | number;

const checkType=(input:StringOrNumber)=>{
         if(typeof input==='string'){
            return "String"
         }
         else if(typeof input==='number'){
             return "Number"
         }
}

//   console.log(checkType("ff"));

//problem 4
// Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

// // Sample Input:
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");

// // Sample Output:
// "John Doe";

const getProperty=<Object,Key extends keyof Object>(object:Object,key:Key):Object[Key]=>{
    return object[key]
}
// const detail={
//     name:'gaurav',
//     age:22
// }
// console.log(getProperty({name:'gangaram'},'name'));


//problem 5
//  Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

// Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

// // Sample Output:
// {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
//   isRead: true
// }

    interface Book{
              title:string;
              author:string;
              publishedYear:number;
    }

    const toggleReadStatus =<T extends Book>(book:T)=>{
         return {
                 ...book,
                 isRead:true
         }
    }

    // console.log(toggleReadStatus({title:'physics',author:'rajib',publishedYear:2034}));

    //problem 6
//     Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

// // Sample Input:
// const student = new Student("Alice", 20, "A");
// student.getDetails();

// // Sample Output:
// "Name: Alice, Age: 20, Grade: A";

class Person{
      Name:string;
      Age:number;
     
      constructor(Name:string,Age:number){
            this.Name= Name;
            this.Age= Age;
           
      }
}

class Student extends Person{
       Grade:string;
       constructor(Name:string,Age:number,Grade:string){
              super(Name,Age)
              this.Grade=Grade
       }

       getDetails(){
                return `Name: ${this.Name},Age: ${this.Age},Grade: ${this.Grade}`
       }
}

// const student=new Student('Dip',27,'A+');
// console.log(student.getDetails());

//problem 07

// Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

// // Sample Input:
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

// // Sample Output:
// [3, 4, 5]
const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
        
        return arr1.filter(num=>arr2.includes(num))
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));