function isOnEvenPosition(table, value) {
  return table.findIndex(item => item == value) % 2 == 0;
}

console.log('not even   :', isOnEvenPosition([5, 6, 2, 3], 6));
console.log('even       :', isOnEvenPosition([5, 6, 2, 3], 2));
console.log('not present:', isOnEvenPosition([5, 6, 2, 3], 9));
