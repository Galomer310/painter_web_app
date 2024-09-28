const colorBar = document.querySelectorAll('.color-option');
const canvas = document.getElementById('canvas');
const clearButton = document.getElementById('clearButton'); 

let selectedColor = 'black';  
let isDrawing = false;

colorBar.forEach(colorOption => {
    colorOption.addEventListener('click', function() {
        selectedColor = this.getAttribute('data-color');
    });
});

for (let i = 0; i < 500; i++) { 
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');
    canvas.appendChild(gridDiv);

    
    gridDiv.addEventListener('click', function() {
        this.style.backgroundColor = selectedColor;
    });

    gridDiv.addEventListener('mouseover', function() {
        if (isDrawing) {
            this.style.backgroundColor = selectedColor;
        }
    });
}

document.body.addEventListener('mousedown', () => isDrawing = true);
document.body.addEventListener('mouseup', () => isDrawing = false);


clearButton.addEventListener('click', () => {
    const gridDivs = document.querySelectorAll('.grid-div');
    gridDivs.forEach(div => {
        div.style.backgroundColor = 'white'; 
    });
});
