function computerPlay () {
    let answer = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (answer == 1) {
        choice = "roche";
    } else if (answer == 2) {
        choice = "papier";
    } else {
        choice = "ciseau";
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let answer;
    let score;

    playerSelection = playerSelection.toLowerCase();
    console.log("COMPUTER: " + computerSelection);
    console.log("MOI: " + playerSelection);

    

    if (playerSelection == computerSelection) {
        answer = "It's a draw!";
        score = 0;
    } else if (playerSelection == "roche" && computerSelection == "papier") {
        answer = "Tu as perdu! Papier bat la roche";
        score = -1;
    } else if (playerSelection == "roche" && computerSelection == "ciseau") {
        answer = "Tu as gagné! La roche bat le ciseau";
        score = 1;
    } else if (playerSelection == "papier" && computerSelection == "roche") {
        answer = "Tu as gagné! Papier bat la roche";
        score = 1;
    } else if (playerSelection == "papier" && computerSelection == "ciseau") {
        answer = "Tu as perdu! Le ciseau bat le papier";
        score = -1;
    } else if (playerSelection == "ciseau" && computerSelection == "roche") {
        answer = "Tu as perdu! La roche bat le ciseau";
        score = -1;
    } else if (playerSelection == "ciseau" && computerSelection == "papier") {
        answer = "Tu as gagné! Le ciseau bat le papier";
        score = 1;
    }
    console.log(answer);
    return [answer, score]; 
}

function game () {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = computerPlay();
        const userChoice = prompt("Roche, papier ou ciseau?");
        
        let letPlay = playRound(userChoice, computerChoice);
        
        score = score + letPlay[1];
    }
    
    if (score > 0) {
        console.log("YOU WON THE WHOLE GAME!");
    } else {
        console.log("YOU LOST!");
    }
}

game();




