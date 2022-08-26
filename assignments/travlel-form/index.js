const form = document.form


form.addEventListener('submit', (e) => {
        e.preventDefault()
        alert(`${form.lName.value}, ${form.fName.value} \n${form.age.value} \n${form.gender.value} \n${form.whereTo.value}`)
})