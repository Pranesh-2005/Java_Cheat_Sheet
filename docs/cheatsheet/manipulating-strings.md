---
title: Java String Manipulation - Java Cheatsheet
description: String manipulation refers to the process of changing, parsing, slicing, or analyzing strings in various ways.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java String Manipulation
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Manipulating Strings
  </base-disclaimer-title>
  <base-disclaimer-content>
    String manipulation refers to the process of changing, parsing, slicing, or analyzing strings in various ways.
  </base-disclaimer-content>
</base-disclaimer>

## Basics: String Creation

In Java, strings are objects of the `String` class. You can create strings in several ways:

```java
String str1 = "Hello, World!"; // Using string literal
String str2 = new String("Hello, World!"); // Using constructor (not recommended)
```

## String Array

You can create arrays of strings:

```java
String[] fruits = {"apple", "banana", "cherry"};
System.out.println(fruits[0]); // prints "apple"
```

## StringBuilder and StringBuffer

Java provides `StringBuilder` and `StringBuffer` classes for mutable string manipulation.

**StringBuilder** (not thread-safe, faster):

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(", World!");
System.out.println(sb.toString()); // Outputs: "Hello, World!"
```

**StringBuffer** (thread-safe, slower):

```java
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(", World!");
System.out.println(sbf.toString()); // Outputs: "Hello, World!"
```

### String vs StringBuilder vs StringBuffer

| Feature         | String           | StringBuilder         | StringBuffer         |
|-----------------|------------------|----------------------|---------------------|
| Mutability      | Immutable        | Mutable              | Mutable             |
| Thread Safety   | Yes (immutable)  | No                   | Yes                 |
| Performance     | Slow (for concat)| Fast                 | Slower than Builder |
| Use Case        | Constant strings | Fast, single-thread  | Multi-threaded code |

- Use `String` for constant or rarely changed text.
- Use `StringBuilder` for fast, mutable string operations in single-threaded code.
- Use `StringBuffer` for mutable strings in multi-threaded code.

---

## Concat

The `concat` method is used to join two or more strings together. In Java, you can use the `concat` method or the `+` operator.

```java
String str1 = "Hello, ";
String str2 = "World!";
String result = str1.concat(str2);
// Or: String result = str1 + str2;
System.out.println(result); // Outputs: "Hello, World!"
```

## CharAt

The `charAt` method is used to get the character at a specific index in a string.

```java
String str = "Hello, World!";
char ch = str.charAt(7);
System.out.println(ch); // Outputs: 'W'
```

## Contains

The `contains` method is used to determine whether one string can be found within another string, returning true or false.

```java
String str = "Hello, World!";
boolean result = str.contains("World");
System.out.println(result); // Outputs: true
```

## IndexOf

The `indexOf` method is used to determine the first occurrence of a specified value in a string.

```java
String str = "Hello, World!";
int index = str.indexOf("World");
System.out.println(index); // Outputs: 7
```

## Substring

The `substring` method is used to extract a section of a string.

```java
String str = "Hello, World!";
String slicedStr = str.substring(7, 12);
System.out.println(slicedStr); // Outputs: "World"
```

## Split

The `split` method is used to divide a string into an array of substrings.

```java
String str = "Hello, World!";
String[] array = str.split(", ");
System.out.println(java.util.Arrays.toString(array)); // Outputs: [Hello, World!]
```

## Replace

The `replace` method is used to replace a specified value with another value in a string.

```java
String str = "Hello, World!";
String newStr = str.replace("World", "Universe");
System.out.println(newStr); // Outputs: "Hello, Universe!"
```

## ToLowerCase

The `toLowerCase` method is used to convert a string to lowercase letters.

```java
String str = "Hello, World!";
String lowerCaseStr = str.toLowerCase();
System.out.println(lowerCaseStr); // Outputs: "hello, world!"
```

## ToUpperCase

The `toUpperCase` method is used to convert a string to uppercase letters.

```java
String str = "Hello, World!";
String upperCaseStr = str.toUpperCase();
System.out.println(upperCaseStr); // Outputs: "HELLO, WORLD!"
```

## Trim

The `trim` method is used to remove whitespace from both ends of a string.

```java
String str = "   Hello, World!   ";
String trimmedStr = str.trim();
System.out.println(trimmedStr); // Outputs: "Hello, World!"
```

## StripLeading and StripTrailing

Java 11+ provides `stripLeading` and `stripTrailing` to remove whitespace from the beginning or end of a string.

```java
String str = "   Hello, World!   ";
String trimmedLeftStr = str.stripLeading();
String trimmedRightStr = str.stripTrailing();
System.out.println(trimmedLeftStr);  // Outputs: "Hello, World!   "
System.out.println(trimmedRightStr); // Outputs: "   Hello, World!"
```