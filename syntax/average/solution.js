average = (...nums) => {
  return nums && nums.length ? nums.reduce((accu, num) => accu + num) / nums.length : 0;
};

console.log(average(2, 2, 2));
console.log(average(0, 10, 5));
console.log(average());
