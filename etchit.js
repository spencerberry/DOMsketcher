let size = 22;
let pixels = [];

const resetButton = document.getElementById('reset');

const shadeToggle = document.getElementById('shade-toggle');
let shade = shadeToggle.control.checked;

const colorToggle = document.getElementById('color-toggle');
let randomColors = colorToggle.control.checked;

const sizeField = document.getElementById('size');
sizeField.value = size;

const canvas = document.getElementById('canvas');
reset();

resetButton.addEventListener('click', reset);
shadeToggle.addEventListener('change', toggleShade);
colorToggle.addEventListener('change', toggleColor);


function reset(){
  if (sizeField.value != size) size = sizeField.value;

  canvas.style.gridTemplateColumns = "repeat(" + size + ", auto)";
  canvas.style.gridTemplateRows = "repeat(" + size + ", auto)";

  pixels.forEach(pixel => pixel.parentNode.removeChild(pixel));

  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      let square = document.createElement('div');
      square.className = 'pixel';
      square.style.height = square.style.width;
      canvas.appendChild(square);
    }
  }

  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.addEventListener('mouseover', pixelHovered));

  pixels.forEach(pixel => pixel.style.background = "none");
}

function pixelHovered(e){
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
