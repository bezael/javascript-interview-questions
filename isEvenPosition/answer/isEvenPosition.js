function isOnEvenPosition(table, value) {
  for (let i = 0; i < table.length; i++) {
    if (table[i] == value && i % 2 == 0) {
      return true;
    }
  }
  return false;
}

console.log('not even:', isOnEvenPosition([5, 6, 2, 3], 6));
console.log('even    :', isOnEvenPosition([5, 6, 2, 3], 2));
