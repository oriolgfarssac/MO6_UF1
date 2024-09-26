let randomNumber = Math.floor(Math.random() * 20) + 1;
let chances = 20;
let points = 0;

const playGame = () =>{

    let playerNumber = document.getElementById("chance").value;
    let chance = document.getElementById("state");
    let chanceS = document.getElementById("chances");
    let score = document.getElementById("score");
    let fondo = document.getElementById("c-joc");

    console.log(randomNumber);

    if (chances>0){

        if (playerNumber == randomNumber){

            points += 5;
            chances -= 1;
            chance.innerHTML = "The number is CORRECT! You've won 5 points!"
            randomNumber = Math.floor(Math.random() * 20) + 1;
            fondo.style= "background-color: green;";

        }
        
        else if (playerNumber < randomNumber){

            chances -= 1;
            chance.innerHTML = "The number is BIGGER!"

        }
        
        else if (playerNumber > randomNumber){

            chances -= 1;
            chance.innerHTML = "The number is SMALLER"
        }

    }
    
    else {

        chance.innerHTML = "You've runed out of chances, but you've gained " + points + " points!";
        fondo.style= "background-color: red;";


    }

    chanceS.innerHTML = chances;
    score.innerHTML = points;

}

const reset = () =>{

    if ( chances <= 0 ) {

        points = 0;
        chances = 20;
        randomNumber = Math.floor(Math.random() * 20) + 1;

        document.getElementById("state").innerHTML = "The number is...";
        document.getElementById("chances").innerHTML = chances;
        document.getElementById("score").innerHTML = points;
        document.getElementById("chance").value = ''; 

    } 
    
    else {

        alert("Acaba els intents per tornar a jugar!");

    }
    
}