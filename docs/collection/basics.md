---
title: Java Collections Framework - Java Cheatsheet
description: Learn the basics of the Java Collections Framework, the foundation for working with groups of objects in Java.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Collections Framework
</base-title>

The **Java Collections Framework (JCF)** is a set of classes and interfaces that make it easy to store, retrieve, and manipulate groups of objects (collections) in Java.

---

## Why Use Collections?

- Collections make it easy to manage groups of related data.
- They provide reusable data structures (like lists, sets, and maps).
- Collections support powerful operations: searching, sorting, iteration, and more.

---

## Collections Framework Diagram

Below is a simplified diagram showing the main interfaces and their key implementations:

```
          Iterable
             |
         Collection
         /    |    \
      List   Set   Queue
       |      |      |
  ArrayList  HashSet LinkedList
  LinkedList TreeSet PriorityQueue
  Vector*    LinkedHashSet ArrayDeque
  Stack*     
             Map
              |
         HashMap
         TreeMap
         LinkedHashMap
         Hashtable*
         ConcurrentHashMap
```
- *Classes marked with `*` (Vector, Stack, Hashtable) are legacy and thread-safe but generally not recommended for new code.
- `ConcurrentHashMap` is thread-safe and designed for concurrency.

---

## Main Interfaces

| Interface | Description                        | Example Implementation      | Thread Safe?         |
|-----------|------------------------------------|----------------------------|----------------------|
| `List`    | Ordered collection, allows duplicates | `ArrayList`, `LinkedList`, `Vector` | `Vector` (yes), others (no) |
| `Set`     | Unordered, no duplicates           | `HashSet`, `TreeSet`, `LinkedHashSet` | No                   |
| `Queue`   | FIFO structure                     | `LinkedList`, `PriorityQueue`, `ArrayDeque` | No                   |
| `Map`     | Key-value pairs                    | `HashMap`, `TreeMap`, `LinkedHashMap`, `Hashtable`, `ConcurrentHashMap` | `Hashtable`, `ConcurrentHashMap` (yes), others (no) |

---

## Thread Safety

- **Thread-safe collections:**  
  - `Vector`, `Stack`, `Hashtable`, `ConcurrentHashMap`
- **Not thread-safe (most common):**  
  - `ArrayList`, `LinkedList`, `HashMap`, `HashSet`, etc.
- **How to make collections thread-safe:**  
  Use `Collections.synchronizedList(new ArrayList<>())` or similar wrappers, or use concurrent collections from `java.util.concurrent`.

---

## Common Collection Classes

- **ArrayList**: Fast, resizable array. Good for random access. *Not thread-safe.*
- **LinkedList**: Doubly-linked list. Good for frequent insertions/removals. *Not thread-safe.*
- **Vector**: Like ArrayList but thread-safe (legacy).
- **Stack**: Subclass of Vector, thread-safe (legacy).
- **HashSet**: Unordered set, no duplicates, fast lookup. *Not thread-safe.*
- **TreeSet**: Sorted set, no duplicates. *Not thread-safe.*
- **HashMap**: Key-value pairs, fast lookup. *Not thread-safe.*
- **TreeMap**: Sorted key-value pairs. *Not thread-safe.*
- **Hashtable**: Thread-safe map (legacy).
- **ConcurrentHashMap**: Thread-safe, high-performance map for concurrent use.

---

## Basic Usage Examples

**List Example:**

```java
import java.util.*;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
System.out.println(names.get(0)); // Alice
```

**Set Example:**

```java
Set<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(2);
numbers.add(1); // Duplicate, will not be added
System.out.println(numbers.size()); // 2
```

**Map Example:**

```java
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
System.out.println(ages.get("Alice")); // 25
```

---

## Key Features

- **Generics**: Collections are type-safe (e.g., `List<String>`).
- **Iterators**: Use enhanced for-loop or `Iterator` to traverse collections.
- **Algorithms**: Utility methods in `Collections` class (e.g., `Collections.sort(list)`).
- **Concurrent Collections**: Use classes from `java.util.concurrent` for thread safety.

---

## Best Practices

- Prefer interfaces (`List`, `Set`, `Map`) over concrete classes (`ArrayList`, `HashSet`, etc.).
- Use generics for type safety.
- Choose the right collection for your needs (e.g., `ArrayList` for fast access, `LinkedList` for fast inserts/removes).
- For thread safety, use concurrent collections or synchronized wrappers.

---

**Tip:**  
The Java Collections Framework is the backbone of data handling in Java. Mastering it will make you a more effective Java developer.

**References:**  
- [Official Java Collections Framework Tutorial](https://docs.oracle.com/javase/tutorial/collections/index.html)
- [Java Platform SE Collections Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html)
- [Java Collections Overview (Oracle Docs)](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html)