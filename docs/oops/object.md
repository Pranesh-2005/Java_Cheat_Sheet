---
title: Java Objects - Java OOP Cheatsheet
description: Learn the basics of objects in Java, the core of object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Objects
</base-title>

An **object** in Java is an instance of a class. Objects represent real-world entities and have state (fields/attributes) and behavior (methods).

---

## What is an Object?

- An object is a runtime entity created from a class.
- It contains fields (data) and methods (functions).
- Objects interact with each other in a Java program.

**Example:**

```java
public class Car {
    String color;
    void drive() {
        System.out.println("Driving...");
    }
}

Car myCar = new Car(); // myCar is an object of type Car
myCar.color = "Red";
myCar.drive(); // Outputs: Driving...
```

---

## Creating Objects

Objects are created using the `new` keyword:

```java
ClassName objectName = new ClassName();
```

**Example:**

```java
Person p = new Person("Alice", 25);
```

---

## Accessing Fields and Methods

Use the dot (`.`) operator to access fields and methods:

```java
p.name = "Bob";
p.sayHello();
```

---

## Object References

- Variables like `p` or `myCar` hold references to objects in memory.
- Multiple references can point to the same object.

```java
Person p1 = new Person("Alice", 25);
Person p2 = p1; // Both refer to the same object
```

---

## Anonymous Objects

Objects can be created and used without assigning them to a variable:

```java
new Person("Charlie", 30).sayHello();
```

---

## Null Reference

- If an object reference does not point to any object, it is `null`.

```java
Person p = null;
if (p == null) {
    System.out.println("No person assigned.");
}
```

---

## Comparing Objects

- Use `==` to check if two references point to the same object.
- Use `.equals()` to compare object contents (override in your class for custom comparison).

```java
Person p1 = new Person("Alice", 25);
Person p2 = new Person("Alice", 25);
System.out.println(p1 == p2); // false (different objects)
System.out.println(p1.equals(p2)); // false unless equals() is overridden
```

---

## The `Object` Class

- Every class in Java implicitly extends `java.lang.Object`.
- Common methods: `toString()`, `equals()`, `hashCode()`, `getClass()`.

```java
System.out.println(p.toString());
System.out.println(p.hashCode());
```

---

## Garbage Collection

- Java automatically deletes objects that are no longer referenced (garbage collection).
- You do not need to manually free memory.

---

## Passing Objects to Methods

Objects can be passed to methods as parameters:

```java
void printPerson(Person p) {
    System.out.println(p.name);
}
```

---

## Returning Objects from Methods

Methods can return objects:

```java
Person createPerson(String name, int age) {
    return new Person(name, age);
}
```

---

## Summary Table

| Concept             | Description                                  | Example                        |
|---------------------|----------------------------------------------|--------------------------------|
| Object              | Instance of a class                          | `Car myCar = new Car();`       |
| Field access        | Access object's data                         | `myCar.color = "Red";`         |
| Method call         | Invoke object's behavior                     | `myCar.drive();`               |
| Reference variable  | Holds address of object                      | `Person p = new Person();`     |
| Anonymous object    | No reference variable                        | `new Car().drive();`           |
| Null reference      | Reference points to nothing                  | `Person p = null;`             |
| Object class        | Root of all classes in Java                  | `p.toString()`                 |

---

**Tip:**  
Objects are the building blocks of Java programs. Use them to model real-world entities and manage your program's data and behavior.

**References:**  
- [Official Java Objects and Classes Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/objects.html)
- [Java Language Specification: Objects](https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html)