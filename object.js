// obj is collection properties

let person = {
    firstName: "Bhavya Sree ",
    lastName: "Kodali",
    age:26,
    fullName: function(){
        return this.firstName + this.lastName
    }
}

console.log(person.firstName)
console.log(person['lastName'])

person.gender = "Female"
console.log(person)

for(let keys in person){
    console.log(person[keys])
}

console.log(person.fullName())
