// // word ====> wo-r-**d!!!

// const { TfiRuler } = require("react-icons/tfi");

// let x = ["*", "-", "!"];
// let xx = "wo-r-**d!!!";
// let wx = xx.split("");

// let w = "*";

// console.log(
//   wx
//     .filter((el) => {
//       return !x.includes(el);
//     })
//     .join("")
// );

// const helper = (str) => {
//   let xa = str.toLowerCase().replace(/[\W]/g, "");
//   let x = {};

//   for (let i of xa) {
//     x[i] = ++x[i] || 1;
//   }

//   return x;
// };

// const main = (a, b) => {
//   //   let x = ["*", "-", "!"];
//   //   let c = b.split("");

//   //   let d = c.filter((el) => {
//   //     return !x.includes(el);
//   //   });

//   let textA = helper(a);
//   let textB = helper(b);

//   if (Object.keys(textA).length !== Object.keys(textB).length) return false;

//   for (let i in textA) {
//     if (textA[i] !== textB[i]) return false;
//   }

//   return true;
// };

// console.clear();
// console.log(main("worD!", "O-w-r-**D!!!"));

// // console.log("po-r-**d!!!");

// // REGEX

// callBack

// const main = (cb) => {
//   setTimeout(() => {
//     cb();
//     clearTimeout();
//   }, 0);
// };

// main(() => {
//   console.log("I am a callBack: ", x);
// });
// let x = "Sixus";

// let promise = new Promise((resolve, reject) => {
//   if (true) {
//     return resolve("I went through");
//   } else {
//     return reject("I was rejected");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res, name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally called");
//   });

// let name = "Isreal";

// const promise = Promise.reject("hello world");

// promise
//   .catch((res) => {
//     console.log(res);
//   })

//   .finally(() => {
//     console.log("finally called");
//   });

// const main = (x) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("This is the Call");
//     }, x);
//   });
// };

// main(3000)
//   .then((res) => {
//     console.log("got this in 3secs: ", res);
//     return res;
//   })
//   .then((res) => {
//     console.log("Another call", res);
//   });

// let resolve = Promise.all([main(3000), main(500), main(4000)]);

// resolve.then((res) => {
//   console.log(res);
// });

// console.log(resolve.then(() => {

// }));

[{ id: 1, email: "peter@test.com", pwd: "peter" }];

const userAuth = () => {
  let name = "Peter";
  let pwrd = "Peter";

  return new Promise((resolve, reject) => {
    if (name === "Peter" && pwrd === "Peter") {
      return resolve(name);
    } else {
      return reject("invalid credentials");
    }
  });
};

const loginUser = (user) => {
  return Promise.resolve(`Welcome back ${user}`);
};

userAuth()
  .then((res) => {
    return res;
  })
  .then((res) => {
    return loginUser(res);
  })
  .then((el) => {
    console.log(el);
  })
  .catch((err) => {
    console.log(err);
  });
