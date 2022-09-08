let count = 0
time = 'time'

function clickCount() {
    document.getElementById('total').textContent = `you've clicked ${count += 1} ${time}`
}
document.addEventListener('click', clickEnd)

let timer = 5
let countdown = setInterval(function () {
    document.getElementById('countdown').textContent = timer -= 1
    if (timer < 1) {
        clearInterval(countdown)
        alert("hello")
        document.removeEventListener('click', clickEnd)
    }
} , 1000 )


function clickEnd() {
    if (count > 1) {
        time = 'times'
    }
    clickCount()
    sessionStorage.setItem('times clicked', count)
}