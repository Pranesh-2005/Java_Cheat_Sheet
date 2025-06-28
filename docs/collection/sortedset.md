---
title: SortedSet in Java Collections Framework - Java Cheatsheet
description: Learn about the SortedSet interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
SortedSet in Java Collections Framework
</base-title>

A **SortedSet** in Java is a Set that maintains its elements in ascending order.  
It is part of the Java Collections Framework and is useful when you need a collection with unique, automatically sorted elements.

---

## SortedSet Interface

- Defined in `java.util.SortedSet`.
- Extends the `Set` interface.
- Elements are sorted according to their natural order or by a provided `Comparator`.
- No duplicate elements allowed.

---

## Common Implementations

| Class      | Description                                   | Thread Safe? |
|------------|-----------------------------------------------|--------------|
| `TreeSet`  | Red-Black tree implementation, sorted order   | No           |
| `ConcurrentSkipListSet` | Thread-safe, sorted set          | Yes          |

---

## Creating a SortedSet

**Using TreeSet (most common):**

```java
import java.util.*;

SortedSet<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
System.out.println(numbers); // [2, 5, 8]
```

**Custom Comparator:**

```java
SortedSet<String> names = new TreeSet<>(Comparator.reverseOrder());
names.add("Alice");
names.add("Bob");
System.out.println(names); // [Bob, Alice]
```

---

## Key Methods of SortedSet

| Method                | Description                                 |
|-----------------------|---------------------------------------------|
| `first()`             | Returns the first (lowest) element          |
| `last()`              | Returns the last (highest) element          |
| `comparator()`        | Returns the comparator used, or null        |
| `headSet(E toElement)`| Elements less than toElement                |
| `tailSet(E fromElement)` | Elements greater than or equal to fromElement |
| `subSet(E from, E to)`| Elements in range [from, to)                |

---

## Iterating Over a SortedSet

```java
for (Integer num : numbers) {
    System.out.println(num);
}
```

---

## TreeSet vs HashSet

| Feature         | TreeSet (SortedSet)      | HashSet                |
|-----------------|-------------------------|------------------------|
| Order           | Sorted                   | Unordered              |
| Null allowed?   | No (for natural order)   | Yes (one)              |
| Performance     | Slower (O(log n))        | Faster (O(1))          |
| Thread Safe?    | No                       | No                     |

---

## Thread Safety

- `TreeSet` is **not** thread-safe.
- Use `ConcurrentSkipListSet` for a thread-safe, sorted set in concurrent environments.

---

## Example: Using SortedSet Methods

```java
SortedSet<String> fruits = new TreeSet<>();
fruits.add("Banana");
fruits.add("Apple");
fruits.add("Mango");

System.out.println(fruits.first()); // Apple
System.out.println(fruits.last());  // Mango
System.out.println(fruits.headSet("Mango")); // [Apple, Banana]
System.out.println(fruits.tailSet("Banana")); // [Banana, Mango]
```

---

## When to Use SortedSet?

- When you need a set with elements always in sorted order.
- When you need efficient range queries (e.g., all elements less than a value).

---

**Tip:**  
Always program to the `SortedSet` interface for flexibility. Use `TreeSet` for most sorted set needs, and `ConcurrentSkipListSet` for thread-safe sorted sets.

**References:**  
- [Official Java SortedSet Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html)
- [Java Collections Framework Tutorial: SortedSet](https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html#sorted-set)
- [TreeSet Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html)