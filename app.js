let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function choiceConverter(choice) {
    if ( choice === 'r') return "Rock";
    if  (choice === 's') return "Scissors";
    return "Paper";
}

function win(userChoice, cChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML =
    `Your ${choiceConverter(userChoice)} beats ${choiceConverter(cChoice)}. You win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);

}

function lose(uChoice, cChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(uChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(uChoice).classList.remove('red-glow') }, 500);
    result_div.innerHTML =
    `Your ${choiceConverter(uChoice)} loses to ${choiceConverter(cChoice)}. You lost!`
}

function draw(uChoice, cChoice) {
userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML =
    `IT\'s a DRAW!`
    document.getElementById(uChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(uChoice).classList.remove('gray-glow') }, 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
    // User wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
     // Comp Wins
        case "rp":
        case "ps":
        case "sr":
             lose(userChoice, computerChoice);
             break;
     // TIE or DRAW
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
rock_div.addEventListener('click', function() {
    game('r');
})
paper_div.addEventListener('click', function() {
    game('p');
})
scissors_div.addEventListener('click', function() {
    game('s');
})
}


main();