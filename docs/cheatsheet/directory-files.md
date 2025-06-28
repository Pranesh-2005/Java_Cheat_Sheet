---
title: Java Files and Directories - Java Cheatsheet
description: Java provides classes in the java.io and java.nio.file packages to work with files and directories.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Files and Directories
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Java File and Directory Operations
  </base-disclaimer-title>
  <base-disclaimer-content>
    In Java, you can use classes from `java.io` and `java.nio.file` to read, write, and manage files and directories.
  </base-disclaimer-content>
</base-disclaimer>

## Reading a File

Use `Files.readAllLines` (Java 7+) to read all lines from a file:

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

List<String> lines = Files.readAllLines(Paths.get("example.txt"));
for (String line : lines) {
    System.out.println(line);
}
```

## Writing to a File

Use `Files.write` to write text to a file:

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;

Files.write(Paths.get("example.txt"), Arrays.asList("Hello, World!"));
```

## Appending to a File

To append text to a file, use `Files.write` with `StandardOpenOption.APPEND`:

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;

Files.write(
    Paths.get("example.txt"),
    Arrays.asList("More content"),
    StandardOpenOption.APPEND
);
```

## Deleting a File

Use `Files.delete` to delete a file:

```java
import java.nio.file.Files;
import java.nio.file.Paths;

Files.delete(Paths.get("example.txt"));
```

## Renaming or Moving a File

Use `Files.move` to rename or move a file:

```java
import java.nio.file.Files;
import java.nio.file.Paths;

Files.move(Paths.get("oldName.txt"), Paths.get("newName.txt"));
```

## Creating a Directory

Use `Files.createDirectory` to create a new directory:

```java
import java.nio.file.Files;
import java.nio.file.Paths;

Files.createDirectory(Paths.get("exampleDir"));
```

## Reading a Directory

Use `Files.list` to list files in a directory:

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;

Files.list(Paths.get("exampleDir"))
    .forEach(path -> System.out.println(path.getFileName()));
```

## Deleting a Directory

Use `Files.delete` to delete an empty directory:

```java
import java.nio.file.Files;
import java.nio.file.Paths;

Files.delete(Paths.get("exampleDir"));
```

> **Note:**  
> `Files.delete` only works if the directory is empty.

---

**Tip:**  
Always handle exceptions (like `IOException`) when working with files and directories in Java. Use `try-catch` blocks or declare `throws IOException` in your method signature for simplicity in examples.