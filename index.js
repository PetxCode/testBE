// // for (let i = 10; i >= 0; i--) {
// //   console.log(i);
// // }

// // let data = [1, 5, 7, 10];

// // let data2 = { name: "Peter", score: 9 };

// // for (let i = 0; i <= data.length - 1; i++) {
// //   console.log(i);
// //   //   console.log(data[i]);
// // }

// // for (let i of data2) {
// //   console.log(i);
// // }

// // for (let i in data2) {
// //   console.log(data2[i]);
// //   //   console.log(i);
// // }

// // Amaka ===> akamA

// const changeWord = (str) => {
//   let wrd = "";
//   //   for (let i = 0; i < 5; i++) {
//   //     // console.log(str[i]);
//   //     wrd = str[i] + wrd;
//   //   }
//   for (let i of str) {
//     wrd = i + wrd;
//   }

//   return wrd;
// };

// console.log(changeWord("Amaka")); // akamA

// // let me = "Peter";
// // me = "Lizzy";

// // console.log(me);

// const prompt = require("prompt-sync")();

// let input = prompt("Please enter your name: ");

// console.log("welcome back ", input);

const main = (cb) => {
  let name = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Lizzy" },
  ];
  let timer = setTimeout(() => {
    cb(null, name);
    clearTimeout(timer);
  }, 0);
};

console.log("Tasks starting");
console.log("Tasks starting..");
main((err, res) => {
  if (err) throw err;
  //   console.log(res);
  //   let data = res;
  main((err, res) => {
    if (err) throw err;

    // console.log(res[1]);
    main((err, res) => {
      if (err) throw err;
      console.log(res[1].name);
    });
  });
});
console.log("Tasks ended..");
