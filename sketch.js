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
            // initialize opacity interaction count
            gridSquare.dataset.opacityCount = 0;
            row.appendChild(gridSquare);
        }
    }

    startSketch();
}

function startSketch() {
    let squares = document.querySelectorAll(".squares"); 

    function changeColor() {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.classList.remove('rainbow');
                square.classList.add('hovered');
                square.style.backgroundColor = '';
            });
        });
    };

    function applyRandomColor() {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.classList.remove('hovered'); 
                square.classList.add('rainbow'); 

                const getColorNumber  = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                let r = getColorNumber(0, 255); 
                let g = getColorNumber(0, 255); 
                let b = getColorNumber(0, 255); 
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 

            });
        });
         
    };

    function increaseOpacity() {
        squares.forEach((square) => {
            square.addEventListener('mouseover', increaseOpacityHandler);
        });
    };

    function increaseOpacityHandler(event) {
        let square = event.target; 
        let opacityCount = square.dataset.opacityCount;
        if (opacityCount < 10) {
            opacityCount += 1; 
            square.dataset.opacityCount = opacityCount; 
            let newOpacity = opacityCount * 0.1; 
            square.style.opacity = newOpacity;
            if (newOpacity >= 1) {
                square.style.backgroundColor = 'black';
            }
        }
    };

    function removeOpacity() {
        squares.forEach((square) => {
            square.removeEventListener('mouseover', increaseOpacityHandler);
        });
    }

    


    // event listeners for the color scheme buttons
    let defaultButton = document.querySelector('.default');
    defaultButton.addEventListener('click', () => {
        removeOpacity(); 
        changeColor();
    });

    let randomButton = document.querySelector('.random');
    randomButton.addEventListener('click', () => {
        removeOpacity(); 
        applyRandomColor(); 
    }); 

    let opacityButton = document.querySelector('.darken'); 
    opacityButton.addEventListener('click', () => {
        removeOpacity();
        increaseOpacity();
    });

    changeColor(); 
}
   
function deleteGrid() {
    let container = document.getElementById('container'); 
    container.removeChild(grid);

}

let btn = document.querySelector('.title button'); 
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