class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Time: O(n)
// Space: O(n)
// const linkedListCycle = (head) => {
//   const nodes = new Set();
//   let current = head;
//   while (current !== null) {
//     if (nodes.has(current)) return true;
//     nodes.add(current);
//     current = current.next;
//   }
//   return false;
// };

// Time: O(n)
// Space: O(1)
const linkedListCycle = (head) => {
  let slow = head;
  let fast = head;
  let firstIteration = true;

  while (fast !== null || fast.next !== null) {
    if (slow === fast && !firstIteration) return true;
    fast = fast.next.next;
    slow = slow.next;
    firstIteration = false;
  }

  return false;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle;

console.log(linkedListCycle(a));
