// console.log((Math.random()*100).toFixed(0))
// console.log(Math.round(Math.random()*100 + 1))
const randomNumber = parseInt(Math.random() * 100 + 1)

// const subt = document.querySelector('#subt')
const form = document.querySelector('.form')
const input = document.querySelector('.guessFiled')
const result = document.querySelector('.resultParas')
const privious = document.querySelector('.guesses')
const final = document.querySelector('.lastResult')
const lowOrheigh = document.querySelector('.lowOrhigh')
// console.log(input)


let prevGuess = []
let numGuess = 1

let playGame = true;
if (playGame) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const guess = parseInt(input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage('Please enter a valid number')
        newClean ();
    } else if (guess <= 0) {
        displayMessage('Please enter a value of grater than 0')
        newClean ();
    } else if (guess > 100) {
        displayMessage('Please enter a value of less than 100')
        newClean ();
    } else {
        prevGuess.push(guess)
        if (numGuess == 10) {
            displayCleanUp(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayCleanUp(guess)
            checkGuess(guess) // It help to check that inputvalue == randomvalue ?
        }
    }
    // console.log(guess)


    // const p = document.createElement('p')
    // p.setAttribute('id', 'alert')
    // p.appendChild(document.createTextNode(message))
    // p.style.marginBottom = "20px"
    // form.appendChild(p)
}

function newClean (){
 input.value = "";
}

function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        displayMessage("You guessed right")
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Your number is TOOO Low")
    } else if (guess > randomNumber) {
        displayMessage("Your number is TOOO High")
    }
}

function displayCleanUp(guess) {
    //
  input.value = '';
  privious.innerHTML += `${guess}, `
  numGuess++;
  final.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    //
    lowOrheigh.innerHTML = `<h2>${message}</h2>`
    
    // const p = document.createElement('p')
    // p.setAttribute('id', 'alert')
    // p.appendChild(document.createTextNode(message))
    // p.style.marginBottom = "20px"
    // form.appendChild(p)
}

function endGame() {
    //
}

function newGame() {
    //
}

// console.log(privious.innerHTML = [input])
// for(let i=10; i>0; i--){
//         console.log(final.innerHTML = i)
//         break;
// }
