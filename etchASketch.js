// Create gridBox element as div
const gridBox = document.createElement('div');

gridBox.className = 'grid box';

// Create a 16x16 grid by adding gridBox elements to the .grid.container class
// Assign .grid.container class to a const
const gridContainer = document.querySelector('.grid.container');

// Nested for loops to add gridBox elements to gridContainer
// for i < 16 { for i < 16 { add box }}

drawGrid();

// Select all gridBox elements
const gridBoxes = document.querySelectorAll('div.grid.box');

gridBoxes.forEach((box) => {
  box.addEventListener('mouseover', addColorClass);
});

// Add a class to the gridBox that will change the background color in the stylesheet
function addColorClass(e) {
  e.target.classList.add('colored');
  console.log(e);
}

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