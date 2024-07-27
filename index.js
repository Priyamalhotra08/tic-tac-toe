let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let container = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-game");
let turn0 = true;
let count = 0;
let winarr = [
    [0,1,2,0,-9,0],
    [0,4,8,0,0,45],
    [0,3,6,-9,0,90],
    [1,4,7,0,0,90],
    [2,5,8,9,0,90],
    [2,4,6,0,0,135],
    [3,4,5,0,0,0],
    [6,7,8,0,9,0],
];
const resetGame= () =>{
turn0 = true;
enablebox();
container.classList.add("hide");
document.querySelector(".line").style.width = "0vw";

count =0;
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
    if(turn0== true){
       box.innerText = "0";
       box.style.color = "black";
        turn0 = false;
    }else{
        box.innerText = "X";
        box.style.color = "red";
        turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    count++;
    let isWinner = checkWinner();
              if(count ==9 && !isWinner){
                gameDraw();
              }
    });

    });
   
    const disablebox = () =>{
        for (let box of boxes ){
            box.disabled = true;
        }
        }
        const enablebox = () =>{
            for (let box of boxes ){
                box.disabled = false;
                box.innerText ="";
              
            }
            };
        
            let showWinner=(show)=>{
                msg.innerText = `Congratulations, winner is ${show}`;
                container.classList.remove('hide');
                document.querySelector(".line").style.width = "0vw";

                disablebox();
               
              }
              
              const gameDraw =()=>{
                msg.innerText = 'The game is draw';
                container.classList.remove('hide');
              
                disablebox();
              
              }
       
 const checkWinner=()=>{
    for(let val of winarr){
        let val1 = boxes[val[0]].innerText;
        let val2 = boxes[val[1]].innerText;
        let val3 = boxes[val[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
           if(val1 === val2 && val2=== val3){
           console.log("Winner", val1);
    
     
          setTimeout(()=> {
        showWinner(val1);
           }, 1900);
           document.querySelector(".line").style.width = "25vw"
           document.querySelector(".line").style.transform = `translate(${val[3]}vw,${val[4]}vw) rotate(${val[5]}deg)` 
        }
    }
}
 }
 newGame.addEventListener("click", resetGame);
 reset.addEventListener("click", resetGame);