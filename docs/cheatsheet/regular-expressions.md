---
title: Java Regular Expressions - Java Cheatsheet
description: Regular expressions (regex) are patterns used to match character combinations in strings.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Regular Expressions
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Java Regular Expressions
  </base-disclaimer-title>
  <base-disclaimer-content>
    In Java, regular expressions are supported by the `java.util.regex` package. You can use the `Pattern` and `Matcher` classes to work with regex.
  </base-disclaimer-content>
</base-disclaimer>

## Basic Usage

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

String text = "abc123";
Pattern pattern = Pattern.compile("\\d+"); // matches one or more digits
Matcher matcher = pattern.matcher(text);
boolean found = matcher.find();
System.out.println(found); // true
```

## Common Regex Symbols

| Symbol   | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| `.`      | Any character except newline                                                 |
| `\d`     | Any digit (0-9)                                                              |
| `\D`     | Any non-digit character                                                      |
| `\s`     | Any whitespace character                                                     |
| `\S`     | Any non-whitespace character                                                 |
| `\w`     | Any word character (a-z, A-Z, 0-9, _)                                        |
| `\W`     | Any non-word character                                                       |
| `[abc]`  | a, b, or c                                                                  |
| `[^abc]` | Any character except a, b, or c                                             |
| `^`      | Start of string                                                             |
| `$`      | End of string                                                               |
| `*`      | Zero or more                                                                |
| `+`      | One or more                                                                 |
| `?`      | Zero or one                                                                 |
| `{n}`    | Exactly n times                                                             |
| `{n,}`   | n or more times                                                             |
| `{n,m}`  | Between n and m times                                                       |
| `|`      | OR                                                                          |
| `( )`    | Group                                                                       |

---

## Examples

### Match Any Character

```java
Pattern pattern = Pattern.compile("a.c");
Matcher matcher = pattern.matcher("abc");
System.out.println(matcher.find()); // true
```

### Match a Digit

```java
Pattern pattern = Pattern.compile("\\d");
Matcher matcher = pattern.matcher("abc123");
System.out.println(matcher.find()); // true
```

### Match a Non-Digit

```java
Pattern pattern = Pattern.compile("\\D");
Matcher matcher = pattern.matcher("123");
System.out.println(matcher.find()); // false
```

### Match Whitespace

```java
Pattern pattern = Pattern.compile("\\s");
Matcher matcher = pattern.matcher("abc def");
System.out.println(matcher.find()); // true
```

### Match Word Character

```java
Pattern pattern = Pattern.compile("\\w");
Matcher matcher = pattern.matcher("abc!");
System.out.println(matcher.find()); // true
```

### Character Set

```java
Pattern pattern = Pattern.compile("[abc]");
Matcher matcher = pattern.matcher("defabc");
System.out.println(matcher.find()); // true
```

### Start and End Anchors

```java
Pattern pattern = Pattern.compile("^abc");
Matcher matcher = pattern.matcher("abcdef");
System.out.println(matcher.find()); // true

pattern = Pattern.compile("def$");
matcher = pattern.matcher("abcdef");
System.out.println(matcher.find()); // true
```

### Quantifiers

```java
Pattern pattern = Pattern.compile("a*");
Matcher matcher = pattern.matcher("aaaabc");
System.out.println(matcher.find()); // true

pattern = Pattern.compile("a{2,3}");
matcher = pattern.matcher("aaaabc");
System.out.println(matcher.find()); // true
```

### OR Operator

```java
Pattern pattern = Pattern.compile("abc|def");
Matcher matcher = pattern.matcher("def");
System.out.println(matcher.find()); // true
```

### Grouping

```java
Pattern pattern = Pattern.compile("(abc)");
Matcher matcher = pattern.matcher("abcdef");
System.out.println(matcher.find()); // true
```

---

**Tip:**  
- Always double escape (`\\`) regex symbols in Java string literals.
- Use `Pattern.compile()` and `Matcher` for regex operations.
- For simple contains, use `String.contains()`.

For more advanced features (like lookahead/lookbehind), see the [Java Pattern documentation](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html).