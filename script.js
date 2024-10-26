const container = document.querySelector(".container");

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



// Colour