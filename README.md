# TypeScript Problem Solving – Key Concepts

This file contains important TypeScript concepts used in basic problem solving.

---

## 1. Arrays
- `number[]`, `string[]` define array types
- Used to store multiple values

---

## 2. filter()
- Returns elements that match a condition

```ts
arr.filter(num => num % 2 === 0)



```
## 3. String Reverse
Uses `split → reverse → join`

```ts
str.split('').reverse().join('')

```
## 4. Type Guard

Checks data type using `typeof`.

```ts
if (typeof input === "string")

```
## 5. Array Intersection

Finds common elements between two arrays.

### Simple Way

```ts
arr1.filter(num => arr2.includes(num));