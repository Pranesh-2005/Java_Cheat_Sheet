---
title: Inheritance in Java - Java OOP Cheatsheet
description: Learn about inheritance in Java, its types, and how to achieve it in object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Inheritance in Java
</base-title>

**Inheritance** is one of the four main principles of Object-Oriented Programming (OOP).  
It allows a new class (child/subclass) to acquire the properties and behaviors (fields and methods) of an existing class (parent/superclass).

---

## What is Inheritance?

- Inheritance enables code reuse and establishes a relationship between classes.
- The subclass inherits accessible fields and methods from the superclass.
- The subclass can add new fields/methods or override inherited ones.

---

## Types of Inheritance in Java

1. **Single Inheritance**  
   - A class inherits from one superclass.
   - Java supports only single inheritance for classes.

   ```java
   class Animal {
       void eat() { System.out.println("Eating"); }
   }

   class Dog extends Animal {
       void bark() { System.out.println("Barking"); }
   }
   ```

2. **Multilevel Inheritance**  
   - A class inherits from a subclass, forming a chain.

   ```java
   class Animal { }
   class Mammal extends Animal { }
   class Dog extends Mammal { }
   ```

3. **Hierarchical Inheritance**  
   - Multiple subclasses inherit from a single superclass.

   ```java
   class Animal { }
   class Dog extends Animal { }
   class Cat extends Animal { }
   ```

> **Note:**  
> Java does **not** support multiple inheritance (a class cannot extend more than one class) to avoid ambiguity.  
> Multiple inheritance is achieved through interfaces.

---

## How to Achieve Inheritance in Java

- Use the `extends` keyword for classes.
- Use the `implements` keyword for interfaces.

**Example:**

```java
class Vehicle {
    void start() { System.out.println("Vehicle started"); }
}

class Car extends Vehicle {
    void honk() { System.out.println("Car horn"); }
}
```

**Usage:**

```java
Car myCar = new Car();
myCar.start(); // Inherited from Vehicle
myCar.honk();  // Defined in Car
```

---

## Method Overriding

- A subclass can provide its own implementation of a method inherited from the superclass.

```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}
```

---

## The `super` Keyword

- Use `super` to refer to the superclass (parent class).
- Access superclass methods/fields or call the superclass constructor.

```java
class Animal {
    void eat() { System.out.println("Animal eats"); }
}

class Dog extends Animal {
    void eat() {
        super.eat(); // Calls Animal's eat()
        System.out.println("Dog eats");
    }
}
```

---

## Inheritance and Constructors

- Constructors are **not** inherited.
- The subclass constructor calls the superclass constructor (explicitly with `super()` or implicitly).

```java
class Animal {
    Animal() { System.out.println("Animal created"); }
}

class Dog extends Animal {
    Dog() { super(); System.out.println("Dog created"); }
}
```

---

## Inheritance with Interfaces

- Java supports multiple inheritance of type via interfaces.

```java
interface Swimmer { void swim(); }
interface Runner { void run(); }

class Athlete implements Swimmer, Runner {
    public void swim() { System.out.println("Swimming"); }
    public void run() { System.out.println("Running"); }
}
```

---

## Best Practices

- Use inheritance for "is-a" relationships (e.g., Dog is an Animal).
- Prefer composition over inheritance for code reuse when appropriate.
- Use `@Override` annotation when overriding methods for clarity and safety.

---

## Summary Table

| Concept         | Description                                 | Example                        |
|-----------------|---------------------------------------------|--------------------------------|
| Superclass      | Parent class                                | `class Animal {}`              |
| Subclass        | Child class                                 | `class Dog extends Animal {}`  |
| Method Override | Redefine inherited method                   | `@Override void sound() {}`    |
| super           | Access parent class methods/fields          | `super.eat();`                 |
| Single Inheritance | One parent class                         | `class B extends A {}`         |
| Multilevel      | Inheritance chain                           | `A -> B -> C`                  |
| Hierarchical    | One parent, many children                   | `A -> B, A -> C`               |
| Interface       | Multiple inheritance of type                | `implements`                   |

---

**Tip:**  
Inheritance promotes code reuse and logical hierarchy. Use it wisely to avoid tight coupling and maintain clean, understandable code.

**References:**  
- [Official Java Inheritance Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)
- [Java Language Specification: Inheritance](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.1.4)