let firstCard = 6
let secondCard = 115
let sum = firstCard + secondCard
let hasJBlackJack = false
let isAlive = true
let message = ""

let messageElmnt = document.getElementById("message-el")
function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasJBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageElmnt.textContent = message
}



