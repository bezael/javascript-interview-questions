interface ListNode {
  val: number;
  next: ListNode;
}

const addTwoNumbers = (a: ListNode, b: ListNode) => {
  // * it's important to store the base adress otherwise we will loose it
  const baseAdresse: ListNode = { val: 0, next: null };
  let node = baseAdresse;
  let rest = false;

  while (a || b) {
    let val = ((a && a.val) || 0) + ((b && b.val) || 0) + +rest;
    if (val >= 10) {
      val = val % 10;
      rest = true;
    } else {
      rest = false;
    }

    node.next = { val, next: null };
    node = node.next;
    a = a && a.next;
    b = b && b.next;
  }
  if (rest) {
    // * add a node if there's a rest
    node.next = { val: 1, next: null };
    node = node.next;
  }
  return baseAdresse.next;
};

console.log(
  addTwoNumbers(
    { val: 2, next: { val: 4, next: { val: 3, next: null } } },
    { val: 5, next: { val: 6, next: { val: 4, next: null } } },
  ),
); // 7 -> 0 -> 8
