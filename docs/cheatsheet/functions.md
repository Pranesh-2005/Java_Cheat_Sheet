---
title: Java Functions - Java Cheatsheet
description: A function (method) is a block of organized code that is used to perform a single task.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Functions
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html">Java Methods</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A method in Java is a block of code that performs a specific task, is executed when called, and can return a value. Methods are defined inside classes.
  </base-disclaimer-content>
</base-disclaimer>

A method (function) is a block of organized, reusable code that is used to perform a single, related action. Methods provide better modularity for your application and a high degree of code reusing.

## Method Declaration

A method declaration in Java defines a function inside a class. It includes a return type, method name, parameters (if any), and a method body.

```java
public class Main {
  public static void greet() {
    System.out.println("Hello, world!");
  }

  public static void main(String[] args) {
    greet(); // Calls the method and prints "Hello, world!" to the console
  }
}
```

`greet` is a method that prints "Hello, world!" to the console. You call this method using its name followed by parentheses.

## Method Parameters

In Java, method parameters are the names listed in the method definition. They are used to pass values (arguments) into methods.

```java
public class Main {
  public static int add(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    int sum = add(1, 2); // 1 is the argument for 'a', and 2 is the argument for 'b'
    System.out.println(sum); // prints 3
  }
}
```

`a` and `b` are the parameters of the `add` method. When you call the method, you provide values for `a` and `b`.

You must provide the correct number and type of arguments when calling a method.

## Method Return

In Java, the `return` statement ends method execution and specifies a value to be returned to the method caller.

```java
public class Main {
  public static int add(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    int sum = add(1, 2); // sum is now 3
    System.out.println(sum);
  }
}
```

If a method does not have a `return` statement, or its return type is `void`, it does not return a value.

<base-disclaimer>
  <base-disclaimer-title>
    Methods without a return value
  </base-disclaimer-title>
  <base-disclaimer-content>
    If a method's return type is `void`, it does not return any value. You simply use `return;` to exit the method early if needed.
  </base-disclaimer-content>
</base-disclaimer>

## Method Overloading

Java allows you to define multiple methods with the same name but different parameter lists. This is called method overloading.

```java
public class Main {
  public static int add(int a, int b) {
    return a + b;
  }

  public static double add(double a, double b) {
    return a + b;
  }

  public static void main(String[] args) {
    System.out.println(add(1, 2));       // prints 3
    System.out.println(add(1.5, 2.5));   // prints 4.0
  }
}
```

## Anonymous Classes and Lambdas

Java supports anonymous classes and lambda expressions (Java 8+) for functional-style programming.

**Anonymous class:**

```java
interface Greetable {
  void greet();
}

public class Main {
  public static void main(String[] args) {
    Greetable greeter = new Greetable() {
      public void greet() {
        System.out.println("Hello, world!");
      }
    };
    greeter.greet();
  }
}
```

**Lambda expression (Java 8+):**

```java
interface Addable {
  int add(int a, int b);
}

public class Main {
  public static void main(String[] args) {
    Addable adder = (a, b) -> a + b;
    System.out.println(adder.add(1, 2)); // prints 3
  }
}
```

Lambdas can only be used with functional interfaces (interfaces with a single abstract method).

## Method vs Lambda

- Methods are defined in classes and can be static or instance methods.
- Lambdas are used for functional interfaces and provide a concise way to implement single-method interfaces.

**Example:**

```java
import java.util.function.Function;

public class Main {
  public static void main(String[] args) {
    Function<Integer, Integer> square = x -> x * x;
    System.out.println(square.apply(5)); // prints 25
  }
}
```

## Constructors

Constructors are special methods used to initialize objects.

```java
public class Person {
  String name;

  public Person(String name) {
    this.name = name;
  }

  public void sayHello() {
    System.out.println("Hello, my name is " + name);
  }

  public static void main(String[] args) {
    Person p = new Person("Alice");
    p.sayHello(); // prints "Hello, my name is Alice"
  }
}
```