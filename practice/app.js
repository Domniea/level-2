nums = [3, 6, 8, 2]

function highFive(arr){
    let result = arr.filter(i => i > 5)
    return result
}

// console.log(highFive(nums))

function evens(arr){
    let even = arr.filter(x => x % 2 === 0)
    return even
}

// console.log(evens(nums))

strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

function fiveOrLess(arr){
    let result = arr.filter(x => x.length < 5)
    return result
}

// console.log(fiveOrLess(strings))