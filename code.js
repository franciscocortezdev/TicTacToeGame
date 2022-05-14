const cells = document.querySelectorAll('.cell');
const btnStart = document.querySelector('.btn_start').addEventListener('click',startGame);
const winOptions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
const cellsActive = [];
let winCells = [];
let turnPlayerX = true;
let GameLive = false;

    
function startGame() {
    cells.forEach(cel=> cel.innerHTML = '');
     
    GameLive = true;
   
        cells.forEach((cell)=>{
            cell.addEventListener('click',(eCell)=>{
                if(eCell.target.innerHTML == '' && GameLive == true){
                    eCell.target.innerHTML = turnPlayerX ? 'X': 'O';
        
                    cellsActive.push(Number(eCell.target.dataset.cell))
                    turnPlayerX = !turnPlayerX;
                    evalGame();
                    
        
        
                }   
            }) 
        })

    

}




const evalGame = () =>{
    
    for (let i = 0; i < winOptions.length; i++) {        
            for (let j = 0; j < winOptions[i].length; j++) {
                if(cellsActive.includes(winOptions[i][j])){
                    winCells.push(winOptions[i][j])
                }
            }
        if(winCells.length == 3){
            console.log('Ganaste');
            endGame();
            break;
        } 
        
        winCells = [];
    }
    return winCells;
}


const endGame = ()=>{
    GameLive = false;
    cellsActive.length = 0;
    winCells = [];
    turnPlayerX = true;

}











