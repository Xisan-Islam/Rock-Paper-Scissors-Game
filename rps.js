


let options = document.querySelectorAll(".option");
//When a button will be clicked the text of the div should be changed

const result = document.querySelector("#msg");
const urScore = document.querySelector("#your");

const compScore = document.querySelector("#computer");



const showWinner = (uWin, urChoice, computerChoice) => {
    if(uWin === true) {
        console.log("You Win!");
        result.innerText = `You Win! Your ${urChoice} beats ${computerChoice}`;
        result.style.backgroundColor = "green";
        urScore.innerText++;
    }else{
        console.log("You lost!");
        result.innerText = `You Lose! Your ${urChoice} loses to ${computerChoice}`;
        result.style.backgroundColor = "red";
        compScore.innerText++;
    }
}


const drawGame = (urChoice, computerChoice) => {
        console.log("It's a Draw!");
        result.innerText = `It's a Draw! ${urChoice} = ${computerChoice} Play Again`;
        result.style.backgroundColor = "blue";
    
};


const genCompChoice = () => {
    let choices = ["rock",'paper', "scissors"];
    let compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
}

let uWin = true;
const playGame = (urChoice) => {

    console.log(`Your choice is = ${urChoice}`);
    computerChoice = genCompChoice();
    console.log(`Computer choice is = ${computerChoice}`);

    if (urChoice === computerChoice){
        drawGame(urChoice, computerChoice);
        return;///There was a great bug in this code The bug is when you call back a function in your if statement you will have to return the function. If you don't then the if function will not execute the if else statement in this case.The bug in the code is that even when it's a draw, the code still executes the else if and else statements, which can lead to incorrect results. To fix this, you should add a return statement after calling the drawGame function in the if statement that checks for a draw. This will prevent the code from executing the else if and else statements when it's a draw.
    }
     else if(urChoice === "rock"){ 
        
        
           
        //scissors, paper
        uWin = computerChoice === "paper"? false : true ;
    }
    else if(urChoice === "paper"){
        //rock, scissors
        uWin = computerChoice === "scissors"? false : true;
    }
    else {
        //paper, rock
        uWin = computerChoice === "rock"? false : true;
    
    }

showWinner(uWin, urChoice, computerChoice);


} ;



for (let option of options){
    let urChoice = option.getAttribute("id"); 
    option.addEventListener("click", () => {
    
        playGame(urChoice);
   })
}







/**Let's add some extra functonality in the game**/


let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Dark";




mode.addEventListener("click", () => {
   
if(currMode === "Light"){
    currMode = "Dark";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    mode.innerText = "Light Mode"
    
    
}else{
    currMode = "Light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    mode.innerText = "Dark Mode";
    // mode.classList.add ("opt");
    // mode.classList.remove ("option");
    
     
    
        
    }
    
    console.log(currMode);});



 



































































































































































