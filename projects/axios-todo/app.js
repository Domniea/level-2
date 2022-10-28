const form = document.form
const title = form.title
const description = form.description
const price = form.price
const image = form.image

const leftDisplay = document.getElementById('leftDisplay')
const mainDisplay = document.getElementById('mainDisplay')
const rightDisplay = document.getElementById('rightDisplay')

function addToBrowser(location,info) {
    const h2 = document.createElement('h2')
    h2.textContent = info.data.title 
    location.appendChild(h2)

    const h4 = document.createElement('h4')
    h4.textContent = info.data.description 
    location.appendChild(h4)

    const priceDisplay = document.createElement('h4')
    priceDisplay.textContent = info.data.price 
    
    location.appendChild(priceDisplay)

    const imageDisplay = document.createElement('img')
    imageDisplay.classList.add('images')
    imageDisplay.src = info.data.imgUrl
    location.appendChild(imageDisplay)
}

/*function checkbox(location) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    location.appendChild(checkbox)

    const checkboxLabel = document.createElement('h4')
    checkboxLabel.classList.add('checkbox')
    checkboxLabel.textContent = 'Completed?'
    location.appendChild(checkboxLabel)
    
}*/

function checkComplete(object, id) {
    object.addEventListener('click',function(){
        if(object.checked === true) {
            axios.put('https://api.vschool.io/domniea/todo/' + id, {completed: true})
            .then(response => console.log(response))
            .catch(error => console.log(error))
            console.log("It's Checked")
        } else {
            axios.put('https://api.vschool.io/domniea/todo/' + id, {completed: false})
            .then(response => console.log(response))
            .catch(error => console.log(error))
            console.log('Not Checked')
        }
    })
}


// function checkboxAction(checkbox) {
//     if (checkbox.checked) {
//         console.log("It's Checked")
//     }
// }

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
        updatePut()
        console.log(updates)
        axios.put('https://api.vschool.io/domniea/todo/' + id, 
            {
                "title": title.value,
                "description": description.value,
                "price": price.value,
                "imgUrl": image.value
        })
            .then(response => {
                rightDisplay.removeChild(location)

            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightDisplay.append(newToDo)

            addToBrowser(newToDo, response)
            deleteButton(newToDo, id)
            editButton(newToDo, id)
            form.reset()

            })
            .catch(error => console.log(error))
    })
}

axios.get('https://api.vschool.io/domniea/todo')
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightDisplay.append(newToDo)

            // checkbox(newToDo)
            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.classList.add('checkbox')
            newToDo.appendChild(checkbox)

            const checkboxLabel = document.createElement('h4')
            checkboxLabel.classList.add('checkbox')
            checkboxLabel.textContent = 'Completed?'
            newToDo.appendChild(checkboxLabel)
            if (response.data[i].completed === true){
                checkbox.checked = true
            }
            
            const h2 = document.createElement('h2')
            h2.classList.add('task')
            h2.textContent = response.data[i].title 
            newToDo.appendChild(h2)
            
            const h4 = document.createElement('h4')
            h4.classList.add('task')
            h4.textContent = response.data[i].description 
            newToDo.appendChild(h4)

            const priceDisplay = document.createElement('h4')
            priceDisplay.classList.add('task')
            priceDisplay.textContent = response.data[i].price 
            
            newToDo.appendChild(priceDisplay)
            
            if(response.data[i].imgUrl > "") {
            const image = document.createElement('img')
            image.classList.add('task', 'images')
            image.src = response.data[i].imgUrl
            newToDo.appendChild(image)
            }
            
            const id = response.data[i]._id
            deleteButton(newToDo, id)
            editButton(newToDo, id)
            checkComplete(checkbox, id)    
        }
        
    })
    .catch(error => console.log(error))

form.addEventListener('submit', function(e){
    e.preventDefault()
    const h1 = document.createElement('h1')
    h1.textContent = title.value
    document.body.appendChild(h1)
    axios.post('https://api.vschool.io/domniea/todo', {
        "title": title.value,
        "description": description.value,
        "price": price.value,
        "imgUrl": image.value
        })
        .then(response => {
            
        const newToDo = document.createElement('div')
        newToDo.classList.add('toDo')
        rightDisplay.append(newToDo)
        
        // checkbox(newToDo)
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.classList.add('checkbox')
        newToDo.appendChild(checkbox)

        const checkboxLabel = document.createElement('h4')
        checkboxLabel.classList.add('checkbox')
        checkboxLabel.textContent = 'Completed?'
        newToDo.appendChild(checkboxLabel)

        addToBrowser(newToDo, response)
        const id = response.data._id
        deleteButton(newToDo, id)
        editButton(newToDo, id)
        checkComplete(checkbox, id) 
        form.reset()

        })
        .catch(error => console.log(error))   
    })

