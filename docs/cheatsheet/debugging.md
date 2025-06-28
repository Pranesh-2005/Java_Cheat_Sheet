---
title: Java Debugging - Java Cheatsheet
description: Debugging is the process of identifying, isolating, and fixing problems or "bugs" in your Java code.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Debugging
</base-title>

Debugging is the process of finding and fixing errors ("bugs") in your code. Java provides several tools and techniques for debugging.

## Printing Values

The simplest way to debug is to print variable values:

```java
int x = 10;
System.out.println(x); // Outputs: 10
```

You can print multiple values:

```java
int x = 10, y = 20;
System.out.println("x: " + x + ", y: " + y); // Outputs: x: 10, y: 20
```

You can print objects and arrays:

```java
int[] arr = {1, 2, 3, 4, 5};
System.out.println(java.util.Arrays.toString(arr)); // Outputs: [1, 2, 3, 4, 5]
```

## Logging

For more advanced debugging, use Java's logging framework:

```java
import java.util.logging.Logger;

Logger logger = Logger.getLogger("MyLogger");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.severe("This is an error message");
```

## Using a Debugger

Most IDEs (like IntelliJ IDEA, Eclipse, VS Code) have built-in debuggers.  
You can:
- Set breakpoints to pause execution at a specific line.
- Step through code line by line.
- Inspect variable values at runtime.
- Watch expressions and call stacks.

**Tip:**  
Use breakpoints instead of adding many `System.out.println()` statements.

## Stack Traces

When an exception occurs, Java prints a stack trace:

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    e.printStackTrace();
}
```

A stack trace shows the sequence of method calls that led to the error.  
Read from top to bottom to find where the error happened.

## Assertions

Use assertions to check for conditions that should always be true:

```java
assert x > 0 : "x must be positive";
```

Enable assertions with the `-ea` flag when running your program:

```
java -ea MyClass
```

## Unit Testing

Write unit tests to automatically check your code:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MyTests {
    @Test
    void testSum() {
        assertEquals(3, 1 + 2);
    }
}
```

Use JUnit (the most popular Java testing framework) for writing and running tests.

---

**Summary:**  
- Use `System.out.println()` for quick checks.
- Use logging for more control.
- Use your IDE's debugger for step-by-step analysis.
- Read stack traces to find errors.
- Write unit tests to catch bugs