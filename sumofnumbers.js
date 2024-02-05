const numbers = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumFor(numbers));

function sumWhile(nums) {
  let total = 0;
  let index = 0;
  while (index < nums.length) {
    total += nums[index];
    index++;
  }
  return total;
}
console.log(sumWhile(numbers));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(numbers));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, value) { return memo + value; });
}
console.log(sumTheSimpleWay(numbers));
