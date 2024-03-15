let boxes=document.querySelectorAll(".box");
let result= document.querySelector(".result");
let winMsg=document.querySelector("#win-msg");
let newGame=document.querySelector("#newgame")
let reset=document.querySelector("#reset");
let count=0;

console.log(boxes)
let turnO=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            box.style.color = '#cad2c5';
            turnO=false;
        }
        else{
            box.innerText='X';
            box.style.color = '#84A98C';
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWin();
        
        if(count===9 && !isWinner){
            gameDraw()
          
        }
    });
});
const gameDraw = () => {
    winMsg.innerText = `Game was a Draw.`;
    result.classList.remove("hide");
    disableBox();
  };
const checkWin=()=>{
    for(let pattern of winPattern ){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val)
                return true;
            }
        }
        
    }
}
const showWinner=(Result)=>{
    winMsg.innerText=`Congratulations ${Result} Wins`
    result.classList.remove("hide")
    disableBox();
}

const disableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true
    })
}

newGame.addEventListener("click" ,resetGame)
reset.addEventListener("click" ,resetGame)
function resetGame(){
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turnO=true;
    count=0;
    result.classList.add("hide");
}