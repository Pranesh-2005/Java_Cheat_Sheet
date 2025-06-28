---
title: LinkedList in Java Collections Framework - Java Cheatsheet
description: Learn about the LinkedList class, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
LinkedList in Java Collections Framework
</base-title>

A **LinkedList** in Java is a doubly-linked list implementation of the `List`, `Deque`, and `Queue` interfaces.  
It allows fast insertions and deletions, and can be used as a list, queue, or stack.

---

## Key Features

- Implements `List`, `Deque`, and `Queue` interfaces.
- Allows duplicate elements and maintains insertion order.
- Supports all optional list operations, including adding/removing at both ends.
- Not thread-safe.

---

## When to Use LinkedList

- When you need frequent insertions and deletions (especially at the beginning or middle).
- When you need a queue or double-ended queue (deque) structure.
- When random access is **not** a priority (use `ArrayList` for fast random access).

---

## Creating a LinkedList

```java
import java.util.*;

LinkedList<String> list = new LinkedList<>();
list.add("A");
list.add("B");
list.addFirst("Start");
list.addLast("End");
System.out.println(list); // [Start, A, B, End]
```

---

## Common Methods

| Method                 | Description                                 |
|------------------------|---------------------------------------------|
| `add(E e)`             | Adds to end                                 |
| `addFirst(E e)`        | Adds to beginning                           |
| `addLast(E e)`         | Adds to end                                 |
| `remove()`             | Removes first element                       |
| `removeFirst()`        | Removes first element                       |
| `removeLast()`         | Removes last element                        |
| `get(int index)`       | Gets element at index                       |
| `getFirst()`           | Gets first element                          |
| `getLast()`            | Gets last element                           |
| `peek()`               | Retrieves head (first element)              |
| `poll()`               | Retrieves and removes head                  |
| `offer(E e)`           | Adds to end (queue style)                   |
| `size()`               | Number of elements                          |
| `clear()`              | Removes all elements                        |

---

## Iterating Over a LinkedList

**Using for-each loop:**

```java
for (String item : list) {
    System.out.println(item);
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

## LinkedList as Queue and Deque

```java
LinkedList<Integer> queue = new LinkedList<>();
queue.offer(1); // add to end
queue.offer(2);
System.out.println(queue.poll()); // remove from front (1)

LinkedList<Integer> deque = new LinkedList<>();
deque.addFirst(10);
deque.addLast(20);
System.out.println(deque.removeLast()); // 20
```

---

## LinkedList vs ArrayList

| Feature         | LinkedList                | ArrayList                |
|-----------------|--------------------------|--------------------------|
| Backed by       | Doubly-linked list        | Dynamic array            |
| Access speed    | Slow (O(n))              | Fast (O(1))              |
| Insert/remove   | Fast at ends (O(1))      | Slow (O(n))              |
| Memory usage    | More                      | Less                     |

---

## Thread Safety

- `LinkedList` is **not** thread-safe.
- For thread safety, use `Collections.synchronizedList(new LinkedList<>())` or concurrent collections.

---

## Example: Using LinkedList as Stack

```java
LinkedList<String> stack = new LinkedList<>();
stack.push("First");
stack.push("Second");
System.out.println(stack.pop()); // Second
```

---

**Tip:**  
Use `LinkedList` when you need a flexible, double-ended queue or frequent insertions/removals. For fast random access, prefer `ArrayList`.

**References:**  
- [Official Java LinkedList Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedList.html)
- [Java Collections Framework Tutorial: LinkedList](https://docs.oracle.com/javase/tutorial/collections/implementations/list.html)