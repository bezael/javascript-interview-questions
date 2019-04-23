function isTwin(a, b) {
  const toLowerSort = str =>
    str
      .toLowerCase()
      .split('')
      .sort()
      .join();
  return toLowerSort(a) == toLowerSort(b) ? true : false;
}

console.log('same    :', isTwin('Aaaba', 'baaaa'));
console.log('not same:', isTwin('Aaaba', 'baaaa'));
