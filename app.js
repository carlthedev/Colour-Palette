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
let lock2 = document.getElementById('lock2');
let lock3 = document.getElementById('lock3');
let lock4 = document.getElementById('lock4');
let lockImg = document.getElementById('lock');
let lockImg2 = document.getElementById('lock2');
let lockImg3 = document.getElementById('lock3');
let lockImg4 = document.getElementById('lock4');

function genColours() {

  let box1R = document.getElementById("red").value;
  let box1G = document.getElementById("green").value;
  let box1B = document.getElementById("blue").value;

  let editedColour = `rgb(${box1R}, ${box1G}, ${box1B})`;

  let colour1 = document.getElementById('sec-1');
  colour1.style.backgroundColor = `${editedColour}`;
  document.getElementById('sec-1txt').innerHTML = `${editedColour}`;

};

function genColours2() {

  let box2R = document.getElementById("red2").value;
  let box2G = document.getElementById("green2").value;
  let box2B = document.getElementById("blue2").value;

  let editedColour2 = `rgb(${box2R}, ${box2G}, ${box2B})`;

  let colour2 = document.getElementById('sec-2');
  colour2.style.backgroundColor = `${editedColour2}`;
  document.getElementById('sec-1txt').innerHTML = `${editedColour2}`;

};

function genColours3() {

  let box3R = document.getElementById("red3").value;
  let box3G = document.getElementById("green3").value;
  let box3B = document.getElementById("blue3").value;

  let editedColour3 = `rgb(${box3R}, ${box3G}, ${box3B})`;

  let colour3 = document.getElementById('sec-3');
  colour3.style.backgroundColor = `${editedColour3}`;
  document.getElementById('sec-3txt').innerHTML = `${editedColour3}`;
};

function genColours4() {

  let box4R = document.getElementById("red4").value;
  let box4G = document.getElementById("green4").value;
  let box4B = document.getElementById("blue4").value;

  let editedColour4 = `rgb(${box4R}, ${box4G}, ${box4B})`;

  let colour4 = document.getElementById('sec-4');
  colour4.style.backgroundColor = `${editedColour4}`;
  document.getElementById('sec-4txt').innerHTML = `${editedColour4}`;
};

localStorage.setItem("lockStatus", "unlocked");
localStorage.setItem("lockStatus2", "unlocked");
localStorage.setItem("lockStatus3", "unlocked");
localStorage.setItem("lockStatus4", "unlocked");

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
    localStorage.setItem("lockedColour", `${document.getElementById('sec-1txt').innerHTML = colour1.style.backgroundColor}`);
    colour1.style.backgroundColor = `${localStorage.getItem("lockedColour")}`;
  };

  if (localStorage.getItem("lockStatus2") === 'unlocked') {
    colour2.style.backgroundColor = `${getRandomrgb()}`;
    document.getElementById('sec-2txt').innerHTML = colour2.style.backgroundColor;
  } else if (localStorage.getItem("lockStatus2") === 'locked') {
    document.getElementById('sec-2txt').innerHTML = colour2.style.backgroundColor;
    localStorage.setItem("lockedColour2", `${document.getElementById('sec-2txt').innerHTML = colour2.style.backgroundColor}`);
    colour2.style.backgroundColor = `${localStorage.getItem("lockedColour2")}`;
  };

  if (localStorage.getItem("lockStatus3") === 'unlocked') {
    colour3.style.backgroundColor = `${getRandomrgb()}`;
    document.getElementById('sec-3txt').innerHTML = colour3.style.backgroundColor;
  } else if (localStorage.getItem("lockStatus3") === 'locked') {
    document.getElementById('sec-3txt').innerHTML = colour3.style.backgroundColor;
    localStorage.setItem("lockedColour3", `${document.getElementById('sec-3txt').innerHTML = colour3.style.backgroundColor}`);
    colour3.style.backgroundColor = `${localStorage.getItem("lockedColour3")}`;
  };

  if (localStorage.getItem("lockStatus4") === 'unlocked') {
    colour4.style.backgroundColor = `${getRandomrgb()}`;
    document.getElementById('sec-4txt').innerHTML = colour4.style.backgroundColor;
  } else if (localStorage.getItem("lockStatus4") === 'locked') {
    document.getElementById('sec-4txt').innerHTML = colour4.style.backgroundColor;
    localStorage.setItem("lockedColour4", `${document.getElementById('sec-4txt').innerHTML = colour4.style.backgroundColor}`);
    colour4.style.backgroundColor = `${localStorage.getItem("lockedColour4")}`;
  };
});

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

lock2.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  if (localStorage.getItem("lockStatus2") === 'unlocked') {
    localStorage.setItem("lockStatus2", "locked");
    lockImg2.src = "lock.png";
  } else if (localStorage.getItem("lockStatus2") === 'locked') {
    localStorage.setItem("lockStatus2", "unlocked");
    lockImg2.src = "unlock.png";
  };

});

lock3.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  if (localStorage.getItem("lockStatus3") === 'unlocked') {
    localStorage.setItem("lockStatus3", "locked");
    lockImg3.src = "lock.png";
  } else if (localStorage.getItem("lockStatus3") === 'locked') {
    localStorage.setItem("lockStatus3", "unlocked");
    lockImg3.src = "unlock.png";
  };

});

lock4.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  if (localStorage.getItem("lockStatus4") === 'unlocked') {
    localStorage.setItem("lockStatus4", "locked");
    lockImg4.src = "lock.png";
  } else if (localStorage.getItem("lockStatus4") === 'locked') {
    localStorage.setItem("lockStatus4", "unlocked");
    lockImg4.src = "unlock.png";
  };

});