

const axios = require("axios")
const readline = require('readline-sync')
const lukeSkywalker = axios.get('https://api.vschool.io/domniea/todo/').then(response => {console.log(response.data)}).catch(error => {console.log(error)})

const name = readline.question('WHAT IS YOUR NAME?')
console.log(`Welcome ${name} to the internet! HAHAHAHA`)