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
    h2.classList.add('task')
    h2.textContent = info.title 
    location.appendChild(h2)

    const h4 = document.createElement('h4')
    h4.classList.add('task')
    h4.textContent = info.description 
    location.appendChild(h4)

    const priceDisplay = document.createElement('h4')
    priceDisplay.classList.add('task')
    priceDisplay.textContent = info.price 
    location.appendChild(priceDisplay)
            
    if(info.imgUrl > "") {
        const image = document.createElement('img')
        image.classList.add('task', 'images')
        image.src = info.imgUrl
        location.appendChild(image)
        }
}

function checkComplete(object, id, title) {
    object.addEventListener('click',function(){
        if(object.checked === true) {
            axios.put('https://api.vschool.io/domniea/todo/' + id, {completed: true})
            .then(response => console.log(response))
            .catch(error => console.log(error))
            console.log("It's Checked")
            title.style.textDecoration = 'line-through'

        } else {
            axios.put('https://api.vschool.io/domniea/todo/' + id, {completed: false})
            .then(response => console.log(response))
            .catch(error => console.log(error))
            console.log('Not Checked')
            title.style.textDecoration = 'none'
        }
    })
}

function deleteButton(location1, location2, location3, location4, id){
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.classList.add('deleteButton')
    location1.appendChild(button)

    button.addEventListener('click', function deleteToDo(e) {
        e.preventDefault()
        axios.delete('https://api.vschool.io/domniea/todo/' + id)
            .then(response => {
                location2.remove(location1)
                console.log('right refresh')
                location4.remove(location3)
                console.log('main refresh')
                dataRefresh()
                console.log('new data')
    
                
            })
            .catch(error => console.log(error))
    })
}

function editButton(location1, location2, location3, location4, id){
    const button = document.createElement('button')
    button.setAttribute('id', 'buttonEdit')
    button.textContent = 'Edit'
    location1.appendChild(button)

    button.addEventListener('click', function editToDo(e) {
        e.preventDefault()
        const update = {}
        if(title.value > ""){
        update.title = title.value
        } 
    
        if(description.value > ""){
        update.description = description.value
        }
    
        if(price.value > ""){
        update.price = price.value
        } 
    
        if(image.value > "") {
        update.imgUrl = image.value
        }
        console.log(update)

        axios.put('https://api.vschool.io/domniea/todo/' + id, update)
        .then(response => {
            location2.remove(location1)
            location4.remove(location3)
            dataRefresh()

            })
            .catch(error => console.log(error))
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const update = {}
    if(title.value > ""){
    update.title = title.value
    } 

    if(description.value > ""){
    update.description = description.value
    }

    if(price.value > ""){
    update.price = price.value
    } 

    if(image.value > "") {
    update.imgUrl = image.value
    } 
    console.log(update)

    axios.post('https://api.vschool.io/domniea/todo', update)
        .then(response => {
            console.log(response)
            const data = response.data
            const id = data._id
            const isComplete = data.completed

            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightList.append(newToDo)

            const toDoListItem = document.createElement('div')
            toDoListItem.classList.add('toDoList')
            mainList.appendChild(toDoListItem)
            
            const checkbox = document.createElement('input')
            checkbox.setAttribute('id', 'checkbox')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.classList.add('checkbox')
            toDoListItem.appendChild(checkbox)

            if( data.completed === true) {
                checkbox.checked = true
            }
            
            addToBrowser(newToDo, data)

            const h2 = document.createElement('h2')
            h2.classList.add('toDoList', 'mainListTitle')
            h2.textContent = data.title
            toDoListItem.appendChild(h2)

            if(isComplete === true) {
                console.log(h2)
                h2.style.textDecoration = 'line-through'
            }

            checkComplete(checkbox, id, h2)
            editButton(newToDo, rightList, toDoListItem, mainList, id)
            deleteButton(newToDo, rightList, toDoListItem, mainList, id)

            form.reset()

        })
        .catch(error => console.log(error))   
 })

function dataRefresh(){
    axios.get('https://api.vschool.io/domniea/todo')
        .then(response => {
            console.log(response.data)

            const mainList =  document.createElement('div')
            mainList.setAttribute('id','mainList')
            mainDisplay.appendChild(mainList)
            const rightList =  document.createElement('div')
            rightList.setAttribute('id', 'rightList')
            rightDisplay.appendChild(rightList)

            let data = response.data
            data.forEach(data => {

            const id = data._id
            const isComplete = data.completed
            

            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightList.append(newToDo)

            const toDoListItem = document.createElement('div')
            toDoListItem.classList.add('toDoList')
            mainList.appendChild(toDoListItem)
            
            const checkbox = document.createElement('input')
            checkbox.setAttribute('id', 'checkbox')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.classList.add('checkbox')
            toDoListItem.appendChild(checkbox)

            const h2 = document.createElement('h2')
            h2.classList.add('toDoList')
            h2.textContent = data.title
            toDoListItem.appendChild(h2)

            if(isComplete === true) {
                console.log(h2)
                h2.style.textDecoration = 'line-through'
            }

            checkComplete(checkbox, id, h2)

            addToBrowser(newToDo, data)
            editButton(newToDo, rightList,toDoListItem, mainList, id)
            deleteButton(newToDo, rightList, toDoListItem, mainList, id)
            
            if( data.completed === true) {
                checkbox.checked = true
            }
            
            form.reset()
        })
    })
        .catch(error => console.log(error))
}

dataRefresh()