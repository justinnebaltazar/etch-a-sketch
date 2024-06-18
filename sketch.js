let grid = document.getElementById("grid"); 

function createGrid(length, width) {
    for (let i = 0; i < length; i++) {

        let row = document.createElement('div');
        row.setAttribute('class', 'rows');
        grid.appendChild(row);

        for (let j = 0; j < width; j++) {

            let gridSquare = document.createElement('div');
            gridSquare.setAttribute('class', 'squares');
            // DElETE
            gridSquare.textContent = i + 1;
            row.appendChild(gridSquare);

        }
    }
}

function changeColor() {
    let squares = document.querySelectorAll(".squares"); 
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('class', 'hovered'); 
        });
    });
}

createGrid(16, 16);
changeColor();