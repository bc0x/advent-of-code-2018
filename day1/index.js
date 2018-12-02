const parse = require("../dataLoader").parse;

const day1part1 = (data) => {
  const array = data.split("\n").map(Number);
  return array.reduce((acc, item) => (acc += item));
}

const day1part2 = (data) => {
  const array = data.split("\n").map(Number);
  let found = false;
  let frequency = 0;
  let frequencies = {};
  let idx = 0;
  while (!found) {
    frequency += array[idx];
    if (frequencies[frequency] !== undefined) {
      found = true;
      return frequency;
    }
    frequencies[frequency] = true;
    idx === array.length - 1 ? (idx = 0) : idx++;
  }
}

const data = parse(`${__dirname}/data.txt`);
console.log(`Day 1 Part 1 -- ${day1part1(data)}`);
console.log(`Day 1 Part 1 -- ${day1part2(data)}`);