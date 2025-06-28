---
title: Java Arrays - Java Cheatsheet
description: An array in Java is a container object that holds a fixed number of values of a single type.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Arrays
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html" target="_blank">Oracle Java Docs</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    In Java, arrays are objects that store multiple variables of the same type. The length of an array is established when the array is created. After creation, its length is fixed.
  </base-disclaimer-content>
</base-disclaimer>

An array in Java is a container object that holds a fixed number of values of a single type. Each item in an array is called an element, and each element is accessed by its numerical index.

## Array Declaration

In Java, you declare an array by specifying the type of its elements and using square brackets `[]`.

```java
// Declaration and initialization in one line
int[] numbers = {1, 2, 3, 4, 5};

// Declaration first, then initialization
String[] fruits = new String[3];
fruits[0] = "apple";
fruits[1] = "banana";
fruits[2] = "cherry";
```

## Array Indexes

Array indices in Java start at 0. You can access or modify elements using their index:

```java
String[] fruits = {"apple", "banana", "cherry"};

System.out.println(fruits[0]); // prints "apple"
System.out.println(fruits[1]); // prints "banana"
System.out.println(fruits[2]); // prints "cherry"

fruits[1] = "blueberry"; // changes "banana" to "blueberry"
System.out.println(fruits[1]); // prints "blueberry"
```

## Array Length

The `length` property of an array in Java gives the number of elements in the array:

```java
String[] fruits = {"apple", "banana", "cherry"};
System.out.println(fruits.length); // prints 3
```

Unlike JavaScript, you cannot change the length of a Java array after it is created.

## Array Copying

To copy or combine arrays in Java, use `System.arraycopy` or `Arrays.copyOf`:

```java
int[] original = {1, 2, 3};
int[] copy = java.util.Arrays.copyOf(original, original.length);

System.out.println(copy[0]); // prints 1
```

To combine arrays:

```java
int[] arr1 = {1, 2};
int[] arr2 = {3, 4};
int[] combined = new int[arr1.length + arr2.length];
System.arraycopy(arr1, 0, combined, 0, arr1.length);
System.arraycopy(arr2, 0, combined, arr1.length, arr2.length);
// combined = {1, 2, 3, 4}
```

## Array Iteration

You can iterate over arrays using a traditional for loop or an enhanced for loop:

```java
String[] fruits = {"apple", "banana", "cherry"};
for (int i = 0; i < fruits.length; i++) {
    System.out.println(fruits[i]);
}

// Enhanced for loop
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

## Array Destructuring (Java Style)

Java does not support array destructuring like JavaScript, but you can assign elements manually:

```java
String[] fruits = {"apple", "banana", "cherry"};
String fruit1 = fruits[0];
String fruit2 = fruits[1];
String fruit3 = fruits[2];
System.out.println(fruit1); // prints "apple"
System.out.println(fruit2); // prints "banana"
System.out.println(fruit3); // prints "cherry"
```

## Multidimensional Arrays

Java supports multidimensional arrays (arrays of arrays):

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(matrix[0][1]); // prints 2
```

## Arrays Utility Methods

Java provides utility methods in `java.util.Arrays`:

```java
int[] numbers = {3, 1, 2};
java.util.Arrays.sort(numbers); // sorts the array
System.out.println(java.util.Arrays.toString(numbers)); // prints [1, 2, 3]