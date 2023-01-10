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

let lock = document.getElementById('lock');
let lockImg = document.getElementById('lock');

function genColours() {

  let box1R = document.getElementById("red").value;
  let box1G = document.getElementById("green").value;
  let box1B = document.getElementById("blue").value;

  let editedColour = `rgb(${box1R}, ${box1G}, ${box1B})`;

  let colour1 = document.getElementById('sec-1');
  colour1.style.backgroundColor = `${editedColour}`;
  document.getElementById('sec-1txt').innerHTML = `${editedColour}`;

};

localStorage.setItem("lockStatus", "unlocked");

let palettes = document.getElementById('sec-container');
palettes.style.display = "none";
let genBtn = document.getElementById('btn1');

genBtn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  palettes.style.display = "flex";

  if (localStorage.getItem("lockStatus") === 'unlocked') {
    colour1.style.backgroundColor = `${getRandomrgb()}`;
    document.getElementById('sec-1txt').innerHTML = colour1.style.backgroundColor;
  } else if (localStorage.getItem("lockStatus") === 'locked') {
    document.getElementById('sec-1txt').innerHTML = colour1.style.backgroundColor;
    // save this rgb colour to storage
    localStorage.setItem("lockedColour", `${document.getElementById('sec-1txt').innerHTML = colour1.style.backgroundColor}`);
    // render the colour to the element from storage
    colour1.style.backgroundColor = `${localStorage.getItem("lockedColour")}`;
    // update the colour in storage from range input
    // clear colour storage when unlocked
    // add if statement for when page is refreshed and colour is still locked
  };

  colour2.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-2txt').innerHTML = colour2.style.backgroundColor;

  colour3.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-3txt').innerHTML = colour3.style.backgroundColor;

  colour4.style.backgroundColor = `${getRandomrgb()}`;
  document.getElementById('sec-4txt').innerHTML = colour4.style.backgroundColor;
});

localStorage.setItem("lockStatus", "unlocked");

lock.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  if (localStorage.getItem("lockStatus") === 'unlocked') {
    localStorage.setItem("lockStatus", "locked");
    lockImg.src = "lock.png";
  } else if (localStorage.getItem("lockStatus") === 'locked') {
    localStorage.setItem("lockStatus", "unlocked");
    lockImg.src = "unlock.png";
  };

});

