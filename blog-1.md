# Blog Title
Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

---

## Introduction

"Any" and "Unknown" both are special type of typescript which can accept any kind of data .

Any: If we keep any kind of value in here,typescript will not check
      
      const i:any=10;
         i.toUpperCase() no error will show here
          console.log(i); but program will crash in run time


Unknown:It contains any kind of value but it should be checked before run.

      const x:unknown=12;
      x.toUpperCaase(); // give error in here 
if(typeof x==='string'){
    console.log(x.toUpperCase()); 
}
 else if(typeof x==='number'){
     console.log(x.toString);
 }


---

## Main Content

Type narrowing in TypeScript is the process of taking a value that has a broader or uncertain type and refining it into a more specific type using checks.

We use typeof for type narrowing for primitives type like string number.

We use instanceof for type narrowing for non primitives type like object and array



Unknown the safer choice for handling unpredictable data because unknown is a safer type because typescript forces us to perform type checking before using the value. We cannot directly access properties  on an unknown type without first narrowing its type. So, any provides full freedom but no safety, while unknown provides safety by requiring type checks before use.

---

## Conclusion

In TypeScript, `any` is called a type safety hole because it removes type checking and can lead to runtime errors. On the other hand, `unknown` is safer because it forces type checking before using the value, making the code more reliable and preventing unexpected errors. Type narrowing helps us refine uncertain types into specific types using checks like `typeof` and `instanceof`.