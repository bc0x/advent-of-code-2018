const parse = require("../dataLoader").parse;

const day3part1 = (data) => {
  const claims = data.split("\r\n");
  const drawn = {};
  for(let claim of claims){
    // #1 @ 1,3: 4x4
    const [id, _, coord, dim] = claim.split(" ");
    const claimId = Number(id.slice(1))
    const [left, top] = coord.slice(0, -1).split(",").map(Number)
    const [width, height] = dim.split("x").map(Number);
    for(let x = left; x < left + width; x++){
      for(let y = top; y < top + height; y++){
        drawn[`${x}-${y}`] = drawn[`${x}-${y}`] ? drawn[`${x}-${y}`] + 1 : 1;
      }
    }
  }
  return Object.values(drawn).filter(coord => coord > 1).length
}

const day3part2 = (data) => {
  const claims = data.split("\r\n");
  const noOverlap = {};
  const drawn = {};
  for(let claim of claims){
    // #1 @ 1,3: 4x4
    const [id, _, coord, dim] = claim.split(" ");
    const claimId = Number(id.slice(1))
    const [left, top] = coord.slice(0, -1).split(",").map(Number)
    const [width, height] = dim.split("x").map(Number);
    noOverlap[claimId] = true;
    for(let x = left; x < left + width; x++){
      for(let y = top; y < top + height; y++){
        if(drawn[`${x}-${y}`]) {
          noOverlap[drawn[`${x}-${y}`]] = false;
          noOverlap[claimId] = false;
        }
        drawn[`${x}-${y}`] = claimId;
      }
    }
  }
  return Object.entries(noOverlap).filter(([_, noOverlap]) => noOverlap)[0][0]
}

const data = parse(`${__dirname}/data.txt`);
console.log(`Day 3 Part 1 -- ${day3part1(data)}`);
console.log(`Day 3 Part 2 -- ${day3part2(data)}`);
