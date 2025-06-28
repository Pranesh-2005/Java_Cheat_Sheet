---
title: Java Classes - Java OOP Cheatsheet
description: Learn the basics of classes in Java, the foundation of object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Classes
</base-title>

A **class** in Java is a blueprint for creating objects. It defines the properties (fields) and behaviors (methods) that the objects created from the class will have.

---

## Defining a Class

```java
public class Person {
    // Fields (attributes)
    String name;
    int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}
```

## Creating Objects

Create an object (instance) of a class using the `new` keyword:

```java
Person p = new Person("Alice", 25);
p.sayHello(); // Outputs: Hello, my name is Alice
```

## Fields (Attributes)

Fields store the state of an object:

```java
p.name = "Bob";
p.age = 30;
```

- Fields can have different access modifiers (`public`, `private`, `protected`, or package-private).
- Fields can be instance variables (unique to each object) or static (shared by all objects).

## Methods

Methods define the behavior of a class:

```java
p.sayHello();
```

- Methods can have parameters and return types.
- Methods can be instance methods or static methods.

## Constructors

A constructor initializes new objects:

```java
public Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

- If you don't define a constructor, Java provides a default no-argument constructor.
- Constructors can be overloaded (multiple constructors with different parameters).

## Access Modifiers

- `public`: Accessible from anywhere.
- `private`: Accessible only within the class.
- `protected`: Accessible within the package and subclasses.
- *Default* (no modifier): Accessible within the package.

Example:

```java
public class Example {
    private int secret;
    public int open;
}
```

## The `this` Keyword

`this` refers to the current object:

```java
public void setName(String name) {
    this.name = name;
}
```

## Static Members

- `static` fields and methods belong to the class, not to instances.

```java
public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
}

int sum = MathUtils.add(2, 3); // No object needed
```

## Final Fields

- `final` fields cannot be changed after initialization.

```java
public class Constants {
    public static final double PI = 3.14159;
}
```

## Inner Classes

A class can be defined inside another class:

```java
public class Outer {
    class Inner {
        void display() {
            System.out.println("Inner class");
        }
    }
}
```

- Inner classes can be static or non-static.
- Useful for logically grouping classes or for helper classes.

## Inheritance

A class can inherit from another class using `extends`:

```java
public class Animal {
    void eat() { System.out.println("Eating"); }
}

public class Dog extends Animal {
    void bark() { System.out.println("Barking"); }
}
```

- Java supports single inheritance (a class can only extend one class).
- Use `super` to refer to the superclass.

## Abstract Classes

Abstract classes cannot be instantiated and may have abstract methods:

```java
public abstract class Shape {
    abstract double area();
}
```

## Interfaces

Interfaces define methods that a class must implement:

```java
public interface Drawable {
    void draw();
}

public class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing circle");
    }
}
```

## Encapsulation

Encapsulation means hiding internal details and providing access via methods (getters/setters):

```java
public class Account {
    private double balance;

    public double getBalance() { return balance; }
    public void deposit(double amount) { balance += amount; }
}
```

## Polymorphism

Polymorphism allows objects to be treated as instances of their parent class or interface:

```java
Animal a = new Dog();
a.eat(); // Calls Dog's eat() if overridden
```

## Summary Table

| Concept         | Description                                      | Example                        |
|-----------------|--------------------------------------------------|--------------------------------|
| Class           | Blueprint for objects                            | `class Car { ... }`            |
| Object          | Instance of a class                              | `Car myCar = new Car();`       |
| Field           | Attribute/state                                  | `String color;`                |
| Method          | Behavior/action                                  | `void drive() { ... }`         |
| Constructor     | Initializes objects                              | `Car(String color) { ... }`    |
| Access Modifier | Controls visibility (`public`, `private`, etc.)  | `private int speed;`           |
| Static          | Belongs to class, not object                     | `static int count;`            |
| Final           | Cannot be changed                                | `final int MAX = 10;`          |
| Inheritance     | Extends another class                            | `class Dog extends Animal`     |
| Interface       | Implements contract                              | `class Cat implements Pet`     |
| Abstract        | Cannot instantiate, may have abstract methods    | `abstract class Shape`         |

---

**Tip:**  
Classes are the foundation of OOP in Java. Use them to organize your code, encapsulate data, and define behaviors.

**References:**  
- [Official Java Classes and Objects Documentation](https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html)
- [Java Language Specification: Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)