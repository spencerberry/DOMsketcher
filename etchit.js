const WIDTH = 32;
const HEIGHT = 32;

const clearButton = document.getElementById('clear');

const shadeToggle = document.getElementById('shade-toggle');
let shade = shadeToggle.control.checked;

const colorToggle = document.getElementById('color-toggle');
let randomColors = colorToggle.control.checked;

const canvas = document.getElementById('canvas');
canvas.style.gridTemplateColumns = "repeat(" + WIDTH + ", auto)";
canvas.style.gridTemplateRows = "repeat(" + HEIGHT + ", auto)";

for (let i = 0; i < WIDTH; i++){
  for (let j = 0; j < HEIGHT; j++){
    let square = document.createElement('div');
    square.className = 'pixel';
    square.style.height = square.style.width;
    // square.style.backgroundColor = 'Black';
    canvas.appendChild(square);
  }
}

clearButton.addEventListener('click', clear);
shadeToggle.addEventListener('change', toggleShade);
colorToggle.addEventListener('change', toggleColor);
//colorToggle.checked = false;

pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', pixelHovered));

// document.addEventListener('mousedown', toggleMouseDown)
// document.addEventListener('mouseup', toggleMouseDown)

function clear(){
  console.log('clear');
  pixels.forEach(pixel => pixel.style.background = "none");
}

function pixelHovered(e){
  console.log(e);
  if (randomColors){
    let new_color = getRandomColor();
    e.target.style.background = new_color;
  }
  else {
    e.target.style.background = "#1D102F";
  }


  if (shade){
    let current_opacity = e.target.style.opacity;
    let new_opacity = String(Math.min(Number(current_opacity) + .2, 1.0));
    e.target.style.opacity = new_opacity;
  }
  else{
    e.target.style.opacity = "1.0";
  }

}
function getRandomColor(){
  var hexColor = '';
  while (hexColor.length < 6) {
    hexColor += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#' + hexColor;
}

function toggleColor(e){
  if (e.target.checked) {
    randomColors = true;
  }
  else{
    randomColors = false;
  }
}

function toggleShade(e){
  if (e.target.checked){
    shade = true;
  }
  else{
    shade = false;
  }
}
