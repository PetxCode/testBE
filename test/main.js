// // // // // // console.clear();

// // // // // // let dbNumb = [1, 2, 3, 4, 5];

// // // // // // let db = [
// // // // // //   { id: 1, name: "Peter" },
// // // // // //   { id: 2, name: "John" },
// // // // // //   { id: 3, name: "David" },
// // // // // //   { id: 4, name: "Emily" },
// // // // // //   { id: 5, name: "Michael" },
// // // // // // ];

// // // // // // const main = (cb, value) => {
// // // // // //   let timer = setTimeout(() => {
// // // // // //     cb(null, value);
// // // // // //     clearTimeout(timer);
// // // // // //   }, 0);
// // // // // // };

// // // // // // main((err, data) => {
// // // // // //   if (err) throw err;

// // // // // //   let value = data;
// // // // // //   main((err, data) => {
// // // // // //     if (err) throw err;
// // // // // //     let res = db.filter((el) => {
// // // // // //       return el.id === value;
// // // // // //     });

// // // // // //     main((err, result) => {
// // // // // //       if (err) throw err;

// // // // // //       console.log(res[0].name);
// // // // // //     });
// // // // // //   });
// // // // // // }, 3);

// // // // // let promise = new Promise((resolve, reject) => {
// // // // //   console.log("running Promises!!!");
// // // // //   const data = { name: "Peter" };
// // // // //   if (data !== null) {
// // // // //     return resolve(data);
// // // // //   } else {
// // // // //     return reject("promise was rejected");
// // // // //   }
// // // // // });

// // // // // promise
// // // // //   .then((res) => {
// // // // //     // console.log(res);

// // // // //     return res;
// // // // //   })
// // // // //   .then((res) => {
// // // // //     console.log(res.name);
// // // // //   })
// // // // //   .catch((err) => console.log(err))
// // // // //   .finally(() => console.log("cleaning up..."));

// // // // // let prom = Promise.reject("Promise was accepted");

// // // // // prom.catch((res) => {
// // // // //   console.log(res);
// // // // // });

// // // // const userAuth = () => {
// // // //   let email = "peter@test.com";
// // // //   let password = "peter@test.com";
// // // //   return new Promise((resolve, reject) => {
// // // //     let check = email === "peter@test.com" && password !== "peter@test.com";

// // // //     if (check) {
// // // //       return resolve(email);
// // // //     } else {
// // // //       return reject("invalid credentials");
// // // //     }
// // // //   });
// // // // };

// // // // const authComplete = (auth) => {
// // // //   return Promise.resolve(`Welcome back ${auth}`);
// // // // };

// // // // console.clear();

// // // // // userAuth()
// // // // //   .then((res) => {
// // // // //     return res;
// // // // //   })
// // // // //   .then((res) => {
// // // // //     return authComplete(res);
// // // // //   })
// // // // //   .then((res) => {
// // // // //     console.log(res);
// // // // //   })
// // // // //   .catch((err) => {
// // // // //     console.log(err);
// // // // //   });

// // // // const getUser = async () => {
// // // //   let res = await userAuth();
// // // //   let result = await authComplete(res);

// // // //   console.log(result);
// // // // };

// // // // getUser()
// // // //   .then((res) => {
// // // //     console.log(res);
// // // //   })
// // // //   .catch((err) => {
// // // //     console.log(err);
// // // //   });

// // // let word = "CodeRabbit";

// // // const reverse = (x) => {
// // //   let reverse = "";

// // //   //   for (let i = 0; i < x.length; i++) {
// // //   //     reverse = x[i] + reverse;
// // //   //   }

// // //   for (let i of x) {
// // //     reverse = i + reverse;
// // //   }

// // //   return reverse;
// // // };

// // // console.log(reverse(word));

// // // const numb = (x) => {
// // //   let y = x.toString().split("").reverse().join("");

// // //   return parseFloat(y) * Math.sign(x);
// // // };

// // // console.log(numb(-2));

// // // const maxChar = (str) => {
// // //   let x = {};

// // //   for (let i of str) {
// // //     x[i] = ++x[i] || 1;
// // //   }

// // //   let char = "";
// // //   let numb = 0;
// // //   for (let i in x) {
// // //     // console.log(x[i]);
// // //     if (x[i] > numb) {
// // //       numb = x[i];
// // //       char = i;
// // //     }
// // //   }

// // //   return char;
// // // };

// // // console.log(maxChar("Peter"));

// // // const arrTest = (arr, x) => {
// // //   let res = [];
// // //   let i = 0;

// // //   while (i < arr.length) {
// // //     res.push(arr.slice(i, i + x));

// // //     i += x;
// // //   }
// // //   return res;
// // // };

// // // let arr = [1, 2, 5, 7, 3, 9, 4];
// // // let x = 3;
// // // console.log(arrTest(arr, x));

// // const capWrd = (str) => {
// //   let wrd = str.split(" ");
// //   let res = [];

// //   //   return wrd.map((el) => el[0].toUpperCase().concat(el.slice(1))).join(" ");
// //   for (let i of wrd) {
// //     res.push(i[0].toUpperCase() + i.slice(1));
// //   }

// //   return res.join(" ");
// // };

// // console.log(capWrd("this is the boy's ball"));

// // const main = (cb) => {
// //   setTimeout(() => {
// //     cb(null, "Awesome");

// //     clearTimeout();
// //   }, 0);
// // };

// // main((err, res) => {
// //   console.log("This is it", res);
// // });

// // let main = new Promise((resolve, reject) => {
// //   if (true) {
// //     setTimeout(() => {

// //     },)
// //   } else {
// //     return reject("This is false");
// //   }
// // });

// // main
// //   .then((res) => {
// //     console.log(res, name);
// //   })
// //   .catch((err) => console.log(err));

// // let name = "Peter";

// const main = (x) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("API reached");
//     }, x);
//   });
// };

// // main(3000).then((res) => {
// //   console.log(res);
// // });

// // let mainAPI = Promise.race([main(4000), main(2000), main(500)]);

// // mainAPI
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .finally(() => {
// //     console.log("API finished");
// //   });

// const userAuth = () => {
//   let email = "peter";
//   let password = "peter";

//   return new Promise((resolve, reject) => {
//     if (email === "peter" && password === "peter") {
//       return resolve(email);
//     } else {
//       return reject("credential required");
//     }
//   });
// };

// const loginUser = (user) => {
//   return Promise.resolve(`Welcome ${user}`);
// };

// userAuth()
//   .then((res) => {
//     return res;
//   })
//   .then((res) => {
//     return loginUser(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// const arrTest = (arr, x) => {
//   let res = [];
//   let i = 0;

//   while (i < arr.length) {
//     res.push(arr.slice(i, i + x));
//     i = i + x;
//   }

//   return res;
// };

// console.log(arrTest([1, 2, 4, 2, 0, 9], 2));

const char = (str) => {
  let x = {};

  for (let i of str) {
    if (x[i]) {
      x[i] += 1;
    } else {
      x[i] = 1;
    }
  }

  let numb = 0;
  let char = "";

  for (let [xx, yy] of Object.entries(x)) {
    if (yy > numb) {
      numb = yy;
      char = xx;
    }
  }

  return { numb, char };
};

console.log(char("amaka"));
