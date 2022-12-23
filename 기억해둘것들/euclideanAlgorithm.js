function euclidGCD(a, b) {
    while(1) {
        if(a%b === 0) break;
        let tmp = b;
        b = a%b;
        a = tmp;
    }
    return b;
}

console.log(euclidGCD(12, 15));

