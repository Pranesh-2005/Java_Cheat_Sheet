---
title: Java String Formatting - Java Cheatsheet
description: In Java, string formatting is commonly done using concatenation, String.format, and printf-style formatting.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java String Formatting
</base-title>

## String Concatenation

String concatenation is the operation of joining two or more strings together. In Java, you can use the `+` operator or the `concat` method.

### Using the `+` Operator

```java
String str1 = "Hello, ";
String str2 = "World!";
String result = str1 + str2;
System.out.println(result); // Outputs: "Hello, World!"
```

### Using the `concat` Method

```java
String str1 = "Hello, ";
String str2 = "World!";
String result = str1.concat(str2);
System.out.println(result); // Outputs: "Hello, World!"
```

## String Formatting with String.format

Java provides the `String.format` method for formatting strings with placeholders.

```java
String name = "John";
int age = 30;
String greeting = String.format("Hello, my name is %s and I am %d years old.", name, age);
System.out.println(greeting); // Outputs: "Hello, my name is John and I am 30 years old."
```

- `%s` is a placeholder for a string.
- `%d` is a placeholder for an integer.

## String Formatting with printf

You can also use `System.out.printf` to print formatted strings directly:

```java
String name = "John";
int age = 30;
System.out.printf("Hello, my name is %s and I am %d years old.%n", name, age);
// Outputs: Hello, my name is John and I am 30 years old.
```

## Multi-line Strings

In Java 15+, you can use text blocks for multi-line strings:

```java
String text = """
    This is a
    multi-line
    string in Java.
    """;
System.out.println(text);
```

---

**Tip:**  
For most formatting needs, use `String.format` or `printf` for clear and readable code.