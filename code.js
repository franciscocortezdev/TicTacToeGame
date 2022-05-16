const cells = document.querySelectorAll('.cell');
const playerWinner = document.querySelector('.head_player');
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
  playerWinner.classList.remove('winner');
  playerWinner.classList.remove('empate');
  playerWinner.innerHTML = 'Turno del jugador: X';
  cellsActiveX.length = 0;
  cellsActiveO.length = 0;
  winCellsX = [];
  winCellsO = [];
  GameLive = true;
    
  cells.forEach((cell)=>{
    cell.classList.remove('win');
    cell.addEventListener('click',(eCell)=>{
      if(eCell.target.innerHTML == '' && GameLive == true){
        if (turnPlayer){
          cellsActiveX.push(Number(eCell.target.dataset.cell))
          eCell.target.innerHTML = `<p data-P="${Number(eCell.target.dataset.cell)}">X</p>`;
          playerTurn();
          evalGame();
            
        }else{  
          eCell.target.innerHTML = `<p data-P="${Number(eCell.target.dataset.cell)}">O</p>`;
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
      winGame();
      endGame();
      break;
    } 
    if(winCellsO.length == 3){
      winGame();
      endGame();
      break;
    } 
    let totalCells = [...cellsActiveX, ...cellsActiveO];
    if (totalCells.length == 9){
      winGame();
      endGame();
    }


    winCellsX = [];
    winCellsO = [];
  }
    
}


const endGame = ()=>{
  GameLive = false;
  turnPlayer = true;

}

function playerTurn(){
    
  if(turnPlayer){
    playerWinner.innerHTML = 'Turno del jugador: O';
    turnPlayer = !turnPlayer;
  }else{
    playerWinner.innerHTML = 'Turno del jugador: X';
    turnPlayer = !turnPlayer;
  }
}

const winGame = ()=>{ 
  if (winCellsX.length == 3){
    playerWinner.classList.add('winner');
    playerWinner.innerHTML = 'Ganador jugador: X';
    let cellWin1 = document.querySelector(`[data-P="${winCellsX[0]}"]`)
    let cellWin2 = document.querySelector(`[data-P="${winCellsX[1]}"]`)
    let cellWin3 = document.querySelector(`[data-P="${winCellsX[2]}"]`)

    cellWin1.classList.add('win');
    cellWin2.classList.add('win');
    cellWin3.classList.add('win');

  }else if(winCellsO.length == 3){
    playerWinner.classList.add('winner');
    playerWinner.innerHTML = 'Ganador jugador: O';

    let cellWin1 = document.querySelector(`[data-P="${winCellsO[0]}"]`)
    let cellWin2 = document.querySelector(`[data-P="${winCellsO[1]}"]`)
    let cellWin3 = document.querySelector(`[data-P="${winCellsO[2]}"]`)

    cellWin1.classList.add('win');
    cellWin2.classList.add('win');
    cellWin3.classList.add('win');


  }else if(winCellsX.length<3 && winCellsO.length<3){
    playerWinner.classList.add('empate');
    playerWinner.innerHTML = 'Juego empatado';



  }
}









