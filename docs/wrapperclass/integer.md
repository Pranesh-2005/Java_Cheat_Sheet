---  
title: Integer Wrapper Class in Java - Java Cheatsheet  
description: Learn about the Integer wrapper class, its methods, features, and usage in Java with practical examples.  
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Integer Wrapper Class in Java
</base-title>

The **Integer** class in Java is a wrapper for the primitive type `int`.  
It is part of the `java.lang` package and provides methods to convert, compare, and manipulate integer values as objects.

---

## Why Use Integer Wrapper Class?

- Allows `int` values to be used as objects (required for collections, generics, etc.).
- Provides utility methods for parsing, converting, comparing, and working with integers.
- Supports autoboxing and unboxing (automatic conversion between `int` and `Integer`).

---

## Creating Integer Objects

**Autoboxing (recommended):**

```java
Integer a = 10; // int to Integer automatically
```

**Using valueOf (recommended):**

```java
Integer b = Integer.valueOf(20);
```

**Parsing from String:**

```java
Integer c = Integer.parseInt("123"); // returns int
Integer d = Integer.valueOf("123");  // returns Integer
```

---

## Common Methods in Integer Class

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `parseInt(String s)`          | Converts string to int                      |
| `valueOf(String s)`           | Converts string to Integer                  |
| `toString()`                  | Converts Integer to String                  |
| `compareTo(Integer another)`  | Compares two Integer objects                |
| `equals(Object obj)`          | Checks equality                             |
| `intValue()`                  | Returns int value                           |
| `byteValue()`, `doubleValue()`| Returns value as other primitive types      |
| `compare(int x, int y)`       | Compares two int values                     |
| `sum(int a, int b)`           | Returns sum of two ints                     |
| `max(int a, int b)`           | Returns larger of two ints                  |
| `min(int a, int b)`           | Returns smaller of two ints                 |
| `Integer.toBinaryString(int)` | Returns binary string of int                |
| `Integer.toHexString(int)`    | Returns hex string of int                   |
| `Integer.reverse(int)`        | Reverses bits of int                        |

---

## Constants in Integer Class

- `Integer.MAX_VALUE` (2,147,483,647)
- `Integer.MIN_VALUE` (-2,147,483,648)
- `Integer.SIZE` (number of bits, 32)
- `Integer.BYTES` (number of bytes, 4)
- `Integer.TYPE` (class instance for int)

---

## Example Usage

```java
// Parsing and converting
int num = Integer.parseInt("42");
Integer obj = Integer.valueOf(num);
String str = obj.toString();

// Comparing
Integer a = 100, b = 200;
System.out.println(a.compareTo(b)); // -1

// Utility methods
System.out.println(Integer.max(a, b)); // 200
System.out.println(Integer.toBinaryString(10)); // 1010

// Using with collections
List<Integer> numbers = new ArrayList<>();
numbers.add(1); // Autoboxing
numbers.add(2);
```

---

## Autoboxing and Unboxing

```java
int x = 5;
Integer y = x; // Autoboxing
int z = y;     // Unboxing
```

---

## Best Practices

- Use `Integer.valueOf()` for conversions (caching for small values).
- Use autoboxing for cleaner code, but be aware of performance in tight loops.
- Use `Integer` for nullability (primitives cannot be null).

---

## Related Wrapper Classes for Integer Types

Java provides several wrapper classes for different integer types, each with its own range and use case:

| Primitive Type | Wrapper Class | Min Value                | Max Value                | Bytes | Use Case Example |
|----------------|--------------|--------------------------|--------------------------|-------|------------------|
| `byte`         | `Byte`       | -128                     | 127                      | 1     | Small data, streams |
| `short`        | `Short`      | -32,768                  | 32,767                   | 2     | Memory-efficient numbers |
| `int`          | `Integer`    | -2,147,483,648           | 2,147,483,647            | 4     | Default integer type |
| `long`         | `Long`       | -9,223,372,036,854,775,808| 9,223,372,036,854,775,807| 8     | Large integer values |
| `BigInteger`   | `BigInteger` | Practically unlimited    | Practically unlimited    | -     | Arbitrary-precision integers |

---

### Byte Wrapper Class

```java
Byte b = Byte.valueOf("100");
System.out.println(Byte.MAX_VALUE); // 127
```

### Short Wrapper Class

```java
Short s = Short.valueOf("32000");
System.out.println(Short.MIN_VALUE); // -32768
```

### Long Wrapper Class

```java
Long l = Long.valueOf("1234567890123");
System.out.println(Long.BYTES); // 8
```

### BigInteger Class

- For numbers larger than `Long` can hold.
- Part of `java.math` package.

```java
import java.math.BigInteger;

BigInteger big = new BigInteger("123456789012345678901234567890");
BigInteger result = big.add(BigInteger.valueOf(100));
System.out.println(result);
```

---

## When to Use Which Wrapper?

- Use `Byte` and `Short` for memory efficiency (rare in modern Java).
- Use `Integer` for most integer operations.
- Use `Long` for very large numbers.
- Use `BigInteger` for numbers beyond the range of `Long` (e.g., cryptography, scientific calculations).

---

**Tip:**  
Choose the wrapper class that matches your data's size and requirements. For most applications, `Integer` and `Long` are sufficient, but `BigInteger` is essential for very large numbers.

**References:**  
- [Official Java Integer Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)
- [Java Tutorials: Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)
- [Official Java Byte Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Byte.html)
- [Official Java Short Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Short.html)
- [Official Java Long Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html)
- [Official Java BigInteger Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html)