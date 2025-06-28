---
title: Java Array Operations - Java Cheatsheet
description: Arrays in Java are fixed-size containers for elements of a single type. Java provides utility methods for common array operations.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Java Array Operations
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Array operations in Java
  </base-disclaimer-title>
  <base-disclaimer-content>
    Java arrays are fixed in size once created. You can use utility methods from `java.util.Arrays` and collections like `ArrayList` for flexible operations.
  </base-disclaimer-content>
</base-disclaimer>

## Adding Elements

Java arrays are fixed-size. To add elements dynamically, use `ArrayList`:

```java
import java.util.ArrayList;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("apple");
fruits.add("banana");
fruits.add("orange"); // ["apple", "banana", "orange"]
```

## Removing Elements

Remove the last element (like `pop`):

```java
fruits.remove(fruits.size() - 1); // removes "orange"
```

Remove the first element (like `shift`):

```java
fruits.remove(0); // removes "apple"
```

## Adding Elements at the Beginning

Add elements at the start (like `unshift`):

```java
fruits.add(0, "pineapple"); // adds "pineapple" at index 0
```

## Concatenating Arrays

To combine arrays, use `ArrayList` or `System.arraycopy`:

```java
String[] arr1 = {"apple", "banana"};
String[] arr2 = {"orange", "pineapple"};
String[] combined = new String[arr1.length + arr2.length];
System.arraycopy(arr1, 0, combined, 0, arr1.length);
System.arraycopy(arr2, 0, combined, arr1.length, arr2.length);
// combined = {"apple", "banana", "orange", "pineapple"}
```

Or with `ArrayList`:

```java
ArrayList<String> allFruits = new ArrayList<>(fruits);
allFruits.addAll(java.util.Arrays.asList("mango", "kiwi"));
```

## Slicing Arrays

Use `Arrays.copyOfRange` to get a slice:

```java
String[] fruits = {"apple", "banana", "orange", "pineapple", "mango"};
String[] citrusFruits = java.util.Arrays.copyOfRange(fruits, 2, 4); // {"orange", "pineapple"}
```

## Splicing Arrays

Java does not have a direct `splice` method. Use `ArrayList` for similar functionality:

```java
ArrayList<String> fruits = new ArrayList<>(java.util.Arrays.asList("apple", "banana", "orange", "pineapple", "mango"));
// Remove elements
fruits.subList(2, 4).clear(); // removes "orange" and "pineapple"
// Add elements
fruits.addAll(2, java.util.Arrays.asList("orange", "pineapple"));
// Replace elements
fruits.set(1, "orange"); // replaces "banana" with "orange"
```

## Joining Elements

Join array elements into a string:

```java
String[] fruits = {"apple", "banana", "orange"};
String result = String.join(", ", fruits); // "apple, banana, orange"
```

## Reversing Arrays

Reverse with `Collections.reverse` (for lists):

```java
ArrayList<String> fruits = new ArrayList<>(java.util.Arrays.asList("apple", "banana", "orange"));
java.util.Collections.reverse(fruits); // ["orange", "banana", "apple"]
```

## Sorting Arrays

Sort arrays:

```java
String[] fruits = {"banana", "apple", "orange"};
java.util.Arrays.sort(fruits); // ["apple", "banana", "orange"]
```

Sort numbers:

```java
int[] numbers = {40, 1, 5, 200};
java.util.Arrays.sort(numbers); // [1, 5, 40, 200]
```

## Searching for Elements

Find index of an element:

```java
String[] fruits = {"apple", "banana", "orange"};
int index = java.util.Arrays.asList(fruits).indexOf("banana"); // 1
```

Check if array contains a value:

```java
boolean hasBanana = java.util.Arrays.asList(fruits).contains("banana"); // true
```

## Filtering Arrays

Use streams to filter:

```java
int[] numbers = {5, 12, 8, 130, 44};
int[] filtered = java.util.Arrays.stream(numbers)
    .filter(n -> n > 13)
    .toArray(); // [130, 44]
```

## Mapping Arrays

Use streams to map:

```java
int[] numbers = {1, 4, 9, 16};
int[] roots = java.util.Arrays.stream(numbers)
    .map(Math::sqrt)
    .mapToInt(d -> (int) d)
    .toArray(); // [1, 2, 3, 4]
```

Or double values:

```java
int[] numbers = {1, 4, 9, 16};
int[] doubles = java.util.Arrays.stream(numbers)
    .map(n -> n * 2)
    .toArray(); // [2, 8, 18, 32]
```

## Reducing Arrays

Sum elements:

```java
int[] numbers = {1, 2, 3, 4};
int sum = java.util.Arrays.stream(numbers).reduce(0, Integer::sum); // 10
```

## Checking All/Some Elements

Check if all elements match a condition:

```java
int[] numbers = {1, 30, 39, 29, 10, 13};
boolean allBelow40 = java.util.Arrays.stream(numbers).allMatch(n -> n < 40); // true
```

Check if any element matches a condition:

```java
int[] numbers = {1, 2, 3, 4, 5};
boolean hasEven = java.util.Arrays.stream(numbers).anyMatch(n -> n % 2 == 0); // true
```

## Iterating Over Arrays

Traditional for loop:

```java
String[] fruits = {"apple", "banana", "orange"};
for (int i = 0; i < fruits.length; i++) {
    System.out.println(fruits[i]);
}
```

Enhanced for loop:

```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

ForEach with streams:

```java
java.util.Arrays.stream(fruits).forEach(System.out::println);
```

## Checking Array Type

Check if an object is an array:

```java
Object obj = new String[]{"apple", "banana"};
boolean isArray = obj.getClass().isArray(); // true
```

## Filling Arrays

Fill all elements with a value:

```java
int[] numbers = new int[5];
java.util.Arrays.fill(numbers, 0); // [0, 0, 0, 0, 0]
```

Fill part of an array:

```java
int[] numbers = {1, 2, 3, 4, 5};
java.util.Arrays.fill(numbers, 1, 3, 0); // [1, 0, 0, 4, 5]
```

## Flattening Arrays

Java does not have a built-in `flat()` for arrays, but you can flatten with streams:

```java
int[][] nested = {{1, 2}, {3, 4}};
int[] flat = java.util.Arrays.stream(nested)
    .flatMapToInt(java.util.Arrays::stream)
    .toArray(); // [1, 2, 3, 4]
```

## Creating Arrays from Collections

Convert a collection to an array:

```java
java.util.List<String> list = java.util.Arrays.asList("a", "b", "c");
String[] array = list.toArray(new String[0]);
```

## Getting Array Indices and Values

Iterate with indices:

```java
String[] fruits = {"a", "b", "c"};
for (int i = 0; i < fruits.length; i++) {
    System.out.println("index: " + i + ", value: " + fruits[i]);
}
```

---