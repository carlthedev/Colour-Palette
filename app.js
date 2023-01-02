
function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function getRandomrgb() {
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();
  let finalColour = `rgb(${red}, ${green}, ${blue})`;
  return finalColour;
}

const genBtn = document.getElementById('btn1');

genBtn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  let colour1 = document.getElementById('sec-1');
  let colour2 = document.getElementById('sec-2');
  let colour3 = document.getElementById('sec-3');
  let colour4 = document.getElementById('sec-4');

  colour1.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-1txt').innerHTML = colour1.style.backgroundColor;
  colour2.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-2txt').innerHTML = colour2.style.backgroundColor;
  colour3.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-3txt').innerHTML = colour3.style.backgroundColor;
  colour4.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-4txt').innerHTML = colour4.style.backgroundColor;
});


