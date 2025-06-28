---
title: Polymorphism in Java - Java OOP Cheatsheet
description: Learn about polymorphism in Java, its types, and how to achieve it in object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Polymorphism in Java
</base-title>

**Polymorphism** is one of the four main principles of Object-Oriented Programming (OOP).  
It means "many forms" and allows objects to be treated as instances of their parent class rather than their actual class.

---

## What is Polymorphism?

- Polymorphism enables a single action to behave differently based on the object performing it.
- It allows you to write flexible and reusable code.
- Example: The same method name `draw()` can be used for different shapes (Circle, Rectangle, etc.), but each shape implements it differently.

---

## Types of Polymorphism in Java

1. **Compile-Time Polymorphism (Static Polymorphism)**
   - Achieved by method overloading.
   - The method to be called is determined at compile time.

2. **Run-Time Polymorphism (Dynamic Polymorphism)**
   - Achieved by method overriding.
   - The method to be called is determined at runtime based on the object's actual type.

---

## Compile-Time Polymorphism (Method Overloading)

- Multiple methods with the same name but different parameter lists in the same class.

```java
class MathUtils {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
}

MathUtils mu = new MathUtils();
mu.add(2, 3);      // Calls int version
mu.add(2.5, 3.5);  // Calls double version
```

---

## Run-Time Polymorphism (Method Overriding)

- Subclass provides a specific implementation of a method already defined in its superclass.

```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

Animal a = new Dog();
a.sound(); // Outputs: Bark (Dog's version)
```

---

## Achieving Polymorphism in Java

- Use inheritance and interfaces.
- Use method overriding for dynamic polymorphism.
- Use method overloading for static polymorphism.

---

## Upcasting and Downcasting

- **Upcasting:** Assigning a subclass object to a superclass reference (allowed implicitly).
- **Downcasting:** Casting a superclass reference back to a subclass (requires explicit cast and is not always safe).

```java
Animal a = new Dog(); // Upcasting
Dog d = (Dog) a;      // Downcasting (must be safe)
```

---

## Polymorphism with Interfaces

- Interfaces allow unrelated classes to be treated the same way.

```java
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() { System.out.println("Drawing Circle"); }
}

class Square implements Drawable {
    public void draw() { System.out.println("Drawing Square"); }
}

Drawable d1 = new Circle();
Drawable d2 = new Square();
d1.draw(); // Drawing Circle
d2.draw(); // Drawing Square
```

---

## Why Use Polymorphism?

- **Flexibility:** Write code that works with superclasses or interfaces, not specific subclasses.
- **Extensibility:** Add new classes with minimal changes to existing code.
- **Maintainability:** Reduces code duplication and increases clarity.

---

## Summary Table

| Concept                | Description                                  | Example                        |
|------------------------|----------------------------------------------|--------------------------------|
| Polymorphism           | Many forms, same interface                   | `Animal a = new Dog();`        |
| Method Overloading     | Same method name, different parameters       | `add(int, int)`, `add(double, double)` |
| Method Overriding      | Subclass redefines superclass method         | `@Override void sound()`       |
| Upcasting              | Subclass to superclass reference             | `Animal a = new Dog();`        |
| Downcasting            | Superclass to subclass reference             | `Dog d = (Dog) a;`             |

---

**Tip:**  
Polymorphism is key for writing flexible and reusable Java code. Always program to an interface or superclass when possible.

**References:**  
- [Official Java Polymorphism Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html)
- [Java Language Specification: Polymorphism](https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.12)