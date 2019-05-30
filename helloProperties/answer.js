function helloProperties(obj) {
  return Object.keys(obj).map(el => (el = 'Hello-' + el));
}

console.log(helloProperties({ prop1: 'v1', prop2: 'v2' }));
