// Create gridBox element as div
const gridBox = document.createElement('div');

gridBox.className = 'grid box';

// Create a 16x16 grid by adding gridBox elements to the .grid.container class
// Assign .grid.container class to a const
const gridContainer = document.querySelector('.grid.container');

// Nested for loops to add gridBox elements to gridContainer
// for i < 16 { for i < 16 { add box }}

function drawGrid() {
  for (let row = 0; row < 16; row++) {

  const gridRow = document.createElement('div');
  gridRow.className = 'grid row';

  for (let col = 0; col < 16; col++) {

    gridRow.id = `row-${row + 1}`;
    gridRow.appendChild(gridBox.cloneNode(true));

  }

  gridContainer.appendChild(gridRow.cloneNode(true));

  }
}

drawGrid();