const gridBox = document.createElement('div');
let rowPx= 16;
let colPx = 16;

gridBox.className = 'grid box';

const gridContainer = document.querySelector('.grid.container');

drawGrid();
selectGridBoxes();

function selectGridBoxes() {

  const gridBoxes = document.querySelectorAll('div.grid.box');

  gridBoxes.forEach((box) => {
    box.style.opacity = 1;
    box.addEventListener('mouseover', drawColor);
  });   

}

const gridResolutionSlider = document.querySelector('#res-range.range.slider');
gridResolutionSlider.addEventListener('change', changeResolution);
gridResolutionSlider.addEventListener('input', updateResDisplay);

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

  for (let rowCounter = 0; rowCounter < rowPx; rowCounter++) {
    let gridRowSelector = document.querySelector('div.grid.row');
    gridContainer.removeChild(gridRowSelector);
  }

  let sliderValue = gridResolutionSlider.value;
  rowPx = sliderValue;
  colPx = sliderValue;

  drawGrid();
  selectGridBoxes();
}

function updateResDisplay() {

  const resDisplay = document.querySelector('.range.output');
  resDisplay.textContent = `${gridResolutionSlider.value}x${gridResolutionSlider.value}`

}