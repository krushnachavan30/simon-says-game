let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["one","two","three","four"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
        
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
  

//random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

   
    
    gameFlash(randBtn);
    gameFlash(randBtn);

}
function btnPress(){
    let btn=this;
    gameFlash(btn);

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    // console.log(userColor)
    // console.log("btn pressed")
    console.log(btn);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",(btnPress));
       
    
}
function checkAns(idx){
    // console.log("current level",level);
    // let idx=level-1;
    if(gameSeq[idx]==userSeq[idx]){
        // console.log("same seq")
        if(userSeq.length==gameSeq.length){

            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over,<b> Your Score is ${level}</b> <br> Press any key for restaryt`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="red";
        },1000);
            
       
        resate();
    }
}
function resate(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
    
}
