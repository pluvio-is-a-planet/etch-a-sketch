// Create gridBox element as div
const gridBox = document.createElement('div');
let rowPx= 16;
let colPx = 16;

gridBox.className = 'grid box';

// Create a 16x16 grid by adding gridBox elements to the .grid.container class
// Assign .grid.container class to a const
const gridContainer = document.querySelector('.grid.container');

// Nested for loops to add gridBox elements to gridContainer
// for i < 16 { for i < 16 { add box }}

drawGrid();
selectGridBoxes();

// Select all gridBox elements
function selectGridBoxes() {

  const gridBoxes = document.querySelectorAll('div.grid.box');

  gridBoxes.forEach((box) => {
    box.style.opacity = 1;
    box.addEventListener('mouseover', drawColor);
  });   

}

// const changeResBtn = document.querySelector('button#btn.change-res');
// changeResBtn.addEventListener('click', () => {
//   changeResolution();
// });

const gridResolutionSlider = document.querySelector('#res-range.range.slider');
gridResolutionSlider.addEventListener('change', changeResolution);

// Add a class to the gridBox that will change the background color in the stylesheet
function drawColor(e) {
  targetBox = e.target;

  if (targetBox.classList.contains('colored')) {
    
    if (targetBox.style.opacity > 0) {
      targetBox.style.opacity -= 0.1;
    } else {
      targetBox.style.opacity = 1;
      targetBox.classList.remove('colored');
    }
  
  } else {

    targetBox.classList.add('colored');

    randomRed = Math.floor(Math.random() * 255);
    randomGreen = Math.floor(Math.random() * 255);
    randomBlue = Math.floor(Math.random() * 255);

    targetBox.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }
  
}

function drawGrid() {
  for (let row = 0; row < rowPx; row++) {

  const gridRow = document.createElement('div');
  gridRow.className = 'grid row';

  for (let col = 0; col < colPx; col++) {

    gridRow.id = `row-${row + 1}`;
    gridRow.appendChild(gridBox.cloneNode(true));

  }

  gridContainer.appendChild(gridRow.cloneNode(true));

  }
}

function changeResolution() {

  let promptWidth = parseInt(prompt('Enter width (in pixels),\nminimum: 1,\nmaximum: 100'));
  if (promptWidth < 1) {
    promptWidth = 1;
  } else if (promptWidth > 100) {
    promptWidth = 100;
  }

  alert(`Width set to ${promptWidth} pixel(s)`);

  let promptHeight = parseInt(prompt('Enter height (in pixels),\nminimum: 1,\nmaximum: 100'));
  if (promptHeight < 1) {
    promptHeight = 1;
  } else if (promptHeight > 100) {
    promptHeight = 100;
  }

  alert(`Height set to ${promptHeight} pixel(s)`);

  for (let rowCounter = 0; rowCounter < rowPx; rowCounter++) {
    let gridRowSelector = document.querySelector('div.grid.row');
    gridContainer.removeChild(gridRowSelector);
  }

  rowPx = promptWidth;
  colPx = promptHeight;

  drawGrid();
  selectGridBoxes();
}