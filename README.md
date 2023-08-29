# Linked List Implementation

This code defines a basic linked list data structure with essential methods. It provides functionality for adding, removing, and manipulating nodes in the linked list.

## Usage

This LinkedList project contains two factory function where  `LinkedList` factory function represent the full list and `Node` contains a value property and a link to the nextNode.

```
list.append(value);      // Add a node with value to the end of the list
list.prepend(value);     // Add a node with value to the beginning of the list
list.size();             // Get the total number of nodes in the list
list.getHead();          // Get the value of the first node in the list
list.getLast();          // Get the value of the last node in the list
list.at(index);          // Get the node value at the given index
list.pop();              // Remove and return the last node's value
list.contains(value);    // Check if the list contains a node with the given value
list.find(value);        // Find the index of the first node with the given value
list.toString();         // Print the list values as a string
list.insertAt(value, index);  // Insert a new node with value at the given index
list.removeAt(index);    // Remove the node at the given index
```

## Example Usage

```
const list = LinkedList();
list.append(5);
list.append(1);
list.append(6);
list.append(3);
list.append(8);
list.prepend(9);
list.size();
list.getHead();
list.getLast();
list.at(2);
list.pop();
list.contains(1);
list.find(1);
list.toString();
list.insertAt(10, 2);
list.removeAt(2);
```

Below is the console's Output

```
size(): 7
getHead(): 9
getLast() 8
at(2): { value: 6, next: { value: 3, next: { value: 8, next: null } } }
pop(): { value: 8, next: null }
contains(1): true
find(1): 1
toString(): 9 -> 5 -> 1 -> 6 -> 3 -> 10 -> NULL
{ value: 9, next: { value: 5, next: { value: 1, next: [Object] } } }
```
