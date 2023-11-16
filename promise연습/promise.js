function randomTimePrint(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    });
  }, Math.floor(Math.random() * 100) + 1);
}

randomTimePrint("a")
  .then(() => {
    return randomTimePrint("b");
  })
  .then(() => {
    return randomTimePrint("c");
  });
