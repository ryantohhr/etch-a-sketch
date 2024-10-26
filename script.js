// Generate grid
const container = document.querySelector(".container");
const sizeValue = document.querySelector(".size-value");

sizeValue.textContent = "16 x 16";

let gridSize = 16;
let gridColor = "black";
generateGrid(gridSize);
setColor(gridSize);

function generateGrid(n) {
    for (let i = 0; i < n ** 2; i++) {
        const grid = document.createElement("div");
        const gridLength = 500 / n;
        grid.style.cssText = `background-color: white; flex: 1 1 auto; height: ${gridLength}px; width: ${gridLength}px;`;
        
        // Create grid
        container.appendChild(grid);
    };
}

function setColor(n) {
    const grids = document.querySelectorAll(".container div");
    grids.forEach(function(grid) {
        grid.addEventListener('mouseenter', () => {
            switch (gridColor) {
                case "black":
                    grid.style.cssText += "background-color: black;";
                    break;
                case "random":
                    grid.style.cssText += `background-color: ${getRandomColor()};`;
                    break;
                case "white":
                    grid.style.cssText += "background-color: white;";
                    break;
            }
        });
    });       
}


// Change grid size based on size slider
const sizeSlider = document.querySelector(".size-slider");
sizeSlider.oninput = (e) => {
    gridSize = e.target.value;
    updateGrid(gridSize);
}

function updateGrid(n) {
    // Update size value
    updateSizeValue(n);

    // Remove current grid
    removeGrid();

    // Reload grid
    generateGrid(n);
}

function updateSizeValue(n) {
    sizeValue.innerHTML = `${n} x ${n}`;
}

function removeGrid() {
    container.innerHTML = "";
}


// Clear grid
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', () => {
    clearGrid(gridSize);
})

function clearGrid(n) {
    removeGrid();

    generateGrid(n);

    setColor(n);
}


// Switch to rainbow mode
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener('click', () => {
    gridColor = "random";
})

function getRandomColor() {
    const digits = "0123456789abcdef"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    };

    return color;
}


// Switch to eraser mode
const eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener('click', () => {
    gridColor = "white";
})