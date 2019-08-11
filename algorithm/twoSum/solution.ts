const twoSum = (arr: number[], goal: number) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const restIndex = hash[goal - arr[i]];
    if (restIndex != null) {
      return [restIndex, i];
    }
    hash[arr[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
