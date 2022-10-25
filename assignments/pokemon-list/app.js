const xhr = new XMLHttpRequest()

xhr.open("GET",'https://api.vschool.io/pokemon', true)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    }
}



function showData(arr){
    for (i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)

       

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata)
            console.log(data)
            const p = document.createElement('p')
            p.textContent = data.abilities.ability.name
            document.body.appendChild(p)

        }
        }
        
        xhr.open("GET","https://pokeapi.co/" + arr[i].resource_uri, true)
        xhr.send()

        // "https://pokeapi.co/" + arr[i].resource_uri
        const p = document.createElement('p')
        p.textContent = arr[i].resource_uri
        document.body.appendChild(p)
    }
}
