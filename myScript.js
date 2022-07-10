const start = document.querySelector('#start');
const middlediv = document.querySelector('.middle-bottom');
const icons = document.querySelectorAll('.icon');
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
const userScoreMobile = document.querySelector('.user-score-mobile');
const computerScoreMobile = document.querySelector('.computer-score-mobile');
const header = document.querySelector('.header');
let totalCPUScore = 0;
let totalUserScore = 0;

start.addEventListener('click', removeButton);

function removeButton () {
    middlediv.removeChild(start);
    middlediv.classList.toggle('begin');
    middlediv.innerHTML = "Premier à 5!";
    setTimeout(emoji, 3000);
    setTimeout(playy, 3000);

}

function emoji() {
    icons.forEach((icon) => {
        icon.classList.toggle('emoji');
        middlediv.innerHTML = "Go!";
        icon.addEventListener('click', () => {
            icon.style.transform = "scale(1.2)";
            setTimeout(()=>{
                icon.style.transform = "scale(1)";
             },125)
        })
    });
};

function playy () {    
        icons.forEach((icon) => {
            icon.addEventListener('click', () => {
                playerSelection = icon.getAttribute('id');
                playOn = playRound(playerSelection, computerPlay());
                if (playOn[1] <= 5 && playOn[2] <= 5) {
                    computerScore.innerHTML = `${playOn[1]}`;
                    computerScoreMobile.innerHTML = `&nbsp;${playOn[1]}`;
                    userScore.innerHTML = ` ${playOn[2]}`;
                    userScoreMobile.innerHTML = `&nbsp;&nbsp;&nbsp;${playOn[2]}`;
                    middlediv.innerHTML = `${playOn[0]}`;
                    if (playOn[1] >= 5 || playOn[2] >= 5) {
                        middlediv.innerHTML = "La partie est terminée. Merci d'avoir joué à Roche Papier Pinot!";
                    }
                }    
            })
        })    
};

function computerPlay () {
    let answer = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (answer == 1) {
        choice = "roche";
    } else if (answer == 2) {
        choice = "papier";
    } else {
        choice = "pinot";
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let answer;
    let userScore = 0;
    let computerScore = 0;

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        answer = "Joute nulle!";
    } else if (playerSelection == "roche" && computerSelection == "papier") {
        answer = "Doh! Le papier bat la roche";
        computerScore = 1;
        
    } else if (playerSelection == "roche" && computerSelection == "pinot") {
        answer = "Yessir Miller! La roche éclate le pinot";
        userScore = 1;
    } else if (playerSelection == "papier" && computerSelection == "roche") {
        answer = "Woohoo! Le papier bat la roche";
        userScore = 1;
    } else if (playerSelection == "papier" && computerSelection == "pinot") {
        answer = "Dommage.. Le pinot bat le papier";
        computerScore = 1;
    } else if (playerSelection == "pinot" && computerSelection == "roche") {
        answer = ":( La roche éclate le pinot";
        computerScore = 1;
    } else if (playerSelection == "pinot" && computerSelection == "papier") {
        answer = "Igloo igloo! Le pinot bat le papier";
        userScore = 1;
    }
    totalCPUScore = totalCPUScore + computerScore;
    totalUserScore = totalUserScore + userScore;

    return [answer, totalCPUScore, totalUserScore]; 
}





