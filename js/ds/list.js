class ListNode {
  constructor(nextNode, data) {
    // this.previousNode = previousNode;
    this.nextNode = nextNode;
    this.data = data;
  }
}

class List {
  constructor() {
    this.startNode = null;
    this.size = 0;
  }

  isEmpty() {
    return this.startNode == null;
  }

  add(data) {
    if (this.isEmpty()) {
      this.startNode = new ListNode(null, data);
      return;
    }

    let lastNode = this.startNode;

    // to find last node
    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
    }

    lastNode.nextNode = new ListNode(null, data);
    this.size = this.size + 1;
  }

  remove(index) {
    if (this.isEmpty()) {
      return;
    }

    let currentNode = this.startNode;
    let previousNode = null;

    if (index == 0) {
      if (this.startNode.nextNode == null) {
        this.startNode = null;
      } else {
        this.startNode = this.startNode.nextNode;
      }

      this.size = this.size - 1;
      return;
    }

    for (let i = 0; currentNode.nextNode != null; i++) {
      if (i == index) {
        // dropping the inbetween node
        previousNode.nextNode = currentNode.nextNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.size = this.size - 1;
  }

  /**
   * Insert at a specific index in list
   */
  insertAt(index, data) {
    if (index == 0) {
      this.startNode = new ListNode(this.startNode, data);
      this.size = this.size + 1;
      return;
    }

    let currentNode = this.startNode;
    let previousNode = null;
    for (let i = 0; currentNode.nextNode != null; i++) {
      if (index == i) {
        const newNode = new ListNode(currentNode, data);

        previousNode.nextNode = newNode;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.size = this.size + 1;
  }

  toString() {
    const arr = [];
    let currentNode = this.startNode;
    while (currentNode.nextNode != null) {
      arr.push(`${currentNode.data}`);
      currentNode = currentNode.nextNode;
    }
    console.log(arr.join('->'));
  }
}

(function test() {
  const l = new List();

  l.add(0);
  l.add(1);
  l.add(2);
  l.add(3);
  l.insertAt(1, 'A');
  l.add(4);
  l.add(5);
  l.add(6);
  // l.insertAt(2, 'A');
  // l.insertAt(0, 'A');
  l.toString();
})();
