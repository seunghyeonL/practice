function randomTimePrint(string) {
    setTimeout(() => console.log(string), Math.floor(Math.random() * 100) + 1)
}

randomTimePrint('a');
randomTimePrint('b');
randomTimePrint('c');