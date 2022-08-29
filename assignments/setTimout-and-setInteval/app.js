let count = 0
time = 'time'

function clickCount() {
    document.getElementById('total').textContent = `you've clicked ${count += 1} ${time}`
}
document.addEventListener('click', function() {
    if (count > 1) {
        time = 'times'
    }
    clickCount()
    sessionStorage.setItem('times clicked', count)
})

let timer = 30
let countdown = setInterval(function () {
    document.getElementById('countdown').textContent = timer -= 1
    if (timer < 1) {
        clearInterval(countdown)
        alert("poop")
    }
} , 1000 )