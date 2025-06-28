---
title: String Wrapper Class in Java - Java Cheatsheet
description: Learn about the String, StringBuilder, and StringBuffer classes, their methods, features, and usage in Java with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
String, StringBuilder, and StringBuffer in Java
</base-title>

The **String** class in Java is a wrapper for character sequences and is one of the most commonly used classes.  
Java also provides **StringBuilder** and **StringBuffer** classes for efficient string manipulation.

---

## String Class

- Defined in `java.lang.String`.
- Represents an immutable sequence of characters.
- Strings are objects, not primitives.
- String literals (e.g., `"Hello"`) are automatically instances of `String`.

---

### Creating Strings

```java
String s1 = "Hello"; // String literal
String s2 = new String("World"); // Using constructor (not recommended)
```

---

### Key Methods in String

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `length()`                    | Returns length of string                    |
| `charAt(int index)`           | Returns character at index                  |
| `substring(int start, int end)`| Returns substring                          |
| `toLowerCase()` / `toUpperCase()` | Changes case                          |
| `equals(Object obj)`          | Checks equality                             |
| `equalsIgnoreCase(String s)`  | Checks equality ignoring case               |
| `compareTo(String s)`         | Lexicographically compares strings          |
| `contains(CharSequence s)`    | Checks if string contains sequence          |
| `replace(old, new)`           | Replaces characters/sequences               |
| `split(String regex)`         | Splits string by regex                      |
| `trim()`                      | Removes leading/trailing whitespace         |
| `startsWith(String prefix)`   | Checks if string starts with prefix         |
| `endsWith(String suffix)`     | Checks if string ends with suffix           |
| `isEmpty()`                   | Checks if string is empty                   |
| `getBytes()`                  | Converts string to byte array               |
| `toCharArray()`               | Converts string to char array               |

---

### Example Usage

```java
String str = "Java Programming";
System.out.println(str.length()); // 16
System.out.println(str.substring(5, 16)); // Programming
System.out.println(str.toUpperCase()); // JAVA PROGRAMMING
System.out.println(str.replace("Java", "Python")); // Python Programming
```

---

## String Immutability

- Strings are **immutable**: once created, their value cannot be changed.
- Any operation that seems to modify a string actually creates a new string object.

---

## StringBuilder Class

- Defined in `java.lang.StringBuilder`.
- Mutable sequence of characters (can be changed after creation).
- Not thread-safe (not synchronized).
- Faster than `StringBuffer` for most single-threaded scenarios.

### Creating and Using StringBuilder

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString()); // Hello World
sb.insert(5, ",");
sb.reverse();
```

### Key Methods in StringBuilder

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `append(String s)`            | Adds string to end                          |
| `insert(int offset, String s)`| Inserts string at offset                    |
| `delete(int start, int end)`  | Deletes substring                           |
| `reverse()`                   | Reverses the sequence                       |
| `replace(int start, int end, String s)` | Replaces substring             |
| `toString()`                  | Converts to String                          |
| `setCharAt(int index, char c)`| Sets character at index                     |
| `capacity()`                  | Returns current capacity                    |
| `ensureCapacity(int min)`     | Ensures minimum capacity                    |

---

## StringBuffer Class

- Defined in `java.lang.StringBuffer`.
- Mutable sequence of characters.
- **Thread-safe** (synchronized methods).
- Slightly slower than `StringBuilder` due to synchronization.

### Creating and Using StringBuffer

```java
StringBuffer sbf = new StringBuffer("Java");
sbf.append(" Rocks!");
System.out.println(sbf.toString()); // Java Rocks!
sbf.insert(4, " Programming");
sbf.delete(0, 5);
```

### Key Methods in StringBuffer

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `append(String s)`            | Adds string to end                          |
| `insert(int offset, String s)`| Inserts string at offset                    |
| `delete(int start, int end)`  | Deletes substring                           |
| `reverse()`                   | Reverses the sequence                       |
| `replace(int start, int end, String s)` | Replaces substring             |
| `toString()`                  | Converts to String                          |
| `setCharAt(int index, char c)`| Sets character at index                     |
| `capacity()`                  | Returns current capacity                    |

---

## String vs StringBuilder vs StringBuffer

| Feature         | String         | StringBuilder      | StringBuffer        |
|-----------------|----------------|-------------------|---------------------|
| Mutability      | Immutable      | Mutable           | Mutable             |
| Thread Safe     | Yes (immutable)| No                | Yes (synchronized)  |
| Performance     | Slow (for many changes) | Fast      | Slower than StringBuilder |
| Use Case        | Constant text  | Many modifications| Many modifications (multi-threaded) |

---

## Best Practices

- Use `String` for constant or rarely changed text.
- Use `StringBuilder` for frequent string modifications in single-threaded code.
- Use `StringBuffer` for frequent modifications in multi-threaded code.

---

**Tip:**  
For most cases, prefer `StringBuilder` for string manipulation due to its speed. Use `StringBuffer` only if you need thread safety.

**References:**  
- [Official Java String Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)
- [Official Java StringBuilder Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html)
- [Official Java StringBuffer Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuffer.html)
- [Java Tutorials: Strings](https://docs.oracle.com/javase/tutorial/java/data/strings.html)