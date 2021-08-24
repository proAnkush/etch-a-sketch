
initiate(10);
var usedColor = "black";

function initiate(gridSize){
    if(!Number(gridSize) || gridSize < 0 || gridSize > 100 || gridSize == undefined){
        var gridSize = 10;
        console.log("Setting grid size to 10");
    }
    let area = gridSize * gridSize;
    for(let i = 0; i < area;i++){
        let drawableGrid = document.querySelector("#drawableGrid");
        let gridSquare = document.createElement("div");
        drawableGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        drawableGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        drawableGrid.insertAdjacentElement('beforeend', gridSquare);
    }
    let gridPixels = drawableGrid.querySelectorAll("div");
    gridPixels.forEach(gridP => gridP.style.backgroundColor = "white");
    gridPixels.forEach(gridP => gridP.addEventListener('mouseover', pixelFillColor));
}

function pixelFillColor(){
    if(randomActive == true){
        this.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }else if(blackActive){
        this.style.backgroundColor = "black";
    }else if(eraserActive){
        this.style.backgroundColor = "white";
    }

}
function clear(){
    console.log("hello");
}


var clearButton = document.getElementById("clear");
var blackButton = document.getElementById("black");
var randomButton = document.getElementById("random");
var eraserButton = document.getElementById("eraser");
var blackActive = false;
var randomActive = true;
var eraserActive = false;

clearButton.addEventListener("click", function(){

    initiate(parseInt(prompt("enter grid size: ")));
})
blackButton.addEventListener("click", function(){
    blackButton.style.border = "2px solid yellow";
    randomButton.style.border = "0px";
    eraserButton.style.border = "0px";
    blackActive = true;
    randomActive = false;
    eraserActive = false;
    clearButton.style.border = "0px"
})
randomButton.addEventListener("click", function(){
    randomButton.style.border = "2px solid yellow";
    blackButton.style.border = "0px";
    eraserButton.style.border = "0px";
    randomActive = true;
    blackActive = false;
    eraserActive = false;
    clearButton.style.border = "0px"
})
eraserButton.addEventListener("click", function(){
    eraserButton.style.border = "2px solid yellow";
    blackButton.style.border = "0px";
    randomButton.style.border = "0px";
    eraserActive = true;
    randomActive = false;
    blackActive = false;
    clearButton.style.border = "0px"
})
