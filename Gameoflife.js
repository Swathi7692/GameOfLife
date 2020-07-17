const prompt = require("prompt-sync")();

const r = prompt("Enter Row Size :");
const c = prompt("Enter Column Size :");
let world = [];
console.log("Enter input generation :");

for (let l = 0; l < r; l++) {
  let row = [];

  for (let m = 0; m < c; m++) {
    const ip = prompt("");
    row.push(ip);
  }
  world.push(row);
}

let copy = JSON.parse(JSON.stringify(world));

function life() {
  for (var x = 0; x < r; x++) {
    for (var y = 0; y < c; y++) {
      var count = countNearby(x, y);

      if (world[x][y] == 0) {
        if (count == 3) {
          world[x][y] = 1;
        }
      } else {
        if (count < 2 || count > 3) {
          copy[x][y] = "-";
        } else {
          copy[x][y] = "x";
        }
      }
    }
  }
  world = copy;
}

function countNearby(x, y) {
  var count = 0;

  counter(x - 1, y - 1);
  counter(x - 1, y);
  counter(x - 1, y + 1);
  counter(x, y - 1);
  counter(x, y + 1);
  counter(x + 1, y - 1);
  counter(x + 1, y);
  counter(x + 1, y + 1);

  function counter(x, y) {
    if (x > 0 && x < r && y > 0 && y < c) {
      if (copy[x][y] == "x") count++;
    }
  }

  return count;
}

console.log("Old Generation");
for (let item of world) {
  console.log(item);
}
console.log("New Generation");
for (let item of copy) {
  console.log(item);
}

