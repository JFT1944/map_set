// Q - 1.) => [1,2,3,4]

// Q - 2.) => 'ref' => Error

let cows = new Set('referee')
// console.log(cows)

// Q - 3.) => m = {[1,2,3] : false}

// const m = new Map();
// m.Set([1,2,3], true)
// // m.Set([1,2,3], false)
// console.log(m)

let hasDuplicate = (arr) => {
let dupChecker = new Set(arr);
console.log(dupChecker)
 let sdup = [...dupChecker]
console.log((sdup))
for (let i of sdup){
    for (let x of arr){
        console.log(i,x)
        if (i !== x) return true
    }
}
// // dupChecker.add(arr)
// // let cows = [...dupChecker]
// // console.log(cows)
// let arr1 = arr;

// return (sdup === arr1)
}

 console.log(hasDuplicate([1,3,2, 1]))




function vowelCount(str){
let map1 = new Map()
let vowels = 'aeiou'
let count = 0

for (let x of str){
    for (let j of vowels){
        if (x === j){
            
            if (map1[x] !== undefined){
                map1[x] += 1
            } else{
                map1.set(x, 1)
        //    console.log(map1[x])
            }
        }
    }
}
console.log()
return map1
}

console.log(vowelCount('awesome'))