let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerChoice;
let computersChoice;
let result;


//function to chose a random weapon (Rock,Paper or Scissors)
function randomWeapon(){
    let weapon =["Rock","Paper","Scissors"];
    let ranWeapon = weapon[Math.floor(Math.random()*weapon.length)]
    return ranWeapon;
}

//-----------------------------------------------
rock.addEventListener("click", function() {
    playerChoice = "Rock";
    rock.classList.add("btn", "btn-success");
    paper.classList.remove("btn-success");
    scissors.classList.remove("btn-success");
    playGame();
});

paper.addEventListener("click", function() {
    playerChoice = "Paper";
    rock.classList.remove("btn-success");
    paper.classList.add("btn", "btn-success") ;
    scissors.classList.remove("btn-success");
    playGame();
});

scissors.addEventListener("click", function() {
    playerChoice = "Scissors";
    rock.classList.remove("btn-success");
    paper.classList.remove("btn-success");
    scissors.classList.add("btn", "btn-success");
    
    playGame();
});


//function to compare the randomWeapon with playersChoice
function playGame(){
    
    computersChoice=randomWeapon();
    if(playerChoice === computersChoice){
        result = "Draw! Both chose " + playerChoice + ".";
        document.querySelector("#result").style.color="black";
    }

    if ((playerChoice==="Rock"&& computersChoice==="Paper") 
        || (playerChoice==="Paper"&& computersChoice==="Scissors") 
        || (playerChoice==="Scissors"&& computersChoice==="Rock")) {
            result = "You loose! " +computersChoice + " beats " + playerChoice + ".";
            document.querySelector("#result").style.color="red";
        }

    if ((playerChoice==="Rock"&& computersChoice==="Scissors") 
        || (playerChoice==="Paper"&& computersChoice==="Rock") 
        || (playerChoice==="Scissors"&& computersChoice==="Paper")) {
            result = "You Win! " + playerChoice + " beats " + computersChoice + ".";
            document.querySelector("#result").style.color="#28a745";
        }

    document.querySelector("#computersChoice").textContent = "The computer's choice was " +computersChoice;
    document.querySelector("#result").textContent = result;
}
