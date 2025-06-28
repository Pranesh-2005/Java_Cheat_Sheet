---
title: Java Control Flow - Java Cheatsheet
description: Control flow is the order in which individual statements, instructions or function calls are executed or evaluated. The control flow of a Java program is regulated by conditional statements, loops, and function calls.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Control Flow
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    A program Control Flow
  </base-disclaimer-title>
  <base-disclaimer-content>
  Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated. The control flow of a Java program is regulated by conditional statements, loops, and function calls.
  </base-disclaimer-content>
</base-disclaimer>

## Comparison Operators

In Java, comparison operators are used to compare two values. Here are the main comparison operators:

1. **Equal to (`==`)**: Checks if the values of two operands are equal.

```java
System.out.println(5 == 5); // true
```

2. **Not equal to (`!=`)**: Checks if the values of two operands are not equal.

```java
System.out.println(5 != 4); // true
```

3. **Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), Less than or equal to (`<=`)**: Used to compare the values of two numbers.

```java
System.out.println(5 > 4); // true
System.out.println(5 < 4); // false
System.out.println(5 >= 5); // true
System.out.println(5 <= 4); // false
```

<base-disclaimer>
  <base-disclaimer-title>
    Comparison operators always return a boolean value
  </base-disclaimer-title>
  <base-disclaimer-content>
  Remember, comparison operators always return either `true` or `false`.
  </base-disclaimer-content>
</base-disclaimer>

## Boolean Operators

In Java, Boolean operators are used to create more complex conditional statements using logical concepts. Here are the main Boolean operators:

1. **Logical AND (`&&`)**: Returns `true` if both operands are true.

```java
System.out.println(true && true); // true
System.out.println(true && false); // false
```

2. **Logical OR (`||`)**: Returns `true` if at least one of the operands is true.

```java
System.out.println(true || false); // true
System.out.println(false || false); // false
```

3. **Logical NOT (`!`)**: Returns `true` if the operand is false, and `false` if the operand is true.

```java
System.out.println(!true); // false
System.out.println(!false); // true
```

These operators are often used in combination with comparison operators to create complex logical conditions. For example:

```java
int a = 10;
int b = 20;
if (a > 5 && b > 10) {
  System.out.println("Both conditions are true");
}
```

## if Statements

In Java, `if`, `else if`, and `else` are used to create conditional statements that allow your code to make decisions and take different actions depending on certain conditions. Here's how they work:

### if

Used to specify a block of code to be executed if a specified condition is true.

```java
int a = 10;
if (a > 5) {
  System.out.println("a is greater than 5");
}
```

### else if

Used to specify a new condition to test if the first condition is false.

```java
int a = 5;
if (a > 5) {
  System.out.println("a is greater than 5");
} else if (a == 5) {
  System.out.println("a is equal to 5");
}
```

### else

Used to specify a block of code to be executed if all previous conditions are false.

```java
int a = 4;
if (a > 5) {
  System.out.println("a is greater than 5");
} else if (a == 5) {
  System.out.println("a is equal to 5");
} else {
  System.out.println("a is less than 5");
}
```

## Ternary Operator

The ternary operator in Java is a shortcut for the `if` statement. It takes three operands: a condition, a result for `true`, and a result for `false`.

```java
// condition ? expressionIfTrue : expressionIfFalse
int a = 10;
String result = a > 5 ? "a is greater than 5" : "a is not greater than 5";
System.out.println(result); // prints "a is greater than 5"
```

## Switch Statement

The `switch` statement in Java is used to perform different actions based on different conditions.

```java
String fruit = "apple";
switch (fruit) {
  case "banana":
    System.out.println("I am a banana");
    break;
  case "apple":
    System.out.println("I am an apple");
    break;
  default:
    System.out.println("I am not a banana or an apple");
}
```

## While Loop

The `while` loop in Java is used to repeatedly execute a block of code as long as a specified condition is `true`.

```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

<base-warning>
  <base-warning-title>
    Always ensure the condition becomes false
  </base-warning-title>
  <base-warning-content>
    Be careful when writing `while` loops, because if the condition never becomes `false`, the loop will run indefinitely, which can cause your program to crash.
  </base-warning-content>
</base-warning>

<base-warning>
  <base-warning-title>
    Performance considerations
  </base-warning-title>
  <base-warning-content>
    Keep in mind that looping operations can be resource-intensive, especially with large data sets. Always consider the performance implications of your code when using loops.
  </base-warning-content>
</base-warning>

## Break and Continue Statements

In Java, `break` and `continue` are two control flow statements that you can use in loops.

### Break

The `break` statement is used to exit the current loop prematurely, stopping its execution immediately.

```java
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  System.out.println(i);
}
// This will print the numbers 0 through 4
```

### Continue

The `continue` statement is used to skip the current iteration of the loop and move directly to the next one.

```java
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  System.out.println(i);
}
// This will print the numbers 0 through 4 and 6 through 9
```

<base-warning>
  <base-warning-title>
    Use `break` and `continue` judiciously
  </base-warning-title>
  <base-warning-content>
    Both `break` and `continue` can be very useful for controlling the flow of your loops, but they should be used judiciously, as they can make your code more difficult to read and understand if used excessively.
  </base-warning-content>
</base-warning>

## Do...While Loop

The `do...while` loop is a variant of the `while` loop in Java. This loop will execute the block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```java
int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);
```

<base-disclaimer>
  <base-disclaimer-title>
    Difference between `do...while` and `while`
  </base-disclaimer-title>
  <base-disclaimer-content>
  The key difference between `do...while` and `while` is that `do...while` guarantees the loop will run at least once, because it checks the condition after executing the loop body. In a `while` loop, if the condition is false at the start, the loop body might not run at all.
  </base-disclaimer-content>
</base-disclaimer>

## For Loop

The `for` loop in Java is used to repeatedly execute a block of code a certain number of times.

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

## For loops vs Array methods

Java does not have built-in array methods like `map`, `filter`, or `reduce` as in JavaScript, but you can use loops or Java Streams for similar functionality.

**For Loop:**

```java
int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2;
}
```

**Using Streams (Java 8+):**

```java
int[] arr = {1, 2, 3, 4, 5};
int[] doubled = java.util.Arrays.stream(arr)
  .map(num -> num * 2)
  .toArray();
```