let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container")

let turnO=true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () =>{
let turnO=true;
enableboxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("hello")
        if(turnO=== true){
            box.innerText="O";
            box.style.color="#401971";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="#5097de";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})



const disableboxes = () =>{
     for(let box of boxes){
        box.disabled=true;
     }
}
const enableboxes = () =>{
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     }
}




const showWinner = (winner) =>{
     msg.innerText=`Congratulations,Winner is ${winner}`;
     msgContainer.classList.remove("hide");
    // alert(`congratulation winner is ${winner}`);
     disableboxes();
}






const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                   
                showWinner(pos1Val);
               
            }
        }


    }
}


newGamebtn.addEventListener("click",()=>{
          resetGame();
});
resetbtn.addEventListener("click",()=>{
          resetGame();
});

































