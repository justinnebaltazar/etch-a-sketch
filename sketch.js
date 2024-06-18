let container = document.getElementById("container"); 
let number = 1;

function createGrid(length, width) {
    for (let i = 0; i < length; i++) {
        let row = document.createElement('div'); 
        container.appendChild(row);
        for (let j = 0; j < width; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.textContent = number; 
            number = number + 1; 
            row.appendChild(gridSquare);
        }
    }
}

createGrid(16, 16);