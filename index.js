let firstCard = 6
let secondCard = 15
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasJBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "        
    }
    sumEl.textContent = "Sum: " + sum    

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasJBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }    
    messageEl.textContent = message
}

function newCard() {    
    let card = 5
    sum += card
    cards.push(card)
    renderGame()
}



