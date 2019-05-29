//Choosing Colors for boxes
var colors=document.querySelectorAll(".color");
selectColor();
//Set up of memory squares
var originalColor=[];
var currentSquare=0;
var remainingCorrect=4;
var remainingDisplay=document.querySelector(".remaining");
var attempts=0;
var attemptDisplay=document.querySelector(".attempt");
var boxes=document.querySelectorAll(".squares");
var star1=document.querySelector(".one");
var star2=document.querySelector(".two");
var star3=document.querySelector(".three");
assignColor();
//Reset button functionality 
var reset=document.querySelector(".reset");
reset.addEventListener("click",function(){
    selectColor();
    assignColor();
    attempts=0;
    remainingCorrect=4;
    attemptDisplay.textContent=0;
    remainingDisplay.textContent=4;
    reset.textContent="Reset";
    reserScore();
})
//Got it button functionality
var gotIt=document.querySelector(".btn-success");
gotIt.addEventListener("click",function(){
    storecolor();
    erasecolor();
})
//Select color functionality
var currentColor = "white";
for(var i=0;i<colors.length;i++){
    colors[i].addEventListener("click",function(){
        currentColor=this.style.backgroundColor;
})
}
//Redundant part
boxes[0].addEventListener("click",function(){
    attempts++;
    attemptDisplay.textContent=attempts;
    this.style.backgroundColor=currentColor;
    if(this.style.backgroundColor===originalColor[0])
            {
                //alert("matched");
                this.style.backgroundColor="#303030";
                remainingCorrect--;
                remainingDisplay.textContent=remainingCorrect;
                if(remainingCorrect==0)
                {
                    reset.textContent="Play Again!";
                    score();
                }
            }
})
boxes[1].addEventListener("click",function(){
    attempts++;
    attemptDisplay.textContent=attempts;
    this.style.backgroundColor=currentColor;
    if(this.style.backgroundColor===originalColor[1])
            {
                //alert("matched");
                this.style.backgroundColor="#303030";
                remainingCorrect--;
                remainingDisplay.textContent=remainingCorrect;
                if(remainingCorrect==0)
                {
                    reset.textContent="Play Again!";
                    score();
                }
            }
})
boxes[2].addEventListener("click",function(){
    attempts++;
    attemptDisplay.textContent=attempts;
    this.style.backgroundColor=currentColor;
    if(this.style.backgroundColor===originalColor[2])
            {
                //alert("matched");
                this.style.backgroundColor="#303030";
                remainingCorrect--;
                remainingDisplay.textContent=remainingCorrect;
                if(remainingCorrect==0)
                {
                    reset.textContent="Play Again!";
                    score();
                }
            }
})
boxes[3].addEventListener("click",function(){
    attempts++;
    attemptDisplay.textContent=attempts;
    this.style.backgroundColor=currentColor;
    if(this.style.backgroundColor===originalColor[3])
            {
                //alert("matched");
                this.style.backgroundColor="#303030";
                remainingCorrect--;
                remainingDisplay.textContent=remainingCorrect;
                if(remainingCorrect==0)
                    {
                        reset.textContent="Play Again!";
                        score();
                    }
            }
})
//Utility functions
function selectColor(){
    for(var i=0;i<colors.length;i++)
    {
        colors[i].style.backgroundColor = givecolor();
    }
}
function givecolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var result="rgb(" + r + ", " + g + ", " + b;
    console.log(result);
    return result;
}
function assignColor(){
    for(var i=0;i<boxes.length;i++)
    {
        boxes[i].style.backgroundColor = colors[Math.floor(Math.random()*4)].style.backgroundColor;
    }
}
function storecolor(){
    for(var i=0;i<boxes.length;i++)
    {
       
        originalColor[i]=boxes[i].style.backgroundColor;
        console.log(originalColor[i],boxes[i].style.backgroundColor);
    }
}
function erasecolor(){
    for(var i=0;i<boxes.length;i++)
    {
        boxes[i].style.backgroundColor="white";
    }
}
if(remainingCorrect==0)
{
    reset.textContent="Play Again!";
}
function score(){
    if(attempts<=6)
    {
        star1.style.color="white";
        star2.style.color="white";
        star3.style.color="white";
    }
    else if(attempts>6&&attempts<=10)
    {
        star1.style.color="white";
        star2.style.color="white";
    }
    else
    {
        star1.style.color="white";
    }
}
function reserScore(){
    star1.style.color="#303030";
    star2.style.color="#303030";
    star3.style.color="#303030";
}