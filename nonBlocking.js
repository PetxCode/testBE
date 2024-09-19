const dontBlock = (time) => {
  console.log("I am running...");

  const timer = setTimeout(() => {
    console.log("Amaka is a girl");
    clearTimeout(timer);
  }, time * 1000);
};

module.exports = dontBlock;
