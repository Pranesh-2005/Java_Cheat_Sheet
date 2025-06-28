---
title: Boolean Wrapper Class in Java - Java Cheatsheet
description: Learn about the Boolean wrapper class, its methods, features, and usage in Java with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Boolean Wrapper Class in Java
</base-title>

The **Boolean** class in Java is a wrapper for the primitive type `boolean`.  
It is part of the `java.lang` package and provides methods to convert, compare, and manipulate boolean values as objects.

---

## Why Use the Boolean Wrapper Class?

- Allows `boolean` values to be used as objects (required for collections, generics, etc.).
- Provides utility methods for parsing, converting, and comparing boolean values.
- Supports autoboxing and unboxing (automatic conversion between `boolean` and `Boolean`).

---

## Creating Boolean Objects

**Autoboxing (recommended):**

```java
Boolean flag = true; // boolean to Boolean automatically
```

**Using valueOf (recommended):**

```java
Boolean flag = Boolean.valueOf("true");
Boolean flag2 = Boolean.valueOf(false);
```

**Parsing from String:**

```java
boolean b = Boolean.parseBoolean("true"); // returns primitive boolean
Boolean obj = Boolean.valueOf("false");   // returns Boolean object
```

---

## Common Methods in Boolean Class

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `parseBoolean(String s)`      | Converts string to boolean                  |
| `valueOf(String s)`           | Converts string to Boolean object           |
| `toString()`                  | Converts Boolean to String                  |
| `booleanValue()`              | Returns primitive boolean value             |
| `compareTo(Boolean b)`        | Compares two Boolean objects                |
| `equals(Object obj)`          | Checks equality                             |
| `hashCode()`                  | Returns hash code for Boolean object        |
| `logicalAnd(boolean a, boolean b)` | Logical AND (Java 8+)                |
| `logicalOr(boolean a, boolean b)`  | Logical OR (Java 8+)                 |
| `logicalXor(boolean a, boolean b)` | Logical XOR (Java 8+)                |

---

## Constants in Boolean Class

- `Boolean.TRUE` (Boolean object representing true)
- `Boolean.FALSE` (Boolean object representing false)
- `Boolean.TYPE` (class instance for boolean primitive)

---

## Example Usage

```java
Boolean flag = Boolean.valueOf("true");
System.out.println(flag); // true

boolean b = Boolean.parseBoolean("false");
System.out.println(Boolean.logicalAnd(flag, b)); // false

// Using with collections
List<Boolean> boolList = new ArrayList<>();
boolList.add(Boolean.TRUE);
boolList.add(false); // Autoboxing
```

---

## Special Features

- **Immutability:** Boolean objects are immutable.
- **Caching:** Only two Boolean objects exist: `Boolean.TRUE` and `Boolean.FALSE`.
- **Case Insensitivity:** `parseBoolean` and `valueOf` are case-insensitive for "true"/"false".

---

## When to Use Boolean?

- When you need to store boolean values in collections.
- When you need to convert between strings and boolean values.
- When you need to use utility methods for logical operations.

---

**Tip:**  
Use the `Boolean` class for robust boolean handling, especially when working with collections, parsing, or logical operations.

**References:**  
- [Official Java Boolean Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)
- [Java Tutorials: Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)