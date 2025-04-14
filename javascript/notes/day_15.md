# Day 15: JavaScript Notes

## Primitive Data Types in JavaScript
Primitive data types are immutable and stored directly in memory.

1. **Number** (Integer & Floating-point)
2. **String** (Text enclosed in quotes)
3. **Boolean** (Represents `true` or `false`)
4. **Null** (Represents an empty or non-existent value)
5. **Undefined** (Declared but not assigned a value)
6. **Symbol** (Unique and immutable value)
7. **BigInt** (Handles large numbers beyond `Number.MAX_SAFE_INTEGER`)

### Example:
```javascript
let num = 10;
let text = "Hello";
let isActive = false;
let data = null;
let notDefined;
let sym = Symbol("id");
```

## Reference (Relative) Data Types in JavaScript
Reference data types are stored in memory by reference and can be modified.

1. **Object** (Collection of key-value pairs)
2. **Array** (Ordered list of values)

### Example:
```javascript
let list = [1, 2, 3];
let obj = { key: "value" };
```

## JavaScript Data Types
JavaScript has **8 data types**, categorized into **Primitive** and **Reference** types.

## Some Important Values in JavaScript
1. **undefined** - Variable declared but not assigned a value
2. **null** - Intentional absence of value
3. **NaN** - "Not-a-Number" (Invalid mathematical operations)
4. **Infinity** - Represents an infinite value

## Basic Operators in JavaScript
1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
2. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
3. **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
4. **Logical Operators**: `&&`, `||`, `!`

### Example:
```javascript
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a > b); // true
console.log(a === b); // false
```

## Variable Hoisting in JavaScript
Hoisting moves variable and function declarations to the top of their scope before execution.

- **`var`** is hoisted with an initial value of `undefined`
- **`let` and `const`** are hoisted but remain in the **Temporal Dead Zone** until assigned

## Condition Operators in JavaScript
1. **if-else Statement**
2. **Ternary Operator**

### Example:
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

## Loops in JavaScript
1. **for Loop** - Used when the number of iterations is known beforehand.
2. **while Loop** - Runs as long as a condition is true.
3. **do...while Loop** - Runs the block of code once, then checks the condition.

### Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Assignments
### 1. Age Category Message
```javascript
let age = prompt("Enter your age:");
if (age < 18) console.log("You are a minor.");
else if (age <= 60) console.log("You are an adult.");
else console.log("You are a senior citizen.");
```

### 2. Even or Odd Sum
```javascript
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
console.log((num1 + num2) % 2 === 0 ? "Even Sum" : "Odd Sum");
```

### 3. Traffic Light System
```javascript
let color = prompt("Enter traffic light color:").toLowerCase();
switch (color) {
    case "red": console.log("Stop!"); break;
    case "yellow": console.log("Get Ready!"); break;
    case "green": console.log("Go!"); break;
    default: console.log("Invalid color");
}
```

### 4. Multiplication Table
```javascript
let num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
```

### 5. FizzBuzz
```javascript
let number = Number(prompt("Enter a number:"));
if (number % 3 === 0 && number % 5 === 0) console.log("FizzBuzz");
else if (number % 3 === 0) console.log("Fizz");
else if (number % 5 === 0) console.log("Buzz");
else console.log(number);
```

---
This Markdown document provides structured **JavaScript Notes** with **examples**, making it easy to read and understand. 🚀
