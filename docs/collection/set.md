---
title: Set in Java Collections Framework - Java Cheatsheet
description: Learn about the Set interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Set in Java Collections Framework
</base-title>

A **Set** in Java is a collection that does **not allow duplicate elements**.  
It models the mathematical set abstraction and is part of the Java Collections Framework.

---

## Set Interface

- Defined in `java.util.Set`.
- Extends the `Collection` interface.
- Does **not** allow duplicate elements.
- No guaranteed order (unless using a sorted or linked implementation).

---

## Common Implementations

| Class             | Description                                 | Thread Safe? |
|-------------------|---------------------------------------------|--------------|
| `HashSet`         | Fast, unordered, allows null                | No           |
| `LinkedHashSet`   | Maintains insertion order                   | No           |
| `TreeSet`         | Sorted set (natural order or Comparator)    | No           |
| `CopyOnWriteArraySet` | Thread-safe, for concurrent use         | Yes          |

---

## Creating a Set

```java
import java.util.*;

Set<String> fruits = new HashSet<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // Duplicate, will not be added
System.out.println(fruits); // [Apple, Banana]
```

---

## Key Methods of Set

| Method            | Description                                 |
|-------------------|---------------------------------------------|
| `add(E e)`        | Adds element if not already present         |
| `remove(Object o)`| Removes specified element                   |
| `contains(Object o)` | Checks if element exists                 |
| `size()`          | Returns number of elements                  |
| `isEmpty()`       | Checks if set is empty                      |
| `clear()`         | Removes all elements                        |
| `iterator()`      | Returns an iterator over the set            |

---

## Iterating Over a Set

**Using for-each loop:**

```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

**Using Iterator:**

```java
Iterator<String> it = fruits.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

## HashSet vs LinkedHashSet vs TreeSet

| Feature         | HashSet           | LinkedHashSet      | TreeSet                |
|-----------------|-------------------|--------------------|------------------------|
| Order           | Unordered         | Insertion order    | Sorted (natural/custom)|
| Null allowed?   | Yes (one)         | Yes (one)          | No (if sorted by natural order) |
| Performance     | Fastest           | Slightly slower    | Slowest (sorted)       |

---

## Example: Using Set Methods

```java
Set<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(5); // Duplicate, ignored
System.out.println(numbers); // [2, 5] (sorted)
numbers.remove(2);
System.out.println(numbers.contains(5)); // true
```

---

## Thread Safety

- `HashSet`, `LinkedHashSet`, and `TreeSet` are **not** thread-safe.
- Use `Collections.synchronizedSet(new HashSet<>())` or `CopyOnWriteArraySet` for thread safety.

---

## When to Use Which Set?

- Use `HashSet` for most cases (fast, unordered).
- Use `LinkedHashSet` if you need to preserve insertion order.
- Use `TreeSet` if you need sorted elements.

---

**Tip:**  
Always program to the `Set` interface, not the implementation. This makes your code flexible and easy to change.

**References:**  
- [Official Java Set Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html)
- [Java Collections Framework Tutorial: Set](https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html)