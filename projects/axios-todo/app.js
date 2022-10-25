

    // axios.get("https://api.vschool.io/domniea/todo")
    // .then(response => {
    //     for(let i = 0; i < response.data.length; i++){
    //         const h1 = document.createElement('h1')
    //         h1.textContent = response.data[i].title 
    //         document.body.appendChild(h1)
    //     }
    //     console.log(response.data[1].title)
    // })
    // .catch(error => console.log(error))

const newTitle = document.getElementById('newTitle')
const newDescription = document.getElementById('newDescription')
const newPrice = document.getElementById('newPrice')

const form = document.form
const title = form.title
const description = form.description
const price = form.price

// title.style.backgroundColor = 'blue'

form.addEventListener('submit', function(e){
    e.preventDefault()
    const h1 = document.createElement('h1')
    h1.textContent = title.value
    document.body.appendChild(h1)
    axios.post('https://api.vschool.io/domniea/todo', {
        title: title.value,
        description: description.value,
        price: price.value
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))   
    })


