let randomNum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submit');
const userInput=document.querySelector('#userInput');

const guessSlot=document.querySelector('#previous')
const remain=document.querySelector('#remain')

const lowOrHi=document.querySelector('.lowOrHi');
const output=document.querySelector('.output');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=0;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a number more than 1')
    } else if(guess>100){
        alert('Please enter a numberless than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMsg(`Game Over.Random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMsg(`You guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMsg(`Number is low`)
    } else if(guess>randomNum){
        displayMsg(`Number is high`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remain.innerHTML=`${10-numGuess}`
}
function displayMsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
   const newGameBtn= document.querySelector('#newGame')
   newGameBtn.addEventListener('click',function(e){
    randomNum=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=0
    guessSlot.innerHTML=''
    remain.innerHTML=`${10-numGuess}`
    userInput.removeAttribute('disabled')
    output.removeChild(p)
    playGame=true

   })
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    output.appendChild(p)
    playGame=false
    newGame()
}