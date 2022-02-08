
let cards = []
let sum = 0
let hasJBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards.push(firstCard)
    cards.push(secondCard)

    sum = firstCard + secondCard;
    renderGame()
}

function gameOver() {
    document.getElementById("start-btn").textContent = "RESTART GAME"
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
        gameOver()
    } else {
        message = "You're out of the game!"
        isAlive = false
        gameOver()
    }    
    messageEl.textContent = message
}

function newCard() {    
    if(isAlive && !hasJBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
}

function getRandomCard() {
    let cardValue = Math.floor(Math.random() * 13) + 1
    
    if(cardValue === 1) {
        return 11
    } else if( cardValue > 10) {
        return 10
    }

    return cardValue
}