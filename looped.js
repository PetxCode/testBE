let time = new Date().getTime();
// let myTime = ;
function JustWait(waitTime) {
  console.log(`waiting for ${waitTime} seconds`);

  while (new Date().getTime() < time + waitTime * 1000) {
    // console.log("running");
  }

  console.log("completed");
}

module.exports = JustWait;
