const form = document.form
const title = form.title
const description = form.description
const price = form.price
const image = form.image

const leftDisplay = document.getElementById('leftDisplay')
const mainDisplay = document.getElementById('mainDisplay')
const rightDisplay = document.getElementById('rightDisplay')

function deleteButton(location, id){
    const button = document.createElement('button')
    button.textContent = 'delete'
    location.appendChild(button)

    button.addEventListener('click', function deleteToDo(e) {
        e.preventDefault()
        axios.delete('https://api.vschool.io/domniea/todo/' + id)
            .then(response => {
                rightDisplay.removeChild(location)
            })
            .catch(error => console.log(error))
    })
}


function editButton(location, id){
    const button = document.createElement('button')
    button.textContent = 'edit'
    location.appendChild(button)

    button.addEventListener('click', function editToDo(e) {
        e.preventDefault()
        axios.put('https://api.vschool.io/domniea/todo/' + id, {
                title: title.value,
                description: description.value,
                price: price.value,
                imgUrl: image.value
        })
            .then(response => {
                rightDisplay.removeChild(location)

            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightDisplay.append(newToDo)

            addToBrowser(newToDo, response)
            deleteButton(newToDo, id)
            editButton(newToDo, id)

            })
            .catch(error => console.log(error))
    })
}

// axios.put('https://api.vschool.io/domniea/todo', {})
//     .then()
//     .catch()


axios.get('https://api.vschool.io/domniea/todo')
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightDisplay.append(newToDo)

            const h2 = document.createElement('h2')
            const title = response.data[i].title 
            h2.textContent = `${title}`
            newToDo.appendChild(h2)
            
            const h4 = document.createElement('h4')
            const description = response.data[i].description 
            h4.textContent = `Description: ${description}`
            newToDo.appendChild(h4)

            const priceDisplay = document.createElement('h4')
            const price = response.data[i].price 
            priceDisplay.textContent = `Price: ${price} test`
            newToDo.appendChild(priceDisplay)
            
            if(response.data[i].imgUrl > "") {
            const imageDisplay = document.createElement('img')
            imageDisplay.classList.add('images')
            imageDisplay.src = response.data[i].imgUrl
            newToDo.appendChild(imageDisplay)
            }

            const id = response.data[i]._id
            deleteButton(newToDo, id)
            editButton(newToDo, id)        
        }
        
    })
    .catch(error => console.log(error))

form.addEventListener('submit', function(e){
    e.preventDefault()
    const h1 = document.createElement('h1')
    h1.textContent = title.value
    document.body.appendChild(h1)
    axios.post('https://api.vschool.io/domniea/todo', {
        title: title.value,
        description: description.value,
        price: price.value,
        imgUrl: image.value
        })
        .then(response => {
            
            /* Post to browser*/
        const newToDo = document.createElement('div')
        newToDo.classList.add('toDo')
        rightDisplay.append(newToDo)

        // const h2 = document.createElement('h2')
        // const title = response.data.title 
        // h2.textContent = `${title}`
        // newToDo.appendChild(h2)
    
        // const h4 = document.createElement('h4')
        // const description = response.data.description 
        // h4.textContent = `Description: ${description}`
        // newToDo.appendChild(h4)

        // const priceDisplay = document.createElement('h4')
        // const price = response.data.price 
        // priceDisplay.textContent = `Price: ${price} test`
        // newToDo.appendChild(priceDisplay)

        // const imageDisplay = document.createElement('img')
        // imageDisplay.classList.add('images')
        // imageDisplay.src = response.data.imgUrl
        // newToDo.appendChild(imageDisplay)

        addToBrowser(newToDo, response)
        const id = response.data._id
        deleteButton(newToDo, id)
        editButton(newToDo, id)

        })
        .catch(error => console.log(error))   
    })

function addToBrowser(location,info) {
    // const newToDo = document.createElement('div')
    // newToDo.classList.add('toDo')
    // rightDisplay.append(newToDo)

    const h2 = document.createElement('h2')
    const title = info.data.title 
    h2.textContent = `${title}`
    location.appendChild(h2)

    const h4 = document.createElement('h4')
    const description = info.data.description 
    h4.textContent = `Description: ${description}`
    location.appendChild(h4)

    const priceDisplay = document.createElement('h4')
    const price = info.data.price 
    priceDisplay.textContent = `Price: ${price} test`
    location.appendChild(priceDisplay)

    const imageDisplay = document.createElement('img')
    imageDisplay.classList.add('images')
    imageDisplay.src = info.data.imgUrl
    location.appendChild(imageDisplay)
}