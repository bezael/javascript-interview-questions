function isTwin(a, b) {
  const toLowerSort = str =>
    str
      .toLowerCase()
      .split('')
      .sort()
      .join();
  return toLowerSort(a) == toLowerSort(b);
}

console.log('same    :', isTwin('Aaaba', 'baaaa'));
console.log('not same:', isTwin('Aaaba', 'baawaa'));
