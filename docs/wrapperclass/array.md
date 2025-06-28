---
title: Arrays in Java - Java Cheatsheet
description: Learn about arrays in Java, their types, methods, and usage with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Arrays in Java
</base-title>

An **array** in Java is a container object that holds a fixed number of values of a single type.  
Arrays are not wrapper classes, but they are fundamental for storing sequences of primitives or objects.

---

## Why Use Arrays?

- Store multiple values of the same type in a single variable.
- Efficient memory usage and fast access by index.
- Useful for fixed-size collections and performance-critical code.

---

## Types of Arrays

| Type                | Example Declaration           | Description                        |
|---------------------|------------------------------|------------------------------------|
| Single-dimensional  | `int[] arr = new int[5];`    | Linear collection of elements      |
| Multi-dimensional   | `int[][] matrix = new int[3][3];` | Array of arrays (matrix)      |
| Object arrays       | `String[] names = new String[3];` | Array of objects              |

---

## Creating and Initializing Arrays

```java
// Declaration and allocation
int[] numbers = new int[3];

// Initialization
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

// Declaration with initialization
String[] fruits = {"Apple", "Banana", "Cherry"};
```

---

## Accessing Array Elements

```java
System.out.println(numbers[1]); // 20
fruits[2] = "Mango";
```

---

## Useful Array Methods (via `java.util.Arrays`)

Arrays themselves do not have methods like wrapper classes, but the `Arrays` utility class provides many helpful static methods:

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `Arrays.toString(array)`      | Returns string representation               |
| `Arrays.sort(array)`          | Sorts the array                             |
| `Arrays.copyOf(array, newLen)`| Copies array to new length                  |
| `Arrays.equals(arr1, arr2)`   | Checks if arrays are equal                  |
| `Arrays.fill(array, val)`     | Fills array with a value                    |
| `Arrays.binarySearch(array, key)` | Searches for a value in sorted array   |

**Example:**

```java
import java.util.Arrays;

int[] arr = {3, 1, 2};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 2, 3]
```

---

## Array as Objects

- Arrays are objects in Java, so you can use them with `Object` references.
- The length of an array is fixed and accessed via the `.length` property (not a method).

```java
int[] arr = new int[5];
System.out.println(arr.length); // 5
```

---

## Arrays vs Wrapper Classes

- Arrays are not wrapper classes, but you can create arrays of wrapper objects (e.g., `Integer[]`, `Double[]`).
- Use wrapper arrays when you need to store `null` values or use collections/generics.

```java
Integer[] nums = {1, null, 3};
```

---

## Best Practices

- Use arrays for fixed-size, performance-critical data.
- For dynamic or resizable collections, prefer `ArrayList` or other collections.
- Use `Arrays` utility methods for common operations.

---

**Tip:**  
For advanced array operations (like parallel sorting or streaming), explore `Arrays.parallelSort()` and `Arrays.stream()`.

**References:**  
- [Official Java Arrays Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html)
- [Java Tutorials: Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)