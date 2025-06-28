---
title: Character Wrapper Class in Java - Java Cheatsheet
description: Learn about the Character wrapper class, its methods, features, and usage in Java with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Character Wrapper Class in Java
</base-title>

The **Character** class in Java is a wrapper for the primitive type `char`.  
It is part of the `java.lang` package and provides methods to work with single characters as objects.

---

## Why Use the Character Wrapper Class?

- Allows `char` values to be used as objects (required for collections, generics, etc.).
- Provides utility methods for character testing, conversion, and manipulation.
- Supports autoboxing and unboxing (automatic conversion between `char` and `Character`).

---

## Creating Character Objects

**Autoboxing (recommended):**

```java
Character ch = 'A'; // char to Character automatically
```

**Using valueOf (recommended):**

```java
Character ch = Character.valueOf('B');
```

---

## Common Methods in Character Class

| Method                        | Description                                 |
|-------------------------------|---------------------------------------------|
| `isDigit(char ch)`            | Checks if the character is a digit          |
| `isLetter(char ch)`           | Checks if the character is a letter         |
| `isWhitespace(char ch)`       | Checks if the character is whitespace       |
| `isUpperCase(char ch)`        | Checks if the character is uppercase        |
| `isLowerCase(char ch)`        | Checks if the character is lowercase        |
| `toUpperCase(char ch)`        | Converts to uppercase                       |
| `toLowerCase(char ch)`        | Converts to lowercase                       |
| `charValue()`                 | Returns the primitive char value            |
| `compareTo(Character another)`| Compares two Character objects              |
| `equals(Object obj)`          | Checks equality                             |

---

## Example Usage

```java
Character ch = 'a';
System.out.println(Character.isLetter(ch)); // true
System.out.println(Character.isUpperCase(ch)); // false
System.out.println(Character.toUpperCase(ch)); // 'A'

// Using with collections
List<Character> chars = new ArrayList<>();
chars.add('X');
chars.add('Y');
```

---

## Special Features

- **Unicode Support:** Character supports all Unicode characters.
- **Constants:** `Character.MIN_VALUE` (`\u0000`), `Character.MAX_VALUE` (`\uffff`)
- **Immutability:** Like all wrapper classes, Character is immutable.

---

## When to Use Character?

- When you need to store characters in collections.
- When you need to use character utility methods for testing or conversion.
- When working with Unicode or special character processing.

---

**Tip:**  
Use the `Character` class for robust character handling, especially when working with user input, parsing, or text processing.

**References:**  
- [Official Java Character Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html)
- [Java Tutorials: Autoboxing and Unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)
- [Java Tutorials: Characters](https://docs.oracle.com/javase/tutorial/java/data/characters.html)