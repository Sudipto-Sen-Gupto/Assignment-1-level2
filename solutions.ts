
 const filterEvenNumbers=(array:number[]):number[]=>{
        const newArray:number[]=[];
        for(let i=1; i<array.length;i++){
             if(array[i]%2===0){
                   newArray.push(array[i])
             }
        }
          return newArray
        
 }
 


   const reverseString=(input:string):string=>{
             const reversed=input.split('').reverse().join('');
             return reversed
   }
     

 
type StringOrNumber=string | number;

const checkType=(input:StringOrNumber)=>{
         if(typeof input==='string'){
            return "String"
         }
         else if(typeof input==='number'){
             return "Number"
         }
}

 



const getProperty=<Object,Key extends keyof Object>(object:Object,key:Key):Object[Key]=>{
    return object[key]
}
const detail={
    name:'gaurav',
    age:22
}





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

    
   

class Person{
      name:string;
      age:number;
     
      constructor(name:string,age:number){
            this.name= name;
            this.age= age;
           
      }
}

class Student extends Person{
       grade:string;
       constructor(name:string,age:number,grade:string){
              super(name,age)
              this.grade=grade
       }

      getDetails(){
                return `Name: ${this.name},Age: ${this.age},Grade: ${this.grade}`
       }
}




const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
        
        return arr1.filter(num=>arr2.includes(num))
}




