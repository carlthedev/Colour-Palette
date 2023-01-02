
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

  let colour1 = document.getElementById('sec-1');
  let colour2 = document.getElementById('sec-2');
  let colour3 = document.getElementById('sec-3');
  let colour4 = document.getElementById('sec-4');

  colour1.style.backgroundColor = `${getRandomrgb()}`;
  colour2.style.backgroundColor = `${getRandomrgb()}`;
  colour3.style.backgroundColor = `${getRandomrgb()}`;
  colour4.style.backgroundColor = `${getRandomrgb()}`;
