
const countFactors = async n => {

    console.log(`Counting factors of ${n}`)

    if(n===0)
        throw new Error("Zero has no factors");

    let count=2;
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            count++;
        }
    }

    console.log(`Counting factors of ${n} is done`)

    return count;
}

countFactors(1024).then(
    count => console.log(`No of factors of 1024 : ${count}`),
    err => console.log(err.message)
);

countFactors(4617).then(
    count => console.log(`No of factors of 4617 : ${count}`),
    err => console.log(err.message)
);

countFactors(0).then(
    count => console.log(`No of factors of 0 : ${count}`),
    err => console.log(err.message)
);
