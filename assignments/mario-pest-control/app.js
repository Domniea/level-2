const form = document.form
const goombaTotal = form.goombas
const bombOmbTotal = form.bomBombs
const cheepCheepTotal = form.cheepCheeps

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let Total = document.getElementById('buttonBox').textContent = `You Owe: ${(bombOmbTotal.value * 7) + (bombOmbTotal.value * 7) + (cheepCheepTotal.value * 11)} Coins!`
    Total.style.color = 'white'
})