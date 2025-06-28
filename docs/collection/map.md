---
title: Map in Java Collections Framework - Java Cheatsheet
description: Learn about the Map interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Map in Java Collections Framework
</base-title>

A **Map** in Java is an object that maps keys to values.  
It cannot contain duplicate keys, and each key can map to at most one value.

---

## Map Interface

- Defined in `java.util.Map`.
- Not a true collection, but part of the Collections Framework.
- Stores key-value pairs (also called entries).
- Keys must be unique; values can be duplicated.

---

## Common Implementations

| Class                 | Description                                      | Thread Safe? |
|-----------------------|--------------------------------------------------|--------------|
| `HashMap`             | Fast, unordered, allows null keys/values         | No           |
| `LinkedHashMap`       | Maintains insertion order                        | No           |
| `TreeMap`             | Sorted by keys (natural order or Comparator)     | No           |
| `Hashtable`           | Legacy, synchronized, no null keys/values        | Yes          |
| `ConcurrentHashMap`   | Thread-safe, high-performance for concurrency    | Yes          |
| `WeakHashMap`         | Keys can be garbage collected (weak references)  | No           |
| `IdentityHashMap`     | Keys compared by reference, not equals()         | No           |
| `EnumMap`             | Keys are enum types                              | No           |

---

## Creating a Map

```java
import java.util.*;

Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Alice", 28); // Overwrites previous value for "Alice"
System.out.println(ages); // {Alice=28, Bob=30}
```

---

## Key Methods of Map

| Method                      | Description                                 |
|-----------------------------|---------------------------------------------|
| `put(K key, V value)`       | Adds or updates a key-value pair            |
| `get(Object key)`           | Returns value for key, or null if not found |
| `remove(Object key)`        | Removes entry for key                       |
| `containsKey(Object key)`   | Checks if key exists                        |
| `containsValue(Object val)` | Checks if value exists                      |
| `size()`                    | Number of key-value pairs                   |
| `isEmpty()`                 | Checks if map is empty                      |
| `clear()`                   | Removes all entries                         |
| `keySet()`                  | Returns a Set of all keys                   |
| `values()`                  | Returns a Collection of all values          |
| `entrySet()`                | Returns a Set of all key-value pairs        |
| `putIfAbsent(K key, V val)` | Adds entry only if key is not present       |

---

## Iterating Over a Map

**Iterate over keys:**

```java
for (String key : ages.keySet()) {
    System.out.println(key);
}
```

**Iterate over values:**

```java
for (Integer value : ages.values()) {
    System.out.println(value);
}
```

**Iterate over entries:**

```java
for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

---

## HashMap vs LinkedHashMap vs TreeMap

| Feature         | HashMap           | LinkedHashMap      | TreeMap                |
|-----------------|-------------------|--------------------|------------------------|
| Order           | Unordered         | Insertion order    | Sorted by key          |
| Null allowed?   | Yes (1 key, many values) | Yes           | No (for keys if sorted by natural order) |
| Performance     | Fastest           | Slightly slower    | Slowest (sorted)       |

---

## Thread Safety

- `HashMap`, `LinkedHashMap`, `TreeMap` are **not** thread-safe.
- Use `ConcurrentHashMap` for thread safety in concurrent environments.
- `Hashtable` is thread-safe but legacy (not recommended for new code).

---

## Example: Using Map Methods

```java
Map<String, String> capitals = new TreeMap<>();
capitals.put("India", "New Delhi");
capitals.put("USA", "Washington");
capitals.put("France", "Paris");

System.out.println(capitals.get("India")); // New Delhi
capitals.remove("USA");
System.out.println(capitals.containsKey("France")); // true
```

---

## When to Use Which Map?

- Use `HashMap` for most cases (fast, unordered).
- Use `LinkedHashMap` if you need to preserve insertion order.
- Use `TreeMap` if you need sorted keys.
- Use `ConcurrentHashMap` for thread-safe, concurrent access.

---

**Tip:**  
Always program to the `Map` interface, not the implementation. This makes your code flexible and easy to change.

**References:**  
- [Official Java Map Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)
- [Java Collections Framework Tutorial: Map](https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html)