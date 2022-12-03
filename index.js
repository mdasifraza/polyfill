let details = {
  name: "Md Asif Raza",
  age: 28
}

let printAny = function () {
  console.log(this.name)
}

printAny()
printAny.call(details)
const later = printAny.bind(details)
later()

Array.prototype.newMap = function(callbackFn) {
  const arr = []
  for(let i=0; i< this.length; i++){
    arr.push(callbackFn(this[i], i, this))
  }
    return arr
}

Array.prototype.newFilter = function(callbackFn) {
  const arr = []
  for(let i=0; i< this.length; i++){
    if (callbackFn.call(this, this[i], i, this)) {
      arr.push(this[i])
    }
  }
    return arr
}

const arr = [1,2,3,4]
const temp = arr.map((item, i) => item * i+item)
const temp1 = arr.newFilter((item, i) => item >= 3)
arr.newMap((item, i, ar) => console.log(item, i, ar))

console.log(temp)
console.log(temp1)
// console.log(temp)
// console.log(temp)