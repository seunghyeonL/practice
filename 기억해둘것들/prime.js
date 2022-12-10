// n이 소수인지 판별
function isPrime(n) {     
    if(n === 1) return false;
    if(n === 2) return true;
    
    let result = true;   
    if(n%2 === 0) result = false;
    for(let i=3 ; i<=Math.sqrt(n) ; i = i+2) {
        if(n%i === 0) {
            result = false;
            break;
        }
    }
    return result;
}

// n이하의 소수 array 반환
function makePrimeSet(n) {
    if(n <= 1) return [];
    if(n === 2) return [2];
    let result = [2];
    for(let i=3 ; i<=n ;i+=2) {
        let primeCheck = true;
        for(let el of result) {
            if(i%el === 0) {
                primeCheck = false;
                break;
            }
        }
        if(primeCheck) result.push(i);
    }

    return result;
}
