 const gameItem = document.querySelectorAll('.gameItem');
 const blockWinner = document.getElementById('blockWinner');
 const spanWinner = document.getElementById('spanWinner');
 const btnRestart = document.getElementById('btnRestart');
 const gameboard = document.getElementById('gameboard');
 const moveSpan = document.getElementById('moveSpan');

let step = "";
let winner = "";

const who =()=>{
    if(step == 'nulik'){
        step = 'krestik';
        moveSpan.textContent = 'Крестики';
    }else {
        step = 'nulik'
        moveSpan.textContent = 'Нулики';
    }
}

who();


  let counter = 0;

gameItem.forEach((item) =>{
 item.addEventListener('click',()=>{
    if(item.textContent){
        return;
    }

    if(!item.classList.contains('nulik') && !item.classList.contains('krestik')){
        item.classList.add(step)
        if(step == 'krestik'){
            item.textContent = "X";
        }
        if(step == 'nulik'){
            item.textContent = "0";
        }
    
      
        
    }
    counter ++;
    who();
    nulikWin();
    krestikkWin();
    noWin();
    
 })
})
let win = 
 [
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]  
 ]

   const nulikWin = ()=>{
    for(let i = 0;i < win.length; i++){
       if(
        gameItem[win[i][0]].classList.contains('nulik') && 
        gameItem[win[i][1]].classList.contains('nulik') && 
        gameItem[win[i][2]].classList.contains('nulik')
       ){
        gameItem[win[i][0]].classList.add('winColor') 
        gameItem[win[i][1]].classList.add('winColor') 
        gameItem[win[i][2]].classList.add('winColor')
        winner = "Нулики"
        endGame(winner);
        return ;
       }
    }
 }

 const krestikkWin = ()=>{
    for(let i = 0;i < win.length; i++){
       if(
        gameItem[win[i][0]].classList.contains('krestik') && 
        gameItem[win[i][1]].classList.contains('krestik') && 
        gameItem[win[i][2]].classList.contains('krestik')
       ){
        gameItem[win[i][0]].classList.add('winColor') 
        gameItem[win[i][1]].classList.add('winColor') 
        gameItem[win[i][2]].classList.add('winColor')
        winner = "Крестики"
        endGame(winner);
        return ;
       }
    }
 }

 const noWin = () =>{
 if(!krestikkWin() && !nulikWin() && (counter >= 9)){
    winner = "Ничья"
    endGame(winner);
   }
 }

 
const endGame = (winner) =>{
    gameboard.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex';
    spanWinner.textContent = winner;

}

btnRestart.addEventListener('click',() =>{
    document.location.reload()
})