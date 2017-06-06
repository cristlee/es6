for(let i=1; i<=10; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

let getValue = function (value:number=10, bonus=5) {
    console.log(value+bonus)
}

getValue(undefined, 6)
