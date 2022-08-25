const formAdd = document.addition
const formSub = document.subtraction
const formMult = document.multiplication

let additionResult = formAdd.addEventListener("submit", function(event){
    event.preventDefault()
    let add1 = formAdd.num1.value
    let add2 = formAdd.num2.value

    let return1 = document.getElementById('addResult').textContent = (parseInt(add1) + parseInt(add2))
})

let subtractionResult = formSub.addEventListener("submit", function(event){
    event.preventDefault()
    let sub1 = formSub.num1.value
    let sub2 = formSub.num2.value

    document.getElementById('subResult').textContent = (parseInt(sub1) - parseInt(sub2))
})

let multiplicationResult = formMult.addEventListener("submit", function(event){
    event.preventDefault()
    let mult1 = formMult.num1.value
    let mult2 = formMult.num2.value

    document.getElementById('multResult').textContent = (parseInt(mult1) * parseInt(mult2))
})

