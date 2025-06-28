---
title: Java Basics - Java Cheatsheet
description: The basics of Java. We all need to start somewhere, so how about doing it here.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Basics
</base-title>

We all need to start somewhere, so how about doing it here.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://www.oracle.com/java/">Oracle Java Docs</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building cross-platform applications, from web servers and mobile apps to desktop software. Java's simplicity, portability, and robust community support make it a popular choice for developers around the world. Whether you're building large enterprise applications or small utility programs, Java provides a powerful environment for development.
  </base-disclaimer-content>
</base-disclaimer>

## Data Types

These are different data types provided by Java:

| Data Type | Examples                       | Byte Size | Default Value | Range                                                       | Type          |
| --------- | ------------------------------ | --------- | ------------- | ----------------------------------------------------------- | ------------- |
| `byte`    | `127, -128`                    | 1 byte    | `0`           | `-128` to `127`                                             | Primitive     |
| `short`   | `32767, -32768`                | 2 bytes   | `0`           | `-32,768` to `32,767`                                       | Primitive     |
| `int`     | `100, -1, 0, 100000`           | 4 bytes   | `0`           | `-2,147,483,648` to `2,147,483,647`                         | Primitive     |
| `long`    | `100L, 10000000000L`           | 8 bytes   | `0L`          | `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807` | Primitive     |
| `float`   | `3.14f, -1.23f`                | 4 bytes   | `0.0f`        | Approx. `±3.40282347E+38` (6-7 decimal digits)              | Primitive     |
| `double`  | `3.14159, -2.71828`            | 8 bytes   | `0.0d`        | Approx. `±1.7976931348623157E+308` (15-16 decimal digits)   | Primitive     |
| `char`    | `'a', 'b', '1', 'A'`           | 2 bytes   | `\u0000`      | `\u0000` to `\uffff` (0 to 65,535)                          | Primitive     |
| `boolean` | `true, false`                  | 1 byte    | `false`       | `true`, `false`                                             | Primitive     |
| `String`  | `"Hello"`, `"Java"`            | Variable  | `null`        | Unlimited size (length of string)                           | Non-Primitive |
| `Object`  | `new Object()`, `new Person()` | 4 bytes+  | `null`        | Depends on the object size (varies)                         | Non-Primitive |

## Variables

# Variable Declaration in Java

In Java, you can declare variables using different keywords. Here's what you need to know about each:

### 1. `var` (Java 10+)

Java 10 introduced the `var` keyword for local variable type inference. This allows the compiler to infer the type based on the assigned value.

```java
var name = "John"; // Type inferred as String
```
Note: The type of the variable is determined by the assigned value. In this case, the variable name is inferred to be of type String.

### 2. Explicit Type Declarations

In Java, you must explicitly declare the type of a variable, as there is no let keyword like in JavaScript.
```java
int age = 25; // Declares an integer variable
```
Variables in Java are block-scoped, meaning they are only available within the block in which they are declared (for example, within methods or loops).

### 3. final

Java does not have const. Instead, it uses the final keyword to declare constants, which are variables that cannot be reassigned after initialization.
```java
final double pi = 3.14159; // Declares a constant that cannot be reassigned
```
The final keyword ensures that the value of pi cannot be modified after it is initialized.


## Arithmetic Operators

Arithmetic operators are used to perform mathematical operation:
# Arithmetic Operators in Java

| Operator | Description         | Example              | Result     |
| -------- | ------------------- | -------------------- | ---------- |
| `+`      | Addition            | `5 + 2`              | `7`        |
| `-`      | Subtraction         | `5 - 2`              | `3`        |
| `*`      | Multiplication      | `5 * 2`              | `10`       |
| `/`      | Division            | `5 / 2`              | `2` (integer division) |
| `/`      | Division (float)    | `5.0 / 2`            | `2.5`      |
| `%`      | Modulus (Remainder) | `5 % 2`              | `1`        |
| `++`     | Increment           | `int x = 5; x++;`    | `x` is `6` |
| `--`     | Decrement           | `int x = 5; x--;`    | `x` is `4` |


1. **Addition (`+`)**: Adds two numbers.

```java
int result = 5 + 10; // result is 15
```

2. **Subtraction (`-`)**: Subtracts the second number from the first.

```java
int result = 10 - 5; // result is 5
```

3. **Multiplication (`*`)**: Multiplies two numbers.

```java
int result = 5 * 10; // result is 50
```

4. **Division (`/`)**: Divides the first number by the second.

