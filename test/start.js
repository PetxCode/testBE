const addUp = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
};
const addUp1 = (n) => {
  let arr = 0;
  for (let i = 0; i < n; i++) {
    arr += i;
  }
  return arr;
};
const addUp2 = (n) => {
  let arr = (n * (n - 1)) / 2;

  return arr;
};

console.time("read");
let start = performance.now();
console.log(addUp(6));
console.log(addUp1(6));
console.log(addUp2(6));
console.timeEnd("read");

let end = performance.now();
console.log(end - start);

const logMath = (n) => {
  for (let i = 0; i < Math.max(n, 5); i++) {
    console.log(i);
  }
};

logMath(9);
