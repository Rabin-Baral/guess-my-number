
let answer = Math.floor(Math.random()*100 + 1)
console.log(answer)

let countGuess = 0;          
function submit(){
    let guessNo = document.getElementById("NoOfGuess")
    let userData = document.getElementById("userGx")
    let guesses = []

    let userAns = document.getElementById("userGuess")
    let x = userAns.value
    guesses.push(x)
    var finalMessage = document.getElementById("Message")

     countGuess += 1

        if(x > 100 || x < 0){
            alert("invalid answer")
            guessNo.innerHTML  = "No of Guesses: " + countGuess
        }

        else if(x > answer){
            finalMessage.innerHTML = "try smaller number"
            guessNo.innerHTML  = "You have made " + countGuess + " guesses."
            userData.innerHTML = "Guessed Numbers are: " + guesses
        }

        else if(x == answer){
            finalMessage.innerHTML = `congratulation you did it & took you ${countGuess} try`
            
        }

        else{
            finalMessage.innerHTML = "try larger number"
            guessNo.innerHTML  = "You have made " + countGuess + " guesses."
            userData.innerHTML = "Guessed Numbers are:" + guesses

        }
}

