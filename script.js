
let result;
let computersChoice;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerChoice;


//function to chose a random weapon (Rock,Paper or Scissors)
function randomWeapon(){
    let weapon =["Rock","Paper","Scissors"];
    let ranWeapon = weapon[Math.floor(Math.random()*weapon.length)]
    return ranWeapon;
}


// Add event listeners to buttons
rock.addEventListener("click", function() {
    playerChoice = "Rock";
    rock.style.backgroundColor="green";
    paper.style.backgroundColor="";
    scissors.style.backgroundColor="";
    playGame();
});

paper.addEventListener("click", function() {
    playerChoice = "Paper";
    rock.style.backgroundColor="";
    paper.style.backgroundColor="green";
    scissors.style.backgroundColor="";
    playGame();
});

scissors.addEventListener("click", function() {
    playerChoice = "Scissors";
    rock.style.backgroundColor="";
    paper.style.backgroundColor="";
    scissors.style.backgroundColor="green";
    playGame();
});

//function to compare the randomWeapon with playersChoice
function playGame(){
    
    computersChoice=randomWeapon();
    if(playerChoice === computersChoice){
        result = "Draw! Both chose " + playerChoice + ".";
    }
    if ((playerChoice==="Rock"&& computersChoice==="Paper") 
        || (playerChoice==="Paper"&& computersChoice==="Scissors") 
        || (playerChoice==="Scissors"&& computersChoice==="Rock")) {
            result = "You loose! " +computersChoice + " beats " + playerChoice + ".";
        }
    if ((playerChoice==="Rock"&& computersChoice==="Scissors") 
        || (playerChoice==="Paper"&& computersChoice==="Rock") 
        || (playerChoice==="Scissors"&& computersChoice==="Paper")) {
            result = "You Win! " + playerChoice + " beats " + computersChoice + ".";
        }
        document.querySelector("#computersChoice").textContent = "The computer's choice is " +computersChoice;
        document.querySelector("#result").textContent = result;
}
