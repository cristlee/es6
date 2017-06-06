// try you best to use const and let instead of var
const PI = 3.14
for(let i=1; i<=3; i++){
    setTimeout(() => {console.log(i)}, 1000);
}

// demo this in arrow function
let circle = {
    id: 9527,
    show_articles: function() {setTimeout(() => {
        console.log(this.id)
        console.log('articles')
    }, 1000)}
}
circle.show_articles()

// demo function arguments
let old_function = function(a:number, b:number){
    console.log(arguments)
    console.log(a)
    console.log(b)
}

// arrow functions, rest operator
let displayColors = (message: string='default message', ...colors:string[]) => {
    for(let i in colors){
        console.log(i)
        console.log(colors[i])
    }
}

// spread operator
let colors = ['red','green','blue']
displayColors('list colors', ...colors)

// object literal
let firstname = 'crist'
let lastname = 'lee'
let person = {
    firstname,
    lastname
}
function createPerson(firstname:string, lastname:string, age:number){
    let fullname = firstname + ' ' + lastname
    return {fullname, firstname, lastname, is_senior(){return age>30}} 
}
let p = createPerson('crist', 'lee', 30)
console.log(person.firstname)
console.log(person.lastname)
console.log(p.is_senior())
let ln = 'last name'
let crist = {
    'first name': 'crist',
    [ln]: 'lee'
}
console.log(crist)
console.log(crist['last name'])

// destructuring array and objects
let c = ['crist', 'lee', 28]
let [fn, lna, age, gender='Male'] = c
console.log(gender)
let [, lna2, ] = c
console.log(lna2)
let [fn3, ...other] = c
console.log(fn3)
console.log(other)


