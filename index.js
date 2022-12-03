const options = ["scissors", "rock", "papper"];
const gameVal = 5;
var pScore = 0;
var cScore = 0;

function game() {

    var computerSelection = 0;
    console.log("Let's begin");
    for (let i = 0; i < gameVal; i++) {
        computerSelection = Math.floor(Math.random() * 3);
        let selection = prompt("Let's choose").toLowerCase();
        if (/scissors|rock|papper/.test(selection)) {
            result = playRound(selection, options[computerSelection]);
            console.log(result);
        }
        else
            console.log("The selection is not valid");
    }
    console.log(pScore < cScore ? `Computer wins ${cScore} : ${pScore}` : cScore < pScore ? `Player wins ${pScore} : ${cScore}` : "It's a tie");
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "scissors" && computerSelection === "papper")
        || (playerSelection === "papper" && computerSelection === "rock")
        || (playerSelection === "rock" && computerSelection === "scissors")) {
        pScore += 1
        return (`The Player Wins, ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === computerSelection)
        return (`It's a tie`)
    else {
        cScore += 1;
        return (`The computer Wins, ${computerSelection} beats ${playerSelection}`);
    }
}

game();