const container = document.querySelector(".container");
const sizeValue = document.querySelector(".size-value");

sizeValue.textContent = "16 x 16";

let n = 16;
generateGrid(n);

function generateGrid(n) {
    for (let i = 0; i < n ** 2; i++) {
        const grid = document.createElement("div");
        const gridLength = 500 / n;
        grid.style.cssText = `background-color: white; flex: 1 1 auto; height: ${gridLength}px; width: ${gridLength}px;`;
        
        // Create grid
        container.appendChild(grid);
    
        // Enable drawing
        grid.addEventListener('mouseenter', () => {
            grid.style.cssText += "background-color: black;";
        });
    };
}

const sizeSlider = document.querySelector(".size-slider");
sizeSlider.oninput = (e) => updateGrid(e.target.value);

// Change grid size based on size slider
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

// Colour