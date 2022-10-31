const form = document.form
const title = form.title
const description = form.description
const price = form.price
const image = form.image

const leftDisplay = document.getElementById('leftDisplay')
const mainDisplay = document.getElementById('mainDisplay')
const rightDisplay = document.getElementById('rightDisplay')

// const mainList =  document.createElement('div')
// mainList.classList.add('mainList')
// mainDisplay.appendChild(mainList)
// const rightList =  document.createElement('div')
// rightList.classList.add('rightList')
// rightDisplay.appendChild(rightList)

// function addToBrowser(location,info) {
//     const h2 = document.createElement('h2')
//     h2.textContent = info.data.title 
//     location.appendChild(h2)

//     const h4 = document.createElement('h4')
//     h4.textContent = info.data.description 
//     location.appendChild(h4)

//     const priceDisplay = document.createElement('h4')
//     priceDisplay.textContent = info.data.price 
    
//     location.appendChild(priceDisplay)

//     const imageDisplay = document.createElement('img')
//     imageDisplay.classList.add('images')
//     imageDisplay.src = info.data.imgUrl
//     location.appendChild(imageDisplay)
// }
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
    h4.classList.add('task')
    priceDisplay.textContent = info.price 
    location.appendChild(priceDisplay)
            
    if(info.imgUrl > "") {
        const image = document.createElement('img')
        image.classList.add('task', 'images')
        image.src = info.imgUrl
        location.appendChild(image)
        }
}


// function addToMain(location, info) {
//     const toDoListItem = document.createElement('div')
//     toDoListItem.classList.add('toDoList')
//     location.appendChild(toDoListItem)

//     const h2 = document.createElement('h2')
//     h2.classList.add('toDoList')
//     h2.textContent = info.data.title
//     toDoListItem.appendChild(h2)
// }

function addToMain(location, info) {
    const h2 = document.createElement('h2')
    h2.classList.add('toDoList')
    h2.textContent = info.title
    location.appendChild(h2)
}

// function checkbox(location) {
//     const checkbox = document.createElement('input')
//     checkbox.setAttribute('type', 'checkbox')
//     checkbox.classList.add('checkbox')
//     location.appendChild(checkbox)

//     const checkboxLabel = document.createElement('h4')
//     checkboxLabel.classList.add('checkbox')
//     checkboxLabel.textContent = 'Completed?'
//     location.appendChild(checkboxLabel)
    
// }



// function checkboxCheck(location, data) {
//     const checkbox = document.createElement('input')
//     checkbox.setAttribute('id', 'checkbox')
//     checkbox.setAttribute('type', 'checkbox')
//     checkbox.classList.add('checkbox')
//     location.appendChild(checkbox)

//     const checkboxLabel = document.createElement('h4')
//     checkboxLabel.classList.add('checkbox')

//     location.appendChild(checkboxLabel)
//     if( data.completed === true) {
//         checkbox.checked = true
//     }

// }    



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

function deleteButton(location1, location2, location3, location4, id){
    const button = document.createElement('button')
    button.textContent = 'delete'
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
    button.textContent = 'edit'
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

            // console.log(response.data)
            // let data = response.data
    
            // const id = data._id
    
            // const newToDo = document.createElement('div')
            // newToDo.classList.add('toDo')
            // rightDisplay.append(newToDo)
    
            // const toDoListItem = document.createElement('div')
            // toDoListItem.classList.add('toDoList')
            // mainDisplay.appendChild(toDoListItem)
            
            // const checkbox = document.createElement('input')
            // checkbox.setAttribute('id', 'checkbox')
            // checkbox.setAttribute('type', 'checkbox')
            // checkbox.classList.add('checkbox')
            // toDoListItem.appendChild(checkbox)
        
            // if( data.completed === true) {
            //     checkbox.checked = true
            // }
            
            // checkboxCheck(toDoListItem, data)
            // addToBrowser(newToDo, data)
            // addToMain(toDoListItem, data)
            // checkComplete(checkbox, id)
            // editButton(newToDo, toDoListItem, id)
            // deleteButton(newToDo, rightList, toDoListItem,mainList, id)

            })
            .catch(error => console.log(error))
    })
}


