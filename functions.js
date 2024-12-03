function add(a,b){
    return a+b
}
console.log(add(2,3))

//Anonymous function, sub - variable and method name
let sub = (c,d)=>(c-d)
console.log(sub(10,3))

// scope of let keyword is global level and block level
// scope of var keyword is global level and function level

let wish = "Morning"
if (1==1){
    let wish = "Evening"
}
console.log(wish)



var wishes = "Morning"
if (1==1){
    var wishes = "Evening"
}
console.log(wishes)

// const variable cant be modofoed
const wis = "Morning"
if (1==1){
     wis = "Evening"
}
console.log(wis)