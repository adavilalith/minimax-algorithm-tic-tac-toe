let board=[" "," "," "," "," "," "," "," "," ",]
let turn = 0
let running=true
const handleClick = (cell)=>{
    if(!running){
        document.getElementById("msg").innerHTML="press reset"
        return;
    }
    console.log(cell)
    if(board[cell]!=" "){
      document.getElementById("msg").innerHTML="cell full"
      return;
    }
    if(turn%2==0){
      document.getElementById("msg").innerHTML=""
        board[cell]="X"
        document.getElementById("c"+cell).innerHTML+="X"
        cell=bestMove()
        console.log("ai",cell)
        board[cell]="O"
        document.getElementById("c"+cell).innerHTML+="O"
    }
    let res = checkWinner();
    if(res==1||res==2){
        console.log("winner is ",((turn%2)?"X":"O"))
        document.getElementById("msg").innerHTML="winner is "+((turn%2)?"X":"O")
        running=false
    } 
    if(res==-1){
        document.getElementById("msg").innerHTML="Tie"
        console.log("Tie")
        running=false
    }
    turn+=2
    console.log(board)
} 

const checkWinner = () => {
  
    const winCond = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let cond = 0; cond < 8; cond++) {
      let Xwin = true;
      let Owin = true;
      for (let i = 0; i < 3; i++) {
        if (board[winCond[cond][i]] != "X") {
          Xwin = false;
          break;
        }
      }
      if (Xwin) {
        return 1;
      }
      for (let i = 0; i < 3; i++) {
        if (board[winCond[cond][i]] != "O") {
          Owin = false;
          break;
        }
      }
      
      if (Owin) {
        return 2;
      }
    }
    let fullCond = true;
    for (let i = 0; i < 9; i++) {
      if (board[i] == " ") {
        fullCond = false;
        break;
      }
    }
    if (fullCond) {
      return -1;
    }
    return 0
};
  
const reset = ()=>{
    for(let i=0;i<9;i++){
        document.getElementById("c"+i).innerHTML=" "
        board[i]=" "
    }
    running=true
    document.getElementById("msg").innerHTML=""

}
