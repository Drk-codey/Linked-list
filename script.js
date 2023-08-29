function Node(value = null, next = null) {
  return {
    value: value,
    next: next,
  };
}

function LinkedList() {
  return {
    head: null,

    // Add New Node containing (value) to the end of the list
    append(value) {
      // Create newNode object with property data
      let newNode = Node(value);

      // if head is null, head equals New node
      // else tail next equals New node
      if (this.head == null) {
        this.head = newNode;
      } else {
        let tail = this.head;
        while (tail.next != null) {
          tail = tail.next;
        }
        tail.next = newNode;
      }
    },

    // Add New Node to the start of the list
    prepend(value) {
      let newHead = Node(value);
      newHead.next = this.head;
      this.head = newHead;
    },

    // Return total number of nodes in the list
    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        count++;
        current = current.next;
      }
      console.log("size():", count);
      return count;
    },

    // Return the first node in the list
    getHead() {
      let currentHead = this.head.value;
      console.log("getHead():", currentHead);
      return currentHead;
    },

    // Return the last node in the list
    getLast() {
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next !== null) {
          lastNode = lastNode.next;
        }
      }
      console.log("getLast()", lastNode.value);
      return lastNode.value;
    },

    // Return the node at the given index
    at(index) {
      let current = this.head;

      if (index == 0) {
        return this.head;
      }

      while (index--) {
        if (current.next != null) {
          current = current.next;
        } else {
          // Return error if index is out of bound
          throw Error("Index out of bound");
        }
      }

      console.log("at(index):", current);
      return current;
    },

    // Remove last element from the list
    pop() {
      if (!this.head) {
        return null; // List is empty
      }

      if (!this.head.next) {
        const removedValue = this.head.value;
        this.head = null;
        return removedValue;
      }

      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }

      const removedValue = current.next.value;
      current.next = null;

      console.log('pop():', current)
      return removedValue;
    },

    // Return true if the passed in value is in
    // the list otherwise return false
    contains(value) {
      let node = this.head;
      while (node) {
        if (node.value === value) {
          console.log("contains(" + value + "):", true);
          return true;
        }
        node = node.next;
      }
      console.log("contains(" + value + "):", false);
      return false;
    },

    // return the index of the node or null if not found
    find(value) {
      let index = 0;
      let node = this.head;
      while (node) {
        if (node.value === value) {
          console.log("find(value):", index);
          return index;
        }
        index++;
        node = node.next;
      }
      console.log("Value Not found");
      return null;
    },

    // Print all list value as strings
    toString() {
      let node = this.head;
      let string = "";
      while (node) {
        string += node.value + " -> ";
        node = node.next;
      }
      string += "NULL";
      console.log(string);
    },

    // Insert a new node with the provided
    // value at the given index
    insertAt(newValue, index) {
      let node = Node(newValue);
      let current, previous;

      // current = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
        // return;
      } else {
        current = this.head;
        var count = 0;

        //Iterate over list to insert in position given
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }

        // Adding an element
        node.next = current;
        previous.next = node;
      }
    },

    // Remove the node at the given index
    removeAt(index) {
      let node = this.head;
      if (index === 0) {
        node = node.next;
        this.head = node;
      }
      while (--index) {
        if (node.next !== null) {
          node = node.next;
        }
      }
      node.next = node.next.next;
    },
  };
}

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

console.log(list.head);
