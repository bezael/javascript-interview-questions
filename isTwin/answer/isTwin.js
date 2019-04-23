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

console.log(isTwin('Aaaba', 'baaaa'));