```java
int result = 10 / 5; // result is 2
```

5. **Modulus (`%`)**: Returns the remainder of the division of the first number by the second.

```java
int result = 10 % 3; // result is 1
```

6. **PreIncrement and PostIncrement (`++`)**: Increases a number by 1.

```java
    public class Main {  
    public static void main(String args[]) {  
    int x=10;    
    System.out.println(x++);   //10 (11)    
    System.out.println(++x);   //12    
    }  
    }
    Output
    10
    12
```

7. **PreDecrement and PostDecrement (`--`)**: Decreases a number by 1.

```java
    public class Main {  
    public static void main(String args[]) {  
    System.out.println(x--);    //10  
    System.out.println(--x);   //8  
    }  
    }
    Output
    10
    8  
```

These operators can be used with numbers, variables, or expressions.

## Assignment Operators

Assignment operators are used to assign values to variables:

| Operator | Description               | Example               | Result      |
| -------- | ------------------------- | --------------------- | ----------- |
| `=`      | Assignment                | `int x = 10;`         | `x` is `10` |
| `+=`     | Addition assignment       | `int x = 5; x += 10;` | `x` is `15` |
| `-=`     | Subtraction assignment    | `int x = 10; x -= 5;` | `x` is `5`  |
| `*=`     | Multiplication assignment | `int x = 5; x *= 10;` | `x` is `50` |
| `/=`     | Division assignment       | `int x = 10; x /= 5;` | `x` is `2`  |
| `%=`     | Modulus assignment        | `int x = 10; x %= 3;` | `x` is `1`  |
1. **Assignment (`=`)**: Assigns the value on the right to the variable on the left.

```java
int x = 10; // x is now 10
```

2. **Addition assignment (`+=`)**: Adds the value on the right to the variable on the left and assigns the result to the variable on the left.

```java
int x = 5;
x += 10; // x is now 15
```

3. **Subtraction assignment (`-=`)**: Subtracts the value on the right from the variable on the left and assigns the result to the variable on the left.

```java
int x = 10;
x -= 5; // x is now 5
```

4. **Multiplication assignment (`*=`)**: Multiplies the variable on the left by the value on the right and assigns the result to the variable on the left.

```java
int x = 5;
x *= 10; // x is now 50
```

5. **Division assignment (`/=`)**: Divides the variable on the left by the value on the right and assigns the result to the variable on the left.

```java
int x = 10;
x /= 5; // x is now 2
```

6. **Modulus assignment (`%=`)**: Divides the variable on the left by the value on the right and assigns the remainder to the variable on the left.

```java
int x = 10;
x %= 3; // x is now 1
```

These operators provide a shorthand way to update the value of a variable in relation to its current value.

## Comparison Operators

Comparison operators are used to compare two values:

| Operator | Description              | Example     | Result |
| -------- | ------------------------ | ----------- | ------ |
| `==`     | Equal to                 | `5 == 5`    | `true` |
| `!=`     | Not equal to             | `5 != 4`    | `true` |
| `>`      | Greater than             | `10 > 5`    | `true` |
| `<`      | Less than                | `5 < 10`    | `true` |
| `>=`     | Greater than or equal to | `10 >= 10`  | `true` |
| `<=`     | Less than or equal to    | `5 <= 5`    | `true` |

1. **Equal to (`==`)**: Returns true if the operands are equal.

```java
5 == 5
```

2. **Not equal to (`!=`)**: Returns true if the operands are not equal.

```javascript
5 != 4; // true
```

3. **Greater than (`>`)**: Returns true if the left operand is greater than the right operand.

```javascript
10 > 5; // true
```

4. **Less than (`<`)**: Returns true if the left operand is less than the right operand.

```javascript
5 < 10; // true
```

5. **Greater than or equal to (`>=`)**: Returns true if the left operand is greater than or equal to the right operand.

```java
10 >= 10; // true
```

6. **Less than or equal to (`<=`)**: Returns true if the left operand is less than or equal to the right operand.

```java
5 <= 5; // true
```

These operators are often used in conditional statements to perform different actions based on different conditions.

## Logical Operators

Logical operators are used to determine the logic between variables or values:

| Operator | Description | Example           | Result  |
| -------- | ----------- | ----------------- | ------- |
| `&&`     | Logical AND | `true && true`    | `true`  |
| `\|\|`   | Logical OR  | `true \|\| false` | `true`  |
| `!`      | Logical NOT | `!true`           | `false` |

1. **Logical AND (`&&`)**: Returns true if both operands are true.

