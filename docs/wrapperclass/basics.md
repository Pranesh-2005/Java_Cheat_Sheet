---
title: Wrapper Classes in Java - Java Cheatsheet
description: Learn about wrapper classes, their types, methods, and usage in Java with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Wrapper Classes in Java
</base-title>

**Wrapper classes** in Java provide a way to use primitive data types (`int`, `char`, `boolean`, etc.) as objects.  
They are part of `java.lang` package and are essential for working with collections, generics, and utility methods that require objects.

---

## Why Use Wrapper Classes?

- Collections (like `ArrayList`) can only store objects, not primitives.
- Useful for converting between primitives and objects (autoboxing/unboxing).
- Provide utility methods for parsing, converting, comparing, etc.

---

## Types of Wrapper Classes

| Primitive Type | Wrapper Class   |
|----------------|----------------|
| `byte`         | `Byte`         |
| `short`        | `Short`        |
| `int`          | `Integer`      |
| `long`         | `Long`         |
| `float`        | `Float`        |
| `double`       | `Double`       |
| `char`         | `Character`    |
| `boolean`      | `Boolean`      |

---

## Creating Wrapper Objects

**Using Constructors (deprecated for most types):**

```java
Integer a = new Integer(10); // Not recommended (deprecated)
```

**Using valueOf (recommended):**

```java
Integer a = Integer.valueOf(10);
Double d = Double.valueOf("3.14");
```

**Autoboxing (automatic conversion):**

```java
int x = 5;
Integer obj = x; // Autoboxing
```

**Unboxing (object to primitive):**

```java
Integer obj = 10;
int y = obj; // Unboxing
```

---

## Common Methods

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `parseInt(String s)`          | Converts string to int                      |
| `parseDouble(String s)`       | Converts string to double                   |
| `toString()`                  | Converts value to string                    |
| `compareTo(Wrapper obj)`      | Compares two wrapper objects                |
| `equals(Object obj)`          | Checks equality                             |
| `valueOf(String s)`           | Returns wrapper object from string          |
| `xxxValue()` (e.g., `intValue()`) | Returns primitive value                  |

---

## Example: Using Wrapper Classes

```java
// Parsing and converting
int num = Integer.parseInt("123");
double d = Double.parseDouble("3.14");

// Using with collections
List<Integer> numbers = new ArrayList<>();
numbers.add(10); // Autoboxing

// Utility methods
Integer a = 5, b = 10;
System.out.println(a.compareTo(b)); // -1 (a < b)
System.out.println(Integer.max(a, b)); // 10
```

---

## Wrapper Classes and Collections

- Collections like `ArrayList`, `HashSet`, etc., require objects, so wrapper classes are used for primitives.

```java
List<Boolean> flags = new ArrayList<>();
flags.add(Boolean.TRUE);
flags.add(false); // Autoboxing
```

---

## Special Features

- **Constants:** Each wrapper class provides useful constants, e.g., `Integer.MAX_VALUE`, `Double.MIN_VALUE`.
- **Caching:** Values between -128 and 127 are cached for `Integer`, `Short`, `Byte`, `Character`, and `Long` for efficiency.

---

## Best Practices

- Prefer `valueOf()` over constructors for creating wrapper objects.
- Use autoboxing/unboxing for cleaner code, but be aware of performance in tight loops.
- Use wrapper classes for nullability (primitives cannot be null).

---

**Tip:**  
Wrapper classes bridge the gap between primitives and objects, making Java collections and utilities more powerful and flexible.

**References:**  
- [Official Java Wrapper Classes Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/package-summary.html)
- [Java Tutorials: Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)