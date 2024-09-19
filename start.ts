let x: number = 173; // 371

const reverseNumber = (n: number): number => {
  return parseInt(n.toString().split("").reverse().join(""));
};

const reverseNumber1 = (n: number): number => {
  let str: string = n.toString();
  let x: string = "";
  for (let i of str) {
    x = i + x;
  }

  return parseInt(x);
};

// console.log(reverseNumber1(45));

const sumUp = (n: number): number => {
  let stopRun: number = n;
  let x: number = 0;

  while (stopRun > 0) {
    x = x + stopRun;
    stopRun--;
  }

  return x;
};

const sumUp1 = (n: number): number => {
  let x: number = 0;

  for (let i = 0; i <= n; i++) {
    x = x + i;
  }

  return x;
};

const sumUp2 = (n: number): number => {
  let x: Array<number> = [];

  for (let i = 0; i <= n; i++) {
    x.push(i);
  }

  return x.reduce((a: number, b: number): number => {
    return a + b;
  }, 0);
};

const sumUp3 = (n: number): number => {
  return (n * (n + 1)) / 2;
};

// let startReading: number = performance.now();
// console.log(sumUp(5));
// let endReading: number = performance.now();
// console.log(endReading - startReading);
console.clear();
// console.time("timer: ");
// console.log(sumUp(100000000000));
// console.timeEnd("timer: ");

// console.time("timer1: ");
// console.log(sumUp1(100000000000));
// console.timeEnd("timer1: ");

// console.time("timer2: ");
// console.log(sumUp2(1000000000));
// console.timeEnd("timer2: ");

// console.time("timer3: ");
// console.log(sumUp3(100000000000));
// console.timeEnd("timer3: ");

const printMax = (n: number): void => {
  for (let i = 1; i <= Math.max(10, n); i++) {
    console.log(i);
  }
};

const printMin = (n: number): void => {
  for (let i = 1; i <= Math.min(10, n); i++) {
    console.log(i);
  }
};

// console.log(printMax(9));
printMin(9);

// console.log(Math.max(3, 8));