```java
true && true; // true
true && false; // false
```

2. **Logical OR (`||`)**: Returns true if at least one of the operands is true.

```java
true || false; // true
false || false; // false
```

3. **Logical NOT (`!`)**: Returns true if the operand is false, and false if the operand is true. It basically reverses the boolean value of the operand.

```java
!true; // false
!false; // true
```

These operators are often used in conditional statements to combine or invert boolean conditions. For example, you might use the logical AND operator (`&&`) to check that two conditions are both true before running a piece of code.

## Bitwise Operators

Bitwise operators operate on 32-bit binary representations of numbers:

| Operator | Description                  | Example   | Result |
| -------- | ---------------------------- | --------- | ------ |
| `&`      | Bitwise AND                  | `5 & 1`   | `1`    |
| `|"      | Bitwise OR                   | `5 | 1`   | `5`    |
| `^`      | Bitwise XOR                  | `5 ^ 1`   | `4`    |
| `~`      | Bitwise NOT                  | `~5`      | `-6`   |
| `<<`     | Left shift                   | `5 << 1`  | `10`   |
| `>>`     | Sign-propagating right shift | `5 >> 1`  | `2`    |
| `>>>`    | Zero-fill right shift        | `5 >>> 1` | `2`    |

1. **Bitwise AND (`&`)**: Returns a one in each bit position where operands have ones.

```java
5 & 1; // 1 (0101 & 0001 => 0001)
```

2. **Bitwise OR (`|`)**: Returns a one in each bit position where at least one operand has a one.

```java
5 | 1; // 5 (0101 | 0001 => 0101)
```

3. **Bitwise XOR (`^`)**: Returns a one in each bit position where exactly one operand has a one.

```java
5 ^ 1; // 4 (0101 ^ 0001 => 0100)
```

4. **Bitwise NOT (`~`)**: Inverts the bits of its operand.

```java
~5; // -6 (~0101 => 1010)
```

5. **Left shift (`<<`)**: Shifts the bits of the first operand to the left by the number of places specified in the second operand. New bits get filled with zeros.

```java
5 << 1; // 10 (0101 << 1 => 1010)
```

6. **Sign-propagating right shift (`>>`)**: Shifts the bits of the first operand to the right by the number of places specified in the second operand. The sign bit is used to fill the new bits.

```java
5 >> 1; // 2 (0101 >> 1 => 0010)
```

7. **Zero-fill right shift (`>>>`)**: Shifts the bits of the first operand to the right by the number of places specified in the second operand. New bits get filled with zeros.

```java
5 >>> 1; // 2 (0101 >>> 1 => 0010)
```

These operators are less commonly used than the arithmetic, assignment, comparison, and logical operators, but they can be useful in certain scenarios, particularly in low-level programming tasks.

## Comments

To write comments in your code to explain what it does, leave notes for yourself or others, or to prevent execution of code:

### Single-line comments

These are created using two forward slashes `//`. Everything to the right of `//` on the same line is a comment.

```java
// This is a single-line comment
```

### Multi-line comments

These are created using `/*` to start the comment, and `*/` to end the comment. Everything between `/*` and `*/`, including multiple lines, is a comment.

```java
/*
This is a multi-line comment
It can span multiple lines
*/
```

<base-warning>
  <base-warning-title>
    Comments and the Interpreter
  </base-warning-title>
  <base-warning-content>
    Comments are ignored by the Java interpreter and do not affect the execution of the code. They are purely for humans to read.
  </base-warning-content>
</base-warning>

## The System.out.print Function

The `System.out.print()` function is used to print output to the console. This can be very useful for debugging, as it allows you to output the values of variables at different points in your code, or to output messages that help you understand the flow of execution in your code.

```java
System.out.println("Hello, World!");  // prints "Hello, World!" to the console
```

You can print the value of variables:

```java
public class Main{
  public static void main(String[] args){
    int a = 64;
    System.out.print(a) 
  }
} // prints the value of a (64) to the console
```

You can also print multiple values at once by separating them with commas:

```java
public class Main{
  public static void main(String[] args){
    int a = 52;
    int b = 64;
    System.out.print(a+" "+b);
  }
} // prints "52 64" to the console
```

<base-warning>
  <base-warning-title>
    System.out.println and the Interpreter
  </base-warning-title>
  <base-warning-content>
    Note that `System.out.println()` does not affect the execution of your code. It's purely for outputting information to the console.
  </base-warning-content>
</base-warning>