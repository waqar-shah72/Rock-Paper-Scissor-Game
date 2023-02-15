

function submit() {
    let win = false
    let stone= 0;
    let paper = 1;
    let scissor = 2;
    let userGuess;
    let guessOfGame = Math.floor(Math.random() * 3)
    if (guessOfGame===0){
        let winTag =document.createElement("p")
        let winResult = document.createTextNode("My one is stone" )
        winTag.appendChild(winResult);
        let element = document.getElementById('myGuess')
        element.appendChild(winTag)

    } else if(guessOfGame===1){
        let winTag =document.createElement("p")
        let winResult = document.createTextNode("My one is Paper")
        winTag.appendChild(winResult);
        let element = document.getElementById('myGuess')
        element.appendChild(winTag)

    }else if (guessOfGame===2){
        let winTag =document.createElement("p")
        let winResult = document.createTextNode("My one is Scissor")
        winTag.appendChild(winResult);
        let element = document.getElementById('myGuess')
        element.appendChild(winTag)
    }

    // userGuess = document.getElementById("stone").value
     // userGuess = document.getElementById("paper").value
     // userGuess = document.getElementById("scissor").value
    if (document.getElementById("stone").value === "stone") {
        userGuess = stone
        console.log(userGuess)
         winTag =document.createElement("p")
        let winResult = document.createTextNode("You is Stone")
        winTag.appendChild(winResult);
        let element = document.getElementById('myGuess')
        element.appendChild(winTag)
    }
    else if (document.getElementById("paper").value === "paper") {
        userGuess = paper
         winTag =document.createElement("p")
        let winResult = document.createTextNode("you is Paper")
        winTag.appendChild(winResult);
        let element = document.getElementById('answer')
        element.appendChild(winTag)
    } else if (document.getElementById("scissor").value === "scissor") {
        userGuess = scissor
         winTag =document.createElement("p")
        let winResult = document.createTextNode("You is Scissor")
        winTag.appendChild(winResult);
        let element = document.getElementById('myGuess')
        element.appendChild(winTag)
    }
    if (guessOfGame === userGuess) {
        let winTag =document.createElement("p")
        let winResult = document.createTextNode("Try again")
        winTag.appendChild(winResult);
        let element = document.getElementById('answer')
        element.appendChild(winTag)
    }
   else if (userGuess === stone) {
        if (guessOfGame === scissor) {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("Wow u win")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)        }
        else {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("U Lose ")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)        }
    }
   else if (userGuess === paper) {
        if (guessOfGame === stone) {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("Wow u win")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)

        } else {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("U Lose ")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)           }
    }

    else if (userGuess === scissor) {
        if (guessOfGame === paper) {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("Wow u win")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)                } else {
            let winTag =document.createElement("p")
            let winResult = document.createTextNode("U Lose ")
            winTag.appendChild(winResult);
            let element = document.getElementById('answer')
            element.appendChild(winTag)
        }
    }


}