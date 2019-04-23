average = (...nums) => {
  const somme = nums.reduce((accu, num) => accu + num);
  return nums && nums.length ? somme / nums.length : 0;
};

console.log(average(2, 2, 2));
console.log(average(0, 10, 5));
