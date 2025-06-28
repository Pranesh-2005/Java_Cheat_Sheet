---
title: Deque in Java Collections Framework - Java Cheatsheet
description: Learn about the Deque interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Deque in Java Collections Framework
</base-title>

A **Deque** (Double-Ended Queue) in Java is a linear collection that supports element insertion and removal at both ends.  
It can be used as both a queue (FIFO) and a stack (LIFO).

---

## Deque Interface

- Defined in `java.util.Deque`.
- Extends the `Queue` interface.
- Allows insertion, removal, and retrieval at both the head and tail.
- No capacity restrictions unless implemented by a bounded deque.

---

## Common Implementations

| Class               | Description                                 | Thread Safe? |
|---------------------|---------------------------------------------|--------------|
| `ArrayDeque`        | Resizable array, fast, no capacity limit    | No           |
| `LinkedList`        | Doubly-linked list, implements Deque        | No           |
| `ConcurrentLinkedDeque` | Thread-safe, non-blocking deque         | Yes          |
| `LinkedBlockingDeque`   | Thread-safe, optionally bounded         | Yes          |

---

## Key Methods of Deque

| Method                | Description                                 |
|-----------------------|---------------------------------------------|
| `addFirst(E e)`       | Inserts at the front                        |
| `addLast(E e)`        | Inserts at the end                          |
| `offerFirst(E e)`     | Inserts at the front (returns false if full)|
| `offerLast(E e)`      | Inserts at the end (returns false if full)  |
| `removeFirst()`       | Removes and returns first element           |
| `removeLast()`        | Removes and returns last element            |
| `pollFirst()`         | Retrieves/removes first, or null if empty   |
| `pollLast()`          | Retrieves/removes last, or null if empty    |
| `getFirst()`          | Retrieves first element                     |
| `getLast()`           | Retrieves last element                      |
| `peekFirst()`         | Retrieves first, or null if empty           |
| `peekLast()`          | Retrieves last, or null if empty            |
| `push(E e)`           | Pushes onto stack (front)                   |
| `pop()`               | Pops from stack (front)                     |

---

## Creating and Using a Deque

**Using ArrayDeque:**

```java
import java.util.*;

Deque<String> deque = new ArrayDeque<>();
deque.addFirst("A");
deque.addLast("B");
System.out.println(deque.removeFirst()); // A
System.out.println(deque.removeLast());  // B
```

**Using LinkedList as Deque:**

```java
Deque<Integer> deque = new LinkedList<>();
deque.offerFirst(1);
deque.offerLast(2);
System.out.println(deque.pollFirst()); // 1
System.out.println(deque.pollLast());  // 2
```

---

## Deque as Stack and Queue

- **As Stack (LIFO):** Use `push()` and `pop()` methods.
- **As Queue (FIFO):** Use `addLast()` and `removeFirst()`.

```java
Deque<String> stack = new ArrayDeque<>();
stack.push("First");
stack.push("Second");
System.out.println(stack.pop()); // Second
```

---

## Thread Safety

- `ArrayDeque` and `LinkedList` are **not** thread-safe.
- Use `ConcurrentLinkedDeque` or `LinkedBlockingDeque` for thread safety in concurrent environments.

---

## When to Use Which Deque?

- Use `ArrayDeque` for most non-threaded, high-performance double-ended queue needs.
- Use `LinkedList` if you need a deque with frequent insertions/removals at both ends and also want List features.
- Use concurrent deques for multi-threaded applications.

---

## Best Practices

- Always program to the `Deque` interface, not the implementation.
- Prefer `ArrayDeque` over `Stack` for stack operations in modern Java.

---

**Tip:**  
Deques are versatile and can efficiently replace both stacks and queues in most Java applications.

**References:**  
- [Official Java Deque Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html)
- [Java Collections Framework Tutorial: Deque](https://docs.oracle.com/javase/tutorial/collections/interfaces/deque.html)
- [Java Platform SE ArrayDeque Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html)