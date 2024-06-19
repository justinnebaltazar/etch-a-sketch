let container = document.querySelector('#container'); 

function createGrid(length, width) {

    let grid = document.createElement('div'); 
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);

    // assuming grid is not a square 
    let squareSize = Math.floor(660 / Math.max(length, width));

    for (let i = 0; i < length; i++) {
        let row = document.createElement('div'); 
        row.setAttribute('class', 'rows'); 
        grid.appendChild(row); 

        for (let j = 0; j < width; j++) {
            let gridSquare = document.createElement('div'); 
            gridSquare.setAttribute('class', 'squares'); 
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            row.appendChild(gridSquare);
        }
    }

    startSketch();
}


function startSketch() {

    function changeColor() {
        let squares = document.querySelectorAll(".squares"); 
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.classList.add('hovered'); 
            });
        });
    }

    let sketch = document.getElementById("grid");
    sketch.addEventListener('click', () => {
        changeColor();
    });
}

function deleteGrid() {
    let container = document.getElementById('container'); 
    container.removeChild(grid);

}

let btn = document.querySelector('button'); 
btn.addEventListener('click', () => {
    length = prompt("Grid length: ");
    width = prompt("Grid width: ")
    
    let length_int = parseInt(length);
    let width_int = parseInt(width);

    if (isNaN(length_int) || isNaN(width_int) || length_int <= 0 || width_int <= 0) {
        alert("Grid dimensions must be valid positive numbers.")
        return;
    }

    deleteGrid();
    createGrid(length_int, width_int);
});

createGrid(16, 16);
startSketch();
