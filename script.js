// Create grid
const container = document.querySelector(".container");

let n = 16

for (let i = 0; i < n ** 2; i++) {
    const grid = document.createElement("div");
    const gridLength = 500 / n;
    grid.style.cssText = `background-color: white; height: ${gridLength}px; width: ${gridLength}px;`;
    container.appendChild(grid);
}


// Enable drawing



// Colour