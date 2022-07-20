//global varibles tracking points
var player = 0;
var comp = 0;

// loop in which runs the game
for(let i=0;i<5;i++)
{
var user = prompt("choose rock, paper, scissors");
//generates a random numbers that sets it to either rock, paper, scissors
let randomizer=(Math.floor(Math.random()*3) + 1);
console.log(randomizer);
var computer = Ai(randomizer);
let user_Result = user.toLowerCase();
// run the rounds of the game
console.log(round(user,computer));
}


function Ai (number){
    if(number == 1)
    {
        return "rock";
    }
    else if(number == 2){
        return "paper";

    }
    else if(number == 3){
        return "scissors";
    }
}

function round(user,computer_AI)
{
    // conditions for user choosing rock
    if(user === "rock" && computer_AI === "paper"){ 
        comp = comp + 1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
    else if (user === "rock" && computer_AI === "scissors"){
        player=player+1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
    // conditions if users chooses paper
    if(user === "paper" && computer_AI === "scissors"){ 
        comp = comp + 1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
    else if (user === "paper" && computer_AI === "rock"){
        player=player+1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
    // conditions if user chooses scissors
    if(user === "scissors" && computer_AI === "rock"){ 
        comp = comp + 1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
    else if (user === "scissors" && computer_AI === "paper"){
        player=player+1;
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
    }
        // if there is a tie
        console.log("Tie");
        let result = "player " + "AI \n" + player + " " + comp;
        return result;
}   