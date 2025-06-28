---
title: List in Java Collections Framework - Java Cheatsheet
description: Learn about the List interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
List in Java Collections Framework
</base-title>

A **List** in Java is an ordered collection that allows duplicate elements.  
It is part of the Java Collections Framework and provides positional access and search operations.

---

## List Interface

- Defined in `java.util.List`.
- Extends the `Collection` interface.
- Maintains insertion order.
- Allows duplicate elements.

---

## Common Implementations

| Class         | Description                                 | Thread Safe? |
|---------------|---------------------------------------------|--------------|
| `ArrayList`   | Resizable array, fast random access         | No           |
| `LinkedList`  | Doubly-linked list, fast insert/remove      | No           |
| `Vector`      | Legacy, resizable array, thread-safe        | Yes          |
| `Stack`       | Legacy, LIFO stack, extends Vector          | Yes          |
| `CopyOnWriteArrayList` | Thread-safe, for concurrent use    | Yes          |

---

## Creating a List

```java
import java.util.*;

List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Apple"); // Duplicates allowed
System.out.println(list); // [Apple, Banana, Apple]
```

---

## Key Methods of List

| Method                      | Description                                 |
|-----------------------------|---------------------------------------------|
| `add(E e)`                  | Adds element to end                         |
| `add(int index, E e)`       | Adds element at specified position          |
| `get(int index)`            | Returns element at index                    |
| `set(int index, E e)`       | Replaces element at index                   |
| `remove(int index)`         | Removes element at index                    |
| `remove(Object o)`          | Removes first occurrence of object          |
| `indexOf(Object o)`         | Returns index of first occurrence           |
| `lastIndexOf(Object o)`     | Returns index of last occurrence            |
| `size()`                    | Returns number of elements                  |
| `isEmpty()`                 | Checks if list is empty                     |
| `contains(Object o)`        | Checks if list contains object              |
| `clear()`                   | Removes all elements                        |
| `subList(int from, int to)` | Returns a view of the specified range       |

---

## Iterating Over a List

**Using for-each loop:**

```java
for (String fruit : list) {
    System.out.println(fruit);
}
```

**Using Iterator:**

```java
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

## ArrayList vs LinkedList

| Feature         | ArrayList                | LinkedList                |
|-----------------|-------------------------|---------------------------|
| Backed by       | Dynamic array            | Doubly-linked list        |
| Access speed    | Fast (O(1))              | Slow (O(n))               |
| Insert/remove   | Slow (O(n))              | Fast at ends (O(1))       |
| Memory usage    | Less                     | More                      |

---

## Example: Using List Methods

```java
List<Integer> numbers = new LinkedList<>();
numbers.add(10);
numbers.add(20);
numbers.add(1, 15); // Insert 15 at index 1
System.out.println(numbers); // [10, 15, 20]
numbers.remove(Integer.valueOf(15));
System.out.println(numbers.contains(20)); // true
```

---

## Thread Safety

- `ArrayList` and `LinkedList` are **not** thread-safe.
- Use `Collections.synchronizedList(new ArrayList<>())` or `CopyOnWriteArrayList` for thread safety.

---

## When to Use Which List?

- Use `ArrayList` for most cases (fast access, less memory).
- Use `LinkedList` for frequent insertions/removals at the beginning or middle.
- Use `Vector` or `CopyOnWriteArrayList` only if you need thread safety.

---

**Tip:**  
Always program to the `List` interface, not the implementation. This makes your code flexible and easy to change.

**References:**  
- [Official Java List Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)
- [Java Collections Framework Tutorial](https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html)