// axios.get('https://api.vschool.io/domniea/todo')
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const newToDo = document.createElement('div')
//             newToDo.classList.add('toDo')
//             rightDisplay.append(newToDo)

            // const toDoListItem = document.createElement('div')
            // toDoListItem.classList.add('toDoList')
            // mainDisplay.appendChild(toDoListItem)

            // checkbox(newToDo)
            // const checkbox = document.createElement('input')
            // checkbox.setAttribute('type', 'checkbox')
            // checkbox.classList.add('checkbox')
            // toDoListItem.appendChild(checkbox)

            // const checkboxLabel = document.createElement('h4')
            // checkboxLabel.classList.add('checkbox')
            // toDoListItem.appendChild(checkboxLabel)

            // if (response.data[i].completed === true){
            //     checkbox.checked = true
            // }
            
//             const h2 = document.createElement('h2')
//             h2.classList.add('task')
//             h2.textContent = response.data[i].title 
//             newToDo.appendChild(h2)
            
//             const h4 = document.createElement('h4')
//             h4.classList.add('task')
//             h4.textContent = response.data[i].description 
//             newToDo.appendChild(h4)

//             const priceDisplay = document.createElement('h4')
//             priceDisplay.classList.add('task')
//             priceDisplay.textContent = response.data[i].price 
//             newToDo.appendChild(priceDisplay)
            
            // if(response.data[i].imgUrl > "") {
            // const image = document.createElement('img')
            // image.classList.add('task', 'images')
            // image.src = response.data[i].imgUrl
            // newToDo.appendChild(image)
            // }

//             const newListItem = document.createElement('h2')
//             h2.classList.add('toDoList')
//             h2.textContent = response.data[i].title
//             toDoListItem.appendChild(h2)
            
//             const id = response.data[i]._id
            // deleteButton(newToDo, toDoListItem, id)
//             editButton(newToDo, id)
//             checkComplete(checkbox, id)

            
               
//         }
        
//     })
//     .catch(error => console.log(error))

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

        // const newToDo = document.createElement('div')
        // newToDo.classList.add('toDo')
        // rightDisplay.append(newToDo)
        
        // // checkbox(newToDo)
        // const checkbox = document.createElement('input')
        // checkbox.setAttribute('type', 'checkbox')
        // checkbox.classList.add('checkbox')
        // newToDo.appendChild(checkbox)

        // const checkboxLabel = document.createElement('h4')
        // checkboxLabel.classList.add('checkbox')
        // checkboxLabel.textContent = 'Completed?'
        // newToDo.appendChild(checkboxLabel)

        // if (response.data.completed === true){
        //     checkbox.checked = true
        // }

        // const toDoListItem = document.createElement('div')
        // toDoListItem.classList.add('toDoList')
        // mainDisplay.appendChild(toDoListItem)

        // const h2 = document.createElement('h2')
        // h2.classList.add('toDoList')
        // h2.textContent = response.data.title
        // toDoListItem.appendChild(h2)

        // addToBrowser(newToDo, response)
        // const id = response.data._id
        // deleteButton(newToDo, toDoListItem, id)
        // editButton(newToDo, id)
        // checkComplete(checkbox, id)

        console.log(response.data)
        const data = response.data
        const id = data._id

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
        
        // checkboxCheck(toDoListItem, data)
        addToBrowser(newToDo, data)
        addToMain(mainList, data)
        checkComplete(checkbox, id)
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
            
            // checkboxCheck(toDoListItem, data)
            addToBrowser(newToDo, data)
            addToMain(mainList, data)
            checkComplete(checkbox, id)
            editButton(newToDo, rightList,toDoListItem, mainList, id)
            deleteButton(newToDo, rightList, toDoListItem, mainList, id)

        })
    })
        .catch(error => console.log(error))
}

dataRefresh()