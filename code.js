const cells = document.querySelectorAll('.cell');
const player = document.querySelector('.head_playerTurn');
const btnStart = document.querySelector('.btn_start').addEventListener('click',startGame);
const winOptions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
const cellsActiveX = [];
const cellsActiveO = [];
let winCellsX = [];
let winCellsO = [];
let turnPlayer = true;
let GameLive = false;

    
function startGame() {
    cells.forEach(cel=> cel.innerHTML = '');
     
    GameLive = true;
   
        cells.forEach((cell)=>{
            cell.addEventListener('click',(eCell)=>{
                if(eCell.target.innerHTML == '' && GameLive == true){
                    if (turnPlayer){
                        cellsActiveX.push(Number(eCell.target.dataset.cell))
                        eCell.target.innerHTML = 'X';
                        playerTurn();
                        evalGame();
                    }else{  
                        eCell.target.innerHTML = 'O';
                        cellsActiveO.push(Number(eCell.target.dataset.cell))
                        playerTurn();
                        evalGame();

                    }
                }   
            }) 
        })
}




const evalGame = () =>{
    
    for (let i = 0; i < winOptions.length; i++) {        
            for (let j = 0; j < winOptions[i].length; j++) {
                if(cellsActiveX.includes(winOptions[i][j])){
                    winCellsX.push(winOptions[i][j])
                }
                if(cellsActiveO.includes(winOptions[i][j])){
                    winCellsO.push(winOptions[i][j])
                }
            }
        if(winCellsX.length == 3){
            console.log('Ganaste');
            endGame();
            break;
        } 
        if(winCellsO.length == 3){
            console.log('Ganaste');
            endGame();
            break;
        } 
        
        winCellsX = [];
        winCellsO = [];
    }
    
}


const endGame = ()=>{
    GameLive = false;
    cellsActiveX.length = 0;
    cellsActiveO.length = 0;
    winCellsX = [];
    winCellsO = [];
    turnPlayer = true;

}

function playerTurn(){
    
    if(turnPlayer){
        player.innerHTML = 'O'
        turnPlayer = !turnPlayer;
    }else{
        player.innerHTML = 'X'
        turnPlayer = !turnPlayer;
    }
        

}









