
const countFactors = async n => {

    console.log(`Counting factors of ${n}`)

    if (n === 0)
        throw new Error("Zero has no factors");

    let count = 2;
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            count++;
        }
    }

    console.log(`Counting factors of ${n} is done`)

    return count;
}

const pickPrimes = async (...nums) => {

    console.log(`Checking for priems and counting`)
    let primeCount = 0;

    for (let n of nums) {
        try {
            let c = await countFactors(n);

            if (c == 2) {
                console.log(`${n} is Prime`)
                primeCount++;
            } else {
                console.log(`${n} is Composite with ${c} factors`)
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    console.log(`Checking for priems and counting is finished`)
    return primeCount;
}

pickPrimes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,0, 11, 12, 13, 14, 15).then(
    pc =>console.log(`Total Number of Primes are ${pc}`)
);
