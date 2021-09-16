let userScore = 0;
let compScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result > p");
const rock_btn = document.getElementById('r');
const scissor_btn = document.getElementById('s');
const paper_btn = document.getElementById('p');


function getComputerChoice(){
    const choices = ['r','s','p'];
    const randInt = Math.floor(Math.random()*3);
    return choices[randInt];
}

function getName(choice){
    if(choice=='r'){
        return "rock";
    }
    else if(choice=='s'){
        return "scissor";
    }
    return "paper"
}

function win(user_comp){
    userScore++;
    userScoreDisplay.innerText = userScore;
    result_p.innerHTML = `User's ${getName(user_comp[0])} beats Computer's ${getName(user_comp[1])}.<br></br> You Won! &#128526;`;
    document.getElementById(user_comp[0]).classList.add('green-glow');
    setTimeout(()=>
    document.getElementById(user_comp[0]).classList.remove('green-glow') ,500)
}

function lose(user_comp){
    compScore++;
    compScoreDisplay.innerText = compScore;
    result_p.innerHTML = `Computer's ${getName(user_comp[1])} beats User's ${getName(user_comp[0])}.<br></br> You Lose! &#128533;`;
    document.getElementById(user_comp[0]).classList.add('red-glow');
    setTimeout(()=> document.getElementById(user_comp[0]).classList.remove('red-glow') ,500);
}

function draw(user_comp){
    result_p.innerHTML = `User's ${getName(user_comp[0])} equals Computer's ${getName(user_comp[1])}.<br></br> It's draw! &#128520;`;
    document.getElementById(user_comp[0]).classList.add('brown-glow');
    setTimeout(()=> document.getElementById(user_comp[0]).classList.remove('brown-glow'),500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log(userChoice+computerChoice);
    const user_comp = userChoice+computerChoice;

    switch(user_comp){
        case "rs":
        case "sp":
        case "pr":
            win(user_comp);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(user_comp);
            break;
        default:
            draw(user_comp);
    }
}

function main(){
    rock_btn.addEventListener('click',()=> game("r"));
    scissor_btn.addEventListener('click',()=>game("s"));
    paper_btn.addEventListener('click',()=>game("p"));
}
main();

//"user".fontsize(3).sup()
//"user".fontsize(3).sub()