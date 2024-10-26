const container = document.querySelector(".container");

let n = 16

for (let i = 0; i < n ** 2; i++) {
    const grid = document.createElement("div");
    container.appendChild(grid);
}