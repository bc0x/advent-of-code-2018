const parse = require("../dataLoader").parse;

const day2part1 = (data) => {
  const arr = data.split("\n").reduce((acc, string) => {
    const seen = {};
    for (let char of string) {
      seen[char] = seen[char] ? seen[char] + 1 : 1;
    }
    if (Object.values(seen).includes(2)) acc[0]++;
    if (Object.values(seen).includes(3)) acc[1]++;
    return acc;
  }, [0, 0])
  return arr[0] * arr[1];
}

const day2part2 = (data) => {
  const arr = data.split("\n");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const wordOne = [...arr[i]];
      const wordTwo = [...arr[j]];
      const compare = wordOne.reduce((acc, char, idx) => {
        acc[0] = wordTwo[idx] === char ? acc[0] : acc[0] + 1;
        acc[1] += char;
        return acc;
      }, [0, ''])

      if(compare[0] <= 1){
        return compare[1];
      }

    }
  }
}

const data = parse(`${__dirname}/data.txt`);
console.log(`Day 1 Part 1 -- ${day2part1(data)}`);
console.log(`Day 1 Part 1 -- ${day2part2(data)}`);

