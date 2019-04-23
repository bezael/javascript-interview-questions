function isTwin(a, b) {
  return a
    .toLowerCase()
    .split('')
    .sort()
    .join('') ==
    b
      .toLowerCase()
      .split('')
      .sort()
      .join('')
    ? true
    : false;
}

console.log('same    :', isTwin('Aaaba', 'baaaa'));
console.log('not same:', isTwin('Aaaba', 'baaaa'));
