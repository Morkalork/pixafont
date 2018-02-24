const pixafont = require('./index');

const args = process
  .argv
  .slice(2);

const result = pixafont(args[0], parseInt(args[1]) || 0, parseInt(args[2]) || 0);

for (let row = 0; row < 5; row++) {
  const line = [];
  for (let col = 0; col < 5; col++) {
    if (result.find((coordinate) => coordinate[0] === col && coordinate[1] === row)) {
      line.push('#');
    } else {
      line.push(' ');
    }
  }
  console.log(line.join(''));
}