function handleKeyPress(event) {
    if (event.key === 'Enter') {
        playGame();
    }
}
function playGame() {
    let game = document.getElementById("game").value.toLowerCase();
    let strings = ["rock", "paper", "scissors"];
    let randomString = strings[Math.floor(Math.random() * strings.length)];
    let computersChoice = "";
    let result = "";

    if (game === "rock" && randomString === "paper") {
        result = "You lose! " + randomString + " beats " + game + ".";
    } else if (game === "rock" && randomString === "scissors") {
        result = "You win! " + game + " beats " + randomString + ".";
    } else if (game === "paper" && randomString === "scissors") {
        result = "You lose! " + randomString + " beats " + game + ".";
    } else if (game === "paper" && randomString === "rock") {
        result = "You win! " + game + " beats " + randomString + ".";
    } else if (game === "scissors" && randomString === "rock") {
        result = "You lose! " + randomString + " beats " + game + ".";
    } else if (game === "scissors" && randomString === "paper") {
        result = "You win! " + game + " beats " + randomString + ".";
    } else {
        result = "Draw! Both chose " + game + ".";
    }
    computersChoice = randomString;
    document.getElementById("computersChoice").textContent = randomString;
    document.getElementById("result").textContent = result;
}
