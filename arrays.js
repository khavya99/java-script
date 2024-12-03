let marks = Array(6)
marks = new Array(20,40,35)
console.log(marks)

var numb = new Array(20,40,35)
var arr = [10, 22, 44, 55]
console.log(arr[2])

// pushes at end of array - [ 10, 22, 44, 55, 99 ]
arr.push(99)
console.log(arr)

// pops the last element of array - [ 10, 22, 44, 55 ]
arr.pop()
console.log(arr)

// insert element at the beginning of array - [ 77, 10, 22, 44, 55 ]
arr.unshift(77)
console.log(arr)

console.log(arr.indexOf(77))
console.log(arr.includes(10))

// sum of elements in array
let sum_of_elements =0
for(let i=0; i<arr.length; i++)
{
    sum_of_elements+=arr[i]
    console.log(i + " element is: " + arr[i])
}
console.log(sum_of_elements)

// reduce , sum is initialized to 0
let total = arr.reduce((sum, element)=> sum + element, 0)
console.log(total)

//  filter 
var even_numbers = []
even_numbers = arr.filter((element)=> element%2==0, [])
console.log(even_numbers)

// map
arr.map(element=> element.toString())
console.log(arr)

let fruits = ['m-apple','k-banana','coo']
console.log(fruits.sort())

let numb_array = [11,3, 5, 10, 0]
console.log(numb_array.sort((a,b)=>a-b))
console.log(numb_array.sort((a,b)=>b-a))