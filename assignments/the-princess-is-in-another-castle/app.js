const readline = require('readline-sync')

class character {
    constructor (name, totalCoins, status, size, hasStar, isAlive) {
        this.name = ''
        this.totalCoins = 0
        this.status = 2
        this.size = ['Dead', 'Small', 'Big', 'Powered Up', 'STAR POWER']
        this.hasStar = false 
        this.isAlive = true
    }

    nameChoice() {
        let nameChance = Math.random()  
        if (nameChance >= .75) {
            this.name = 'Mario'
        } else {
            this.name = 'Luigi'
        }
    }

    gotHit() {
        if (this.hasStar === false) {
            this.status --
            if (this.status === 0){
                console.log(`${this.name} is DEAD!!!`)
                this.isAlive = false
            }
        } else if (this.hasStar === true) {
            console.log(`${this.name} was protected by the Star!`)
        }
        
    }
        // if (this.status === 1) {
        //     this.size = 'Small'
        // } else if (this.status === 2) {
        //     this.size = 'Big'
        // } else if (this.status === 0){
        //     console.log('Game Over')
        //     this.size = 'Dead'
        //     this.isAlive = false
        // }
   
    addCoin() {
        this.totalCoins ++ 
    }
    
    gotPowerup() {
            if (this.status === 1) {
                this.status ++
                console.log(`${this.name} Became Big!`)
            } else if (this.status === 2) {
                this.status ++
                console.log(`${this.name} Powered Up!`)
            } 
            else if (this.status === 3) {
                this.status ++
                console.log(`${this.name} Found A STAR!!!`)
                this.hasStar = true
                
                setTimeout(() => {
                    this.status = 2 
                    this.hasStar = false
                }, 3000);
            }
        } 

    print() { 
        console.log(`Name: ${this.name} \nStatus: ${this.size[this.status]} \nTotal Coins: ${this.totalCoins}\n `)
    }
}

function game() {
    let turn = Math.ceil(Math.random() * 3)
    if (turn === 1) {
        newPlayer.gotHit()
       
    } else if (turn === 2) {
        newPlayer.addCoin()

    } else if (turn === 3) {
        newPlayer.gotPowerup()

    }

    newPlayer.print()
    if(newPlayer.isAlive === false) {
        clearInterval(gameOn)
    }
}

const name = readline.question('Mario Runner --- Press Enter Key To Begin')

const newPlayer = new character()

newPlayer.nameChoice()

const gameOn = setInterval(game, 1000)