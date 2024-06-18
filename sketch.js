let grid = document.createElement('div'); 
grid.setAttribute('id', 'grid');

let container = document.querySelector('#container'); 
container.appendChild(grid);

let length; 
let width;

function createGrid(length, width) {

    for (let i = 0; i < length; i++) {

        let row = document.createElement('div');
        row.setAttribute('class', 'rows');
        grid.appendChild(row);

        for (let j = 0; j < width; j++) {

            let gridSquare = document.createElement('div');
            gridSquare.setAttribute('class', 'squares');
            // DElETE LATER
            gridSquare.textContent = i + 1;
            row.appendChild(gridSquare);

        }
    }
}


function startSketch() {

    function changeColor() {
        let squares = document.querySelectorAll(".squares"); 
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.setAttribute('class', 'hovered'); 
            });
        });
    }

    let sketch = document.getElementById("grid");
    sketch.addEventListener('click', () => {
        // i want this to trigger the changeColor function 
        changeColor();
    })
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

    deleteGrid();
    
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);

    createGrid(length_int, width_int);
});

createGrid(16, 16);
startSketch();
