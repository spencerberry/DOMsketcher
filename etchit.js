const WIDTH = 32;
const HEIGHT = 32;

let mouseDown = false;

const body = document.querySelector('body');
const clearButton = document.getElementById('clear');
const canvas = document.getElementById('canvas');
canvas.style.gridTemplateColumns = "repeat(" + WIDTH + ", 1fr)";
//canvas.textContent = "hey";
// canvas.appendChild(body);
// // sturf.style.color= black;
//
// const newStuff = document.createElement('div');
// newStuff.textContent = "test";
// canvas.appendChild(newStuff);

for (let i = 0; i < WIDTH; i++){
  for (let j = 0; j < HEIGHT; j++){
    let square = document.createElement('div');
    square.className='pixel';
    canvas.appendChild(square);
  }
}

clearButton.addEventListener('click', clear);

pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', pixelHovered));

document.addEventListener('mousedown', toggleMouseDown)
document.addEventListener('mouseup', toggleMouseDown)

function clear(){
  pixels.forEach(pixel=> pixel.style.background = "none");
}

function pixelHovered(e){
  if (mouseDown){
    e.target.style.background = '#1D102F';
  }
}

function toggleMouseDown(e){
  console.log(e);
  mouseDown = e.type === 'mousedown';
}
