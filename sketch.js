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


createGrid(16, 16);
startSketch();