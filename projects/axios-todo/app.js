const form = document.form
const title = form.title
const description = form.description
const price = form.price
const image = form.image

const leftDisplay = document.getElementById('leftDisplay')
const mainDisplay = document.getElementById('mainDisplay')
const rightDisplay = document.getElementById('rightDisplay')

    axios.get("https://api.vschool.io/domniea/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const newToDo = document.createElement('div')
            newToDo.classList.add('toDo')
            rightDisplay.append(newToDo)

            const h2 = document.createElement('h2')
            const title = response.data[i].title 
            h2.textContent = `${title}`
            newToDo.appendChild(h2)
            
            const h6 = document.createElement('h6')
            const description = response.data[i].description 
            h6.textContent = `Description: ${description}`
            newToDo.appendChild(h6)

            const priceDisplay = document.createElement('h6')
            const price = response.data[i].price 
            priceDisplay.textContent = `Price: ${price} test`
            newToDo.appendChild(priceDisplay)
            
            if(response.data[i].imgUrl > "") {
            const imageDisplay = document.createElement('img')
            imageDisplay.classList.add('images')
            imageDisplay.src = response.data[i].imgUrl
            newToDo.appendChild(imageDisplay)
            }
            // const newListItem = document.createElement('div')
            // newListItem.classList.add('list')
            // mainDisplay.append(newListItem)

            // const h2List = document.createElement('h2')
            // const titleList = response.data[i].title 
            // h2List.textContent = `${titleList}`
            // newListItem.appendChild(h2List)

        }
        console.log(response.data[1].title)
    })
    .catch(error => console.log(error))

// const newTitle = document.getElementById('newTitle')
// const newDescription = document.getElementById('newDescription')
// const newPrice = document.getElementById('newPrice')



// title.style.backgroundColor = 'blue'

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

            const h2 = document.createElement('h2')
            const title = response.data.title 
            h2.textContent = `${title}`
            newToDo.appendChild(h2)
        
            const h6 = document.createElement('h6')
            const description = response.data.description 
            h6.textContent = `Description: ${description}`
            newToDo.appendChild(h6)

            const priceDisplay = document.createElement('h6')
            const price = response.data.price 
            priceDisplay.textContent = `Price: ${price} test`
            newToDo.appendChild(priceDisplay)

            const imageDisplay = document.createElement('img')
            imageDisplay.classList.add('images')
            imageDisplay.src = response.data.imgUrl
            h2.appendChild(imageDisplay)

            /* Add delete Button*/
            const button = document.createElement('button')
            button.textContent = 'delete'
            newToDo.appendChild(button)

            button.addEventListener('click', function deleteToDo(e) {
                e.preventDefault()
                axios.delete('https://api.vschool.io/domniea/todo/' + response.data._id)
                    .then(response => {
                        rightDisplay.removeChild(newToDo)
                    })
                    .catch(error => console.log(error))
            })
            

        })
        .catch(error => console.log(error))   
    })


