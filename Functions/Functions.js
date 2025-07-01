function sum(a, b) {
    return a + b 
}
console.log(sum(3, 5))


function uperCase(params) {
    return params.toUpperCase()    
}
console.log(uperCase('funiculer'))


function squareArray(arr) {
    return arr.map(num => num * num)
}
console.log(squareArray([1, 2, 3, 5, 8]))

let a = [45, 55, 2, 40, 8]
console.log(squareArray(a))
