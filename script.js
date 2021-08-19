var gridSize = parseInt(prompt("Enter Grid size: "));
console.log(gridSize);
initiate();
var usedColor = "black";

function initiate(){
    if(!Number(gridSize)){
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
    gridPixels.forEach(gridP => gridP.addEventListener('mouseover', pixelFillColor));
}

function pixelFillColor(){
    this.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}