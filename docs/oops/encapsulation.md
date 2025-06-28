---
title: Encapsulation in Java - Java OOP Cheatsheet
description: Learn about encapsulation in Java, its types, and how to achieve it in object-oriented programming.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Encapsulation in Java
</base-title>

**Encapsulation** is one of the four main principles of Object-Oriented Programming (OOP).  
It means bundling data (fields) and methods (functions) that operate on the data into a single unit (class), and restricting direct access to some of the object's components.

---

## What is Encapsulation?

- Encapsulation hides the internal state of an object and only allows access through public methods.
- It protects the integrity of the data by preventing outside code from directly changing fields.
- Example: You interact with a bank account through deposit/withdraw methods, not by directly changing the balance.

---

## Benefits of Encapsulation

- **Control:** You control how important variables are accessed and modified.
- **Flexibility:** You can change the internal implementation without affecting external code.
- **Security:** Sensitive data is hidden from outside interference and misuse.
- **Maintainability:** Code is easier to maintain and debug.

---

## How to Achieve Encapsulation in Java

1. **Make fields (variables) private.**
2. **Provide public getter and setter methods to access and update the fields.**

**Example:**

```java
public class Account {
    // Private field
    private double balance;

    // Public getter
    public double getBalance() {
        return balance;
    }

    // Public setter
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}
```

**Usage:**

```java
Account acc = new Account();
acc.deposit(1000);
acc.withdraw(500);
System.out.println(acc.getBalance()); // Outputs: 500.0
```

---

## Types of Encapsulation

- **Data Encapsulation:** Hiding data fields and providing access through methods.
- **Method Encapsulation:** Restricting access to helper methods using access modifiers (`private`, `protected`).

---

## Access Modifiers in Java

| Modifier   | Class | Package | Subclass | World  |
|------------|:-----:|:-------:|:--------:|:------:|
| `private`  |  ✔️   |         |          |        |
| *default*  |  ✔️   |   ✔️    |          |        |
| `protected`|  ✔️   |   ✔️    |    ✔️    |        |
| `public`   |  ✔️   |   ✔️    |    ✔️    |   ✔️   |

- Use `private` for fields to hide them.
- Use `public` for methods that should be accessible from outside.

---

## Encapsulation vs. Data Hiding

- **Encapsulation** is the mechanism; **data hiding** is the result.
- Encapsulation uses access modifiers to achieve data hiding.

---

## Best Practices

- Always keep fields private.
- Use getters and setters to access and update fields.
- Validate data in setters to ensure object integrity.

---

## Real-World Example

**Car Encapsulation:**

```java
public class Car {
    private int speed;

    public int getSpeed() { return speed; }

    public void accelerate(int increment) {
        if (increment > 0) speed += increment;
    }
}
```

---

**Tip:**  
Encapsulation is fundamental for robust, maintainable, and secure Java code. Always encapsulate your class fields!

**References:**  
- [Official Java Encapsulation Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/encaps.html)
- [Java Language Specification: Classes](https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html)