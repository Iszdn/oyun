computerChoice =Math.floor( Math.random() *3);
if (computerChoice =1) {
    computerChoice = "rock";
}
if (computerChoice =2) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
console.log("COmputerin secimi" + computerChoice);

const rockIcon=document.getElementById("rockIcon")
const scissorsIcon=document.getElementById("scissorsIcon")
const paperIcon=document.getElementById("paperIcon")
const body=document.querySelector('body')

rockIcon.addEventListener('click',(e)=>{
    const result=document.createElement('p')
     body.append(result)

    let computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    }
    if (computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    e.preventDefault()
    if (computerChoice==="rock") {
        result.textContent= "The result is a tie!";
    }
    if (computerChoice==="paper") {
        result.textContent= "computer win";
    }
    if (computerChoice==="scissors") {
        result.textContent= "you win";
    }
})