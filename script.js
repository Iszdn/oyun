 userChoice = prompt("Do you choose rock, paper or scissors?");

 computerChoice =Math.floor( Math.random() *3);

if (computerChoice === 1) {

    computerChoice = "rock";

} else if (computerChoice === 2) {

    computerChoice = "paper";

} else {

    computerChoice = "scissors";

} console.log("Computer " + computerChoice);

 choice1 = userChoice;
choice2 = computerChoice;
compare = function (choice1, choice2) {
    if (choice1 === choice2) {

        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {

            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins";
        }
        else {
            return "rock wins";
        }
    }
}

console.log(compare(choice1, choice2));
