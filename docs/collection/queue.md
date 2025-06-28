---
title: Queue in Java Collections Framework - Java Cheatsheet
description: Learn about the Queue interface, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Queue in Java Collections Framework
</base-title>

A **Queue** in Java is a collection designed for holding elements prior to processing, typically in a **First-In-First-Out (FIFO)** order.  
It is part of the Java Collections Framework and is widely used for task scheduling, buffering, and more.

---

## Queue Interface

- Defined in `java.util.Queue`.
- Extends the `Collection` interface.
- Typically orders elements FIFO, but some implementations (like `PriorityQueue`) order differently.

---

## Common Implementations

| Class               | Description                                 | Thread Safe? |
|---------------------|---------------------------------------------|--------------|
| `LinkedList`        | Doubly-linked list, implements Queue        | No           |
| `PriorityQueue`     | Orders elements according to natural order or Comparator | No           |
| `ArrayDeque`        | Resizable array, faster than `LinkedList` for queue ops | No           |
| `ConcurrentLinkedQueue` | Thread-safe, non-blocking queue         | Yes          |
| `ArrayBlockingQueue`    | Bounded, thread-safe, blocking queue    | Yes          |
| `LinkedBlockingQueue`   | Unbounded (or bounded), thread-safe, blocking queue | Yes          |

---

## Key Methods of Queue

| Method            | Description                                 |
|-------------------|---------------------------------------------|
| `add(E e)`        | Inserts element, throws exception if full   |
| `offer(E e)`      | Inserts element, returns false if full      |
| `remove()`        | Retrieves and removes head, throws exception if empty |
| `poll()`          | Retrieves and removes head, returns null if empty |
| `element()`       | Retrieves head, throws exception if empty   |
| `peek()`          | Retrieves head, returns null if empty       |

---

## Creating and Using a Queue

**Example with LinkedList:**

```java
import java.util.*;

Queue<String> queue = new LinkedList<>();
queue.add("Alice");
queue.add("Bob");
queue.offer("Charlie"); // offer is safer for bounded queues

System.out.println(queue.poll()); // Alice (removed)
System.out.println(queue.peek()); // Bob (not removed)
```

**Example with PriorityQueue:**

```java
Queue<Integer> pq = new PriorityQueue<>();
pq.add(3);
pq.add(1);
pq.add(2);
System.out.println(pq.poll()); // 1 (smallest first)
```

---

## Deque Interface

- `Deque` (Double-Ended Queue) extends `Queue` and allows insertion/removal at both ends.
- Implemented by `ArrayDeque`, `LinkedList`.

```java
Deque<String> deque = new ArrayDeque<>();
deque.addFirst("first");
deque.addLast("last");
System.out.println(deque.removeLast()); // last
```

---

## Thread Safety

- `LinkedList`, `PriorityQueue`, and `ArrayDeque` are **not** thread-safe.
- Use `ConcurrentLinkedQueue`, `ArrayBlockingQueue`, or `LinkedBlockingQueue` for thread safety in concurrent environments.

---

## When to Use Which Queue?

- Use `LinkedList` or `ArrayDeque` for general FIFO queues.
- Use `PriorityQueue` when you need elements ordered by priority.
- Use concurrent/blocking queues for multi-threaded applications.

---

## Best Practices

- Prefer `offer`/`poll`/`peek` over `add`/`remove`/`element` for safer, exception-free operations.
- Always program to the `Queue` or `Deque` interface, not the implementation.

---

**Tip:**  
Queues are essential for task scheduling, buffering, and producer-consumer scenarios in Java.

**References:**  
- [Official Java Queue Interface Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html)
- [Java Collections Framework Tutorial: Queue](https://docs.oracle.com/javase/tutorial/collections/interfaces/queue.html)
- [Java Platform SE Deque Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html)