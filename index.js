const options = ["scissors", "rock", "papper"];
const gameVal = 5;
var pScore = 0;
var cScore = 0;

function game() {

    var playerSelection = 0;
    var computerSelection = 0;
    console.log("Let's begin");
    for (let i = 0; i < gameVal; i++) {
        computerSelection = Math.floor(Math.random() * 3);
        let selection = prompt("Let's choose").toLowerCase();
        if (/scissors|rock|papper/.test(selection)) {
            playerSelection = options.indexOf(selection);
            result = playRound(playerSelection, computerSelection);
            console.log(result);
        }
        else
            console.log("The selection is not valid");
    }
    console.log(pScore < cScore ? `Computer wins ${cScore} : ${pScore}` : cScore < pScore ? `Player wins ${pScore} : ${cScore}` : "It's a tie");
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection > computerSelection) || (playerSelection == 0 && computerSelection == 2)) {
        pScore += 1
        return (`The Player Wins, ${options[playerSelection]} beats ${options[computerSelection]}`);
    }
    else if (playerSelection === computerSelection)
        return (`It's a tie`)
    else {
        cScore += 1;
        return (`The computer Wins, ${options[computerSelection]} beats ${options[playerSelection]}`);
    }
}

game();