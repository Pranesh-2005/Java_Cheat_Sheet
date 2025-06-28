---
title: Stack in Java Collections Framework - Java Cheatsheet
description: Learn about the Stack class, its types, methods, and usage in Java Collections Framework.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Stack in Java Collections Framework
</base-title>

A **Stack** in Java is a collection that follows the **Last-In-First-Out (LIFO)** principle.  
It is commonly used for undo features, parsing, expression evaluation, and more.

---

## Stack in Java

- The classic `Stack` class is part of `java.util` and extends `Vector`.
- Since Java 1.6, it is considered legacy. For new code, prefer `ArrayDeque` or `LinkedList` for stack operations.

---

## Stack Implementations

| Class         | Description                                 | Thread Safe? |
|---------------|---------------------------------------------|--------------|
| `Stack`       | Legacy, extends `Vector`, LIFO stack        | Yes          |
| `ArrayDeque`  | Recommended for stack/queue, resizable array| No           |
| `LinkedList`  | Implements `Deque`, can be used as stack    | No           |

---

## Creating a Stack

**Using Stack (legacy):**

```java
import java.util.*;

Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
System.out.println(stack.pop()); // 20
System.out.println(stack.peek()); // 10
```

**Using ArrayDeque (recommended):**

```java
Deque<String> stack = new ArrayDeque<>();
stack.push("A");
stack.push("B");
System.out.println(stack.pop()); // B
System.out.println(stack.peek()); // A
```

---

## Key Methods

| Method         | Description                                 |
|----------------|---------------------------------------------|
| `push(E e)`    | Adds element to the top                     |
| `pop()`        | Removes and returns top element             |
| `peek()`       | Returns top element without removing        |
| `empty()`      | Checks if stack is empty (`Stack` only)     |
| `search(Object o)` | Returns 1-based position from top (`Stack` only) |

---

## Iterating Over a Stack

```java
for (String item : stack) {
    System.out.println(item);
}
```

---

## When to Use Which Stack?

- Use `ArrayDeque` for most stack use-cases (faster, no legacy overhead).
- Use `Stack` only for legacy code or when thread safety is required (rare).
- Use `LinkedList` if you need both stack and queue operations.

---

## Thread Safety

- `Stack` is thread-safe (synchronized methods), but slower.
- `ArrayDeque` and `LinkedList` are **not** thread-safe. For concurrency, use external synchronization or concurrent collections.

---

## Example: Balanced Parentheses Checker

```java
public boolean isBalanced(String expr) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char ch : expr.toCharArray()) {
        if (ch == '(') stack.push(ch);
        else if (ch == ')') {
            if (stack.isEmpty()) return false;
            stack.pop();
        }
    }
    return stack.isEmpty();
}
```

---

**Tip:**  
Always prefer `ArrayDeque` for stack operations in modern Java. It is faster and more flexible than the legacy `Stack` class.

**References:**  
- [Official Java Stack Class Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Stack.html)
- [Java Collections Framework Tutorial: Stack](https://docs.oracle.com/javase/tutorial/collections/implementations/stack.html)
- [Java Platform SE ArrayDeque Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html)