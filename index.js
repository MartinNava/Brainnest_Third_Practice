const options = ["scissors", "rock", "papper"];
const gameVal = true;

function game() {

    var playerSelection = 0;
    var computerSelection = 0;
    console.log("Let's begin");
    while (gameVal) {
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
};

function playRound(playerSelection, computerSelection) {
    if ((playerSelection > computerSelection) || (playerSelection == 0 && computerSelection == 2))
        return (`The Player Wins, ${options[playerSelection]} beats ${options[computerSelection]}`);
    else if (playerSelection === computerSelection)
        return (`It's a tie`)
    else
        return (`The computer Wins, ${options[computerSelection]} beats ${options[playerSelection]}`)
}

game();