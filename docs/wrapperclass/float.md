---
title: Float and Double Wrapper Classes in Java - Java Cheatsheet
description: Learn about the Float and Double wrapper classes, their methods, features, and usage in Java with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Float and Double Wrapper Classes in Java
</base-title>

The **Float** and **Double** classes in Java are wrapper classes for the primitive types `float` and `double`.  
They are part of the `java.lang` package and provide methods to convert, compare, and manipulate floating-point numbers as objects.

---

## Why Use Float and Double Wrapper Classes?

- Allow floating-point values to be used as objects (required for collections, generics, etc.).
- Provide utility methods for parsing, converting, comparing, and working with floating-point numbers.
- Support autoboxing and unboxing (automatic conversion between primitives and wrapper objects).

---

## Types of Floating-Point Wrapper Classes

| Primitive Type | Wrapper Class | Min Value                | Max Value                | Bytes | Use Case Example         |
|----------------|--------------|--------------------------|--------------------------|-------|--------------------------|
| `float`        | `Float`      | 1.4E-45                  | 3.4028235E38             | 4     | Memory-efficient decimals|
| `double`       | `Double`     | 4.9E-324                 | 1.7976931348623157E308   | 8     | Default floating-point   |

---

## Creating Float and Double Objects

**Autoboxing (recommended):**

```java
Float f = 3.14f; // float to Float automatically
Double d = 2.718; // double to Double automatically
```

**Using valueOf (recommended):**

```java
Float f = Float.valueOf("3.14");
Double d = Double.valueOf(2.718);
```

**Parsing from String:**

```java
float f = Float.parseFloat("3.14");
double d = Double.parseDouble("2.718");
```

---

## Common Methods in Float and Double Classes

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `parseFloat(String s)`        | Converts string to float                    |
| `parseDouble(String s)`       | Converts string to double                   |
| `valueOf(String s)`           | Converts string to wrapper object           |
| `toString()`                  | Converts value to String                    |
| `compareTo(Float/Double obj)` | Compares two wrapper objects                |
| `equals(Object obj)`          | Checks equality                             |
| `floatValue()` / `doubleValue()` | Returns primitive value                  |
| `isNaN()`                     | Checks if value is NaN                      |
| `isInfinite()`                | Checks if value is infinite                 |
| `compare(float a, float b)`   | Compares two float values                   |
| `sum(float a, float b)`       | Returns sum of two floats                   |
| `max(float a, float b)`       | Returns larger of two floats                |
| `min(float a, float b)`       | Returns smaller of two floats               |

---

## Constants in Float and Double Classes

- `Float.MAX_VALUE` (3.4028235E38)
- `Float.MIN_VALUE` (1.4E-45)
- `Float.NaN` (Not-a-Number)
- `Float.POSITIVE_INFINITY`, `Float.NEGATIVE_INFINITY`
- `Float.SIZE` (number of bits, 32)
- `Float.BYTES` (number of bytes, 4)

- `Double.MAX_VALUE` (1.7976931348623157E308)
- `Double.MIN_VALUE` (4.9E-324)
- `Double.NaN` (Not-a-Number)
- `Double.POSITIVE_INFINITY`, `Double.NEGATIVE_INFINITY`
- `Double.SIZE` (number of bits, 64)
- `Double.BYTES` (number of bytes, 8)

---

## Example Usage

```java
// Parsing and converting
float f = Float.parseFloat("2.5");
Double d = Double.valueOf("3.14159");

// Comparing
Float a = 1.5f, b = 2.5f;
System.out.println(a.compareTo(b)); // -1

// Utility methods
System.out.println(Float.max(a, b)); // 2.5
System.out.println(Double.isNaN(0.0 / 0)); // true

// Using with collections
List<Double> numbers = new ArrayList<>();
numbers.add(1.1); // Autoboxing
numbers.add(2.2);
```

---

## Special Features

- **NaN and Infinity:** Both classes can represent Not-a-Number (`NaN`), positive infinity, and negative infinity.
- **Precision:** `float` is single-precision (about 7 decimal digits), `double` is double-precision (about 15 decimal digits).
- **Immutability:** Like all wrapper classes, `Float` and `Double` are immutable.

---

## Best Practices

- Use `Double` for most floating-point calculations (more precise).
- Use `Float` only when memory savings are critical.
- Use `valueOf()` for conversions (caching for some values).
- Be careful with equality checks due to floating-point precision issues.

---

**Tip:**  
Always use `Double` for calculations unless you have a specific reason to use `Float`. For exact decimal calculations (like money), use `BigDecimal` instead.

**References:**  
- [Official Java Float Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)
- [Official Java Double Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)
- [Java Tutorials: Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)
- [Java Tutorials: Numbers and Strings](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)