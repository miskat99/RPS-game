var win = 0;
var loss = 0;
var tie = 0;
var option = "rps".toUpperCase().split(''); 

function introgame() {
    alert('Welcome the rock, paper and seisor game')
}

function getuserchoice() {
    var choice = prompt('Pleaser enter R, P or S');
    if(option.includes(choice)) {
        return choice;
    }
    return getuserchoice();

}

function getcomputerChoice() {
    var randomseed = Math.random();
    var index = option.length;
    var randomIndex = Math.floor(randomseed * index);
    return option[randomIndex];
    
}

function checkWin(userChoice,computerchoice) {
    if(userChoice === computerchoice) {
        alert('computerChoice', computerchoice);
        ties();
    } else if (
        (userChoice === 'R' && computerchoice === 'P') ||
        (userChoice === 'P' && computerchoice === 'S') ||
        (userChoice === 'S' && computerchoice === 'R') 
    ) {
        alert('computerChoice', computerchoice);
        wins();
    } else {
        alert('computerChoice', computerchoice);
        losses();
    }
}

function ties() {
    alert('its a ties!!');
    tie++;
}

function wins() {
    alert('its a win!!');
    win++;
}

function losses() {
    alert('it a loss!!');
    loss++;
}

function startGame() {
    introgame();
    var userChoice = getuserchoice();
    var computerchoice = getcomputerChoice();
    checkWin(userChoice,computerchoice);
    alert(`Score Board:
wins: ${win}
losses: ${loss}
ties: ${tie}
`); 
if(confirm('play again')) {
    startGame();
} else {'thanks for playing'
}

}

introgame();
getcomputerChoice;
getuserchoice;
startGame();
checkWin();
ties();
wins();
losses();