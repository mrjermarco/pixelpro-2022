// Select color input
// created a variable for color picker
let color = document.querySelector('#colorPicker')


// Select size input
// created variable for size picker
let myGrid = document.getElementById('sizePicker')

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// created variables for row and columns to manipulate them in the DOM

    const newCanvas = document.getElementById('pixelCanvas');
    let row = document.querySelector('#inputHeight').value;
    let column = document.querySelector('#inputWidth').value;
    
    // used replace children method to create new canvas for each value input
    newCanvas.replaceChildren();

    // loops to create columns and rows
    for (let i = 0; i < row; i++) {
        let myRow = newCanvas.insertRow(i);
    
    for (let j = 0; j < column; j++) {
        let myCell = myRow.insertCell(j); 

            // added event listener that targets the cells that are clicked; the color then changes
            myCell.addEventListener('click', function(event){
                event.target.style.backgroundColor = color.value;
            })
        }
    }
}

// event listener to prevent the browser reloading and clearing out the grid inputs
myGrid.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
});



