const printTriangle = n => {
  let triangle = '';
  for (let i = 1; i <= n; i++) {
    const line = [...Array(n - i).fill(' '), ...Array(i * 2 - 1).fill('A')];
    triangle += line.join('') + (i == n ? '' : '\n');
  }
  console.log(triangle);
};

printTriangle(5);
