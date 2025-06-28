---
title: Java Exception Handling - Java Cheatsheet
description: Exception handling in Java is the process of responding to and managing exceptions that occur during the execution of a program.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Exception Handling
</base-title>

Exception handling in Java is the process of responding to and managing exceptions (unexpected events or errors) that occur during program execution.

<base-disclaimer>
  <base-disclaimer-title>
    Why is Exception Handling Important?
  </base-disclaimer-title>
  <base-disclaimer-content>
    Exception handling helps your program continue to function (or fail gracefully) when unexpected conditions occur, improving reliability and user experience.
  </base-disclaimer-content>
</base-disclaimer>

## Exception Hierarchy

Java exceptions are objects that inherit from the `Throwable` class.  
There are two main branches:

- **Error**: Serious problems that applications should not try to handle (e.g., `OutOfMemoryError`).
- **Exception**: Conditions that applications might want to catch.

```
Throwable
 ├── Error (unchecked, not meant to be caught)
 └── Exception
      ├── RuntimeException (unchecked)
      └── [other checked exceptions]
```

- **Checked Exceptions**: Must be declared or handled (e.g., `IOException`, `SQLException`).
- **Unchecked Exceptions**: Subclasses of `RuntimeException` (e.g., `NullPointerException`, `IndexOutOfBoundsException`). These do not need to be declared or caught.

## Exception vs Error

- **Exception**: Represents conditions a program might want to catch (e.g., invalid input, file not found).
- **Error**: Represents serious problems that are not intended to be caught by applications (e.g., JVM errors, hardware failure).

## Basic Try-Catch

Use `try-catch` to handle exceptions:

```java
try {
    // Code that may throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
```

## Multiple Catch Blocks

You can catch different exceptions separately:

```java
try {
    // Code that may throw exceptions
} catch (IOException e) {
    System.out.println("IO error: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Other error: " + e.getMessage());
}
```

## Finally Block

The `finally` block always runs, whether or not an exception was thrown:

```java
try {
    // Code that may throw an exception
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("This always runs.");
}
```

## Throwing Exceptions

You can throw exceptions using the `throw` keyword:

```java
public int divide(int a, int b) {
    if (b == 0) {
        throw new IllegalArgumentException("Division by zero");
    }
    return a / b;
}
```

## Custom Exceptions

Create your own exception by extending `Exception` or `RuntimeException`:

```java
class DivisionByZeroException extends Exception {
    public DivisionByZeroException(String message) {
        super(message);
    }
}

public int divide(int a, int b) throws DivisionByZeroException {
    if (b == 0) {
        throw new DivisionByZeroException("Division by zero");
    }
    return a / b;
}
```

## Exception Propagation

If a method does not handle an exception, it can declare it with `throws`:

```java
public void readFile(String filename) throws IOException {
    Files.readAllLines(Paths.get(filename));
}
```

## Best Practices

- Catch only exceptions you can handle.
- Use specific exception types in catch blocks.
- Clean up resources in `finally` or use try-with-resources for `AutoCloseable` objects (like files).

## Try-With-Resources (Java 7+)

Automatically closes resources:

```java
import java.nio.file.*;

try (var lines = Files.lines(Paths.get("example.txt"))) {
    lines.forEach(System.out::println);
} catch (IOException e) {
    System.out.println("File error: " + e.getMessage());
}
```

---

**Summary:**  
- Use exceptions for error handling, not errors.
- Always handle or declare checked exceptions.
- Use custom exceptions for specific error cases.
- Clean up resources properly.