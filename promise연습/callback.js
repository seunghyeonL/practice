function randomTimePrint(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}

randomTimePrint("a", () => {
  randomTimePrint("b", () => {
    randomTimePrint("c", () => {});
  });
});
