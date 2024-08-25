const bestMove =()=>{
    let bestScore = -Infinity;
    let move="nomove";
    for(let i=0;i<9;i++){
        if(board[i]==" "){
            board[i]="O";
            let score = minimax(board,false);
            board[i]=" ";
            if(score>bestScore){
                bestScore = score;
                move=i;
            }
        }
        
    }
    return move;
}

const minimax = (board,depth,isMaxMin)=>{
    let res = checkWinner();
    if(res==1){
        return -10-depth;
    }
    if(res==2){
        return 10-depth;
    }
    if(res==-1){
        return 0;
    }
    let bestScore;
    if(isMaxMin){
        bestScore=-Infinity;
        for(let i=0;i<9;i++){
            if(board[i]==" "){
                board[i]="O";
                let score = minimax(board,depth+1,false);
                board[i]=" "
                bestScore=Math.max(score,bestScore);
            }
        }
    }
    else{
        bestScore=Infinity;
        for(let i=0;i<9;i++){
            if(board[i]==" "){
                board[i]="X";
                let score = minimax(board,depth+1,true);
                board[i]=" "
                bestScore=Math.min(score,bestScore);
            }
        }
    }
    return bestScore;
}
