// // let sentense = "this is the day that the lord has made";

// // let convertWord = (str) => {
// //   // step 1: convert str ---> arr
// //   let word = str.split(" ");

// //   //   step 2: get an individual word
// //   let result = [];
// //   let res = "";

// //   //   for (let i of word) {
// //   //   for (let i = 0; i < word.length; i++) {
// //   //     let x = word[i][0].toUpperCase().concat(word[i].slice(1));

// //   //     // result.push(x);
// //   //     res = res + " " + x;
// //   //   }

// //   return word
// //     .map((el) => {
// //       return el[0].toUpperCase().concat(el.slice(1));
// //     })
// //     .join(" ");

// //   //   return res.trim();

// //   //   return result.join(" ");
// // };
// // console.clear();
// // console.log(convertWord(sentense));

// // // console.log("convertWord".slice(7));

// const frequentAppearance = (str) => {
//   let wrd = str.toLowerCase();

//   let x = {};

//   for (let i of wrd) {
//     // if (x[i]) {
//     //   x[i] = x[i] + 1;
//     // } else {
//     //   x[i] = 1;
//     // }

//     // x[i] = x[i] + 1 || 1;
//     x[i] = ++x[i] || 1;
//   }

//   let numb = 0;
//   let char = "";

//   //   for (let [key, value] of Object.entries(x)) {
//   //     // console.log(key, value);
//   //     if (numb < value) {
//   //       numb = value;
//   //       char = key;
//   //     }
//   //   }

//   for (let i in x) {
//     if (numb < x[i]) {
//       numb = x[i];
//       char = i;
//     }
//   }

//   return `The most frequent occurrence of "${char}", with an appearance of "${numb}"`;
// };

// console.log(frequentAppearance("Amakakkkkeeeeeee"));

// // let x = {};
// // console.log(x);
// // x.name = "Amaka";
// // console.log(x);

let arr = [1, 3, 5, 2, 9, 7];

const main = (array, x) => {
  let result = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + x));
    i = i + x;
  }

  return result;
};

// console.log(main(arr, 1));

let a = "PEeter!@";
// console.log(a.toLowerCase().replace(/[\W]/g, ""));

const helper = (str) => {
  let aa = str.toLowerCase().replace(/[\W]/g, "");
  let ax = {};

  for (let i of aa) {
    ax[i] = ++ax[i] || 1;
  }

  return ax;
};

const read = (a, b) => {
  const textA = helper(a);
  const textB = helper(b);

  if (Object.keys(textA).length !== Object.keys(textB).length) return false;

  for (let i in textA) {
    if (textA[i] !== textB[i]) return false;
  }

  return true;
};

console.log(read("Peter!!", "terep"));

console.log("Peter".match(/[aeiou]/gi) ? "Peter".match(/[aeiou]/gi).length : 0);
const count = (str) => {
  let counted = 0;
  const x = ["a", "e", "i", "o", "u"];
  for (let i of str) {
    if (x.includes(i)) {
      counted++;
    }
  }

  return counted;
};

console.log(count("Thinking"));
