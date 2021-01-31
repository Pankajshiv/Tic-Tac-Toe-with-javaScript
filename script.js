const statusDisplay=document.querySelector(".game--status");

let gameActive=true;

let currPlayer="X";

let gameState=["","","","","","","","",""];

// for dynamic we are using function for winningMsg,drawMsg and currPlayerTurn.
const winningMessage=()=> `Player ${currPlayer} Won!`;

const drawMessage=()=> `Game is draw !`;

const currPlayerTurn=()=> `it's player ${currPlayer}'s turn`;

const winningConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function handleResultValidation(){
    let result=false;
    for(let i=0;i<8;i++){
        const condition=winningConditions[i];
        let a=gameState[condition[0]];
        let b=gameState[condition[1]];
        let c=gameState[condition[2]];
        if(a===""||b===""||c===""){
            continue;
        }
        if(a===b && b===c){
            result=true;
            break;
        }
    }
    if(result){
        statusDisplay.innerHTML=winningMessage();
        gameActive=false;
        return;
    }
    // handle draw condition
    let roundDraw=!gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML=drawMessage();
        gameActive=false;
        return;
    }
    // player change
    currPlayer=currPlayer=="X" ? "O" :"X";
    statusDisplay.innerHTML=currPlayerTurn();
}

function handleCellClick(clickedCellEvent){
    const clickedCell=clickedCellEvent.target;     //it will give node which cell is clicked
    const clickedIndex=parseInt(clickedCell.getAttribute("cell-Index"));
    //console.log(clickedIndex);
    if(gameState[clickedIndex]!="" || !gameActive){
        return;
    }

    gameState[clickedIndex]=currPlayer;
    clickedCell.innerHTML=currPlayer;

    handleResultValidation();
}

function handleRestartClick(){
    gameActive=true;
    currPlayer="X";
    gameState=["","","","","","","","",""];
    statusDisplay.innerHTML=currPlayerTurn();
    document.querySelectorAll(".cell").forEach((cell)=>(cell.innerHTML=""));
}

document.querySelectorAll(".cell").forEach((cell)=>cell.addEventListener("click",handleCellClick));

document.querySelector(".game--restart").addEventListener("click",handleRestartClick);
