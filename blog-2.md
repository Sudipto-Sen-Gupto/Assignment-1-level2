# Title
How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

---

## Introduction
OOP stands for Object-Oriented Programming. It is a programming style  where we structure code using objects instead of just functions and logic.
 
An object contains properties and method. Function use as method under object.

---

## Main Content

There are four pillar of Object Oriented Programming 
1.Inheritance
2.Polymorphism
3.Abstract
4.Encapsulation

---

## Inheritance: It is kind of get wealth from parents thats mean one class can take value from another or parents class.

```ts
class Parents{
       
         wealth:string
         gold:string  

         constructor(wealth:string,gold:string){
              this.wealth=wealth;
              this.gold=gold
         }
  }

  class Son extends Parents{
        bike:string
        constructor(wealth:string,gold:string,bike:string){
             super(wealth,gold)
             this.bike=bike
        }
  }
```
  ## Polymorphism

Polymorphism is like a chameleon. It means we can use one method in different classes with different behaviors.

In simple words, the same method name can work differently depending on the object.

---

## Example in TypeScript

```ts
class Animal {
  eat() {
    console.log('normal animal eats grass');
  }
}

class Cat extends Animal {
  eat() {
    console.log('Cat eats fish');
  }
}

class Dog extends Animal {
  eat() {
    console.log('dog eats bone');
  }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
cat.eat();
```



## Abstraction

Abstraction is the process of hiding complex internal logic and exposing only necessary functionality to the user.

```ts
abstract class MusicPlayer {
  abstract play(): void;
  abstract pause(): void;
}

class MyPlayer extends MusicPlayer {
  play() {
    console.log('music is playing...');
  }

  pause() {
    console.log('Music is paused...');
  }
}

const mymusic = new MyPlayer();
mymusic.play();

```
## Encapsulation

Encapsulation is the process of binding data and methods together and protecting the data from direct outside access.

```ts
class BankAccount {
  private balance: number = 1000;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(500);
console.log(account.getBalance());
```

## Conclusion

The four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help in managing logic and reducing complexity in large-scale TypeScript projects. They make code more reusable, structured, and maintainable.

* Inheritance reduces duplication
* Polymorphism allows flexible behavior
* Abstraction hides unnecessary details
* Encapsulation protects data from unwanted access
