
/**
 * @param {number} number 
 */
function isPrime(number){
    if(number < 2) return false 
    if(number === 2 || number === 3) return true
    for(let i = 2; i <= Math.sqrt(number); i++)
        if(number % i == 0) return false
    return true
}
/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function nextPrime(number){
    let result = true
    let i = parseInt(number) + 1
    do {
        result = isPrime(i)
        i++
    }while(!result);
    let newPrimeNumber = i - 1
    return newPrimeNumber
}

/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function previousPrime(number){
    let result = true
    let i = parseInt(number) - 1
    do {
        if(i < 2) return -1
        result = isPrime(i)
        i--
    }while(!result);
    let newPrimeNumber = i + 1
    return newPrimeNumber
}


console.log(
    nextPrime(1000003333333333),
    previousPrime(1)
);
