---
title: Abstraction in Java - Java OOP Cheatsheet
description: Learn about abstraction in Java, its types, and how to achieve it in object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Abstraction in Java
</base-title>

**Abstraction** is one of the four main principles of Object-Oriented Programming (OOP).  
It means hiding complex implementation details and showing only the essential features of an object.

---

## What is Abstraction?

- Abstraction lets you focus on what an object does instead of how it does it.
- It simplifies complex systems by modeling classes appropriate to the problem.
- Example: When you drive a car, you use the steering wheel and pedals (interface), but you don't need to know how the engine works (implementation).

---

## Types of Abstraction in Java

1. **Data Abstraction**  
   Hiding the internal state and requiring all interaction to be performed through an object's methods.

2. **Process Abstraction**  
   Hiding the implementation details of operations (methods), exposing only what they do.

---

## How to Achieve Abstraction in Java

Java provides two main ways to achieve abstraction:

### 1. Abstract Classes

- Use the `abstract` keyword to declare a class as abstract.
- Abstract classes can have abstract methods (without a body) and concrete methods (with a body).
- You cannot create objects of an abstract class.

**Example:**

```java
abstract class Animal {
    abstract void makeSound(); // abstract method

    void sleep() { // concrete method
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}
```

**Usage:**

```java
Animal myDog = new Dog();
myDog.makeSound(); // Outputs: Bark
myDog.sleep();     // Outputs: Sleeping...
```

---

### 2. Interfaces

- An interface is a contract that defines what methods a class must implement.
- All methods in an interface are abstract by default (until Java 8, which allows default and static methods).
- A class implements an interface using the `implements` keyword.

**Example:**

```java
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

**Usage:**

```java
Drawable d = new Circle();
d.draw(); // Outputs: Drawing a circle
```

---

## Abstract Class vs Interface

| Feature            | Abstract Class                | Interface                        |
|--------------------|------------------------------|----------------------------------|
| Methods            | Can have abstract & concrete  | All methods abstract (Java 7)    |
| Fields             | Can have fields               | Only static final fields         |
| Multiple Inheritance| Not supported                | Supported (a class can implement multiple interfaces) |
| Constructors       | Can have constructors         | Cannot have constructors         |

---

## When to Use

- Use **abstract classes** when you want to share code among closely related classes.
- Use **interfaces** to define a contract for unrelated classes or to achieve multiple inheritance.

---

## Real-World Example

**Remote Control Abstraction:**

```java
interface RemoteControl {
    void turnOn();
    void turnOff();
}

class TV implements RemoteControl {
    public void turnOn() { System.out.println("TV ON"); }
    public void turnOff() { System.out.println("TV OFF"); }
}
```

---

**Tip:**  
Abstraction helps reduce complexity and isolate impact of changes. Always program to an interface, not an implementation.

**References:**  
- [Official Java Abstraction Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)
- [Java Language Specification: Abstract Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.1.1.1)
- [Java Language Specification: Interfaces](https://docs.oracle.com/javase/specs/jls/se21/html/jls-9.html)