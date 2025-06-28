---
title: Multithreading in Java - Java Cheatsheet
description: Learn the basics of multithreading in Java, its types, methods, and usage with practical examples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Multithreading in Java
</base-title>

**Multithreading** is a core feature of Java that allows multiple threads to run concurrently within a program, enabling efficient use of CPU and better performance for tasks like I/O, networking, and parallel processing.

---

## What is a Thread?

- A **thread** is a lightweight process, a unit of execution within a program.
- Every Java application has at least one thread (the main thread).

---

## Types of Multithreading

1. **User Threads:**  
   Created by the application (e.g., your own threads).
2. **Daemon Threads:**  
   Background threads that provide services to user threads (e.g., garbage collector). They end when all user threads finish.

---

## Creating Threads in Java

### 1. Extending the `Thread` Class

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running!");
    }
}

MyThread t = new MyThread();
t.start(); // Calls run() in a new thread
```

### 2. Implementing the `Runnable` Interface

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread running!");
    }
}

Thread t = new Thread(new MyRunnable());
t.start();
```

### 3. Using Lambda Expressions (Java 8+)

```java
Thread t = new Thread(() -> System.out.println("Lambda thread running!"));
t.start();
```

---

## Thread Lifecycle

1. **New:** Thread is created.
2. **Runnable:** Thread is ready to run.
3. **Running:** Thread is executing.
4. **Blocked/Waiting:** Thread is waiting for a resource or condition.
5. **Terminated:** Thread has finished execution.

---

## Key Methods in Threading

| Method            | Description                                   |
|-------------------|-----------------------------------------------|
| `start()`         | Starts the thread (calls `run()` in new thread)|
| `run()`           | Code to execute in the thread                 |
| `sleep(ms)`       | Pauses thread for specified milliseconds      |
| `join()`          | Waits for a thread to finish                  |
| `interrupt()`     | Interrupts a thread                           |
| `setDaemon(true)` | Marks thread as daemon                        |
| `isAlive()`       | Checks if thread is alive                     |

---

## Synchronization

- Used to prevent thread interference and memory consistency errors.
- Use the `synchronized` keyword to lock methods or code blocks.

```java
class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
}
```

---

## Thread Communication

- Use `wait()`, `notify()`, and `notifyAll()` for communication between threads (on shared objects).

```java
synchronized(obj) {
    obj.wait();      // Waits for notification
    obj.notify();    // Wakes up one waiting thread
    obj.notifyAll(); // Wakes up all waiting threads
}
```

---

## Executors Framework (Java 5+)

- Preferred way to manage threads in modern Java.
- Use `ExecutorService` to manage thread pools.

```java
import java.util.concurrent.*;

ExecutorService executor = Executors.newFixedThreadPool(2);
executor.submit(() -> System.out.println("Task 1"));
executor.shutdown();
```

---

## Thread-Safe Collections

- Use classes from `java.util.concurrent` for safe access in multithreaded environments:
  - `ConcurrentHashMap`
  - `CopyOnWriteArrayList`
  - `BlockingQueue`

---

## Best Practices

- Always use thread-safe collections for shared data.
- Prefer `Executors` over manual thread management.
- Minimize use of `synchronized` blocks to avoid deadlocks.
- Use `volatile` for variables shared between threads if only simple reads/writes are needed.

---

**Tip:**  
Multithreading can greatly improve performance but also introduces complexity. Always test and debug concurrent code carefully.

**References:**  
- [Official Java Concurrency Tutorial](https://docs.oracle.com/javase/tutorial/essential/concurrency/)
- [Java Platform SE Thread Documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html)
- [Java Executors Framework](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html)