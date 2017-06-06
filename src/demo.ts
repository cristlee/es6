for(let i=1; i<=10; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

let getValue = function (value:number=10, bonus=5) {
    console.log(value+bonus)
    console.log(arguments.length)
}

getValue(undefined, 6)

let displayColors = function(message: string, ...colors:string[]){
    console.log(message)
    for(let i in colors){
        console.log(i)
        console.log(arguments)
        console.log(colors[i])
    }
}

let colors = ['red','green','blue']
displayColors('message', ...colors)
