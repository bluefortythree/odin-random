let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');

window.addEventListener('DOMContentLoaded', () => {
  one.style.display = 'block';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
  five.style.display = 'none';
  uno.style.backgroundColor = 'black';
  runTimer();
})

let runTimer = () => {
  timer = setInterval(goForward, 5000);
}

let previous = document.getElementById('previous');
let next = document.getElementById('next');

uno.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  one.style.display = 'block';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
  five.style.display = 'none';
  uno.style.backgroundColor = 'black';
  dos.style.backgroundColor = 'transparent';
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
})

dos.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  one.style.display = 'none';
  two.style.display = 'block';
  three.style.display = 'none';
  four.style.display = 'none';
  five.style.display = 'none';
  uno.style.backgroundColor = 'transparent';
  dos.style.backgroundColor = 'black';
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
})

tres.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'block';
  four.style.display = 'none';
  five.style.display = 'none';
  uno.style.backgroundColor = 'transparent';
  dos.style.backgroundColor = 'transparent';
  tres.style.backgroundColor = 'black';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
})

cuatro.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'block';
  five.style.display = 'none';
  uno.style.backgroundColor = 'transparent';
  dos.style.backgroundColor = 'transparent';
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'black';
  cinco.style.backgroundColor = 'transparent';
})

cinco.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
  five.style.display = 'block';
  uno.style.backgroundColor = 'transparent';
  dos.style.backgroundColor = 'transparent';
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'black';
})

previous.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  goBack();
});

function goBack() {
  if(one.style.display === 'block') {
  one.style.display = 'none';
  five.style.display = 'block';
  uno.style.backgroundColor = 'transparent'
  dos.style.backgroundColor = 'transparent'
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'black';
} else if(two.style.display === 'block') {
  two.style.display = 'none';
  one.style.display = 'block';
  uno.style.backgroundColor = 'black'
  dos.style.backgroundColor = 'transparent'
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
} else if(three.style.display === 'block') {
  three.style.display = 'none';
  two.style.display = 'block';
  uno.style.backgroundColor = 'transparent'
  dos.style.backgroundColor = 'black'
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
} else if(four.style.display === 'block') {
  four.style.display = 'none';
  three.style.display = 'block';
  uno.style.backgroundColor = 'transparent'
  dos.style.backgroundColor = 'transparent'
  tres.style.backgroundColor = 'black';
  cuatro.style.backgroundColor = 'transparent';
  cinco.style.backgroundColor = 'transparent';
} else if(five.style.display === 'block') {
  five.style.display = 'none';
  four.style.display = 'block';
  uno.style.backgroundColor = 'transparent'
  dos.style.backgroundColor = 'transparent'
  tres.style.backgroundColor = 'transparent';
  cuatro.style.backgroundColor = 'black';
  cinco.style.backgroundColor = 'transparent';
}
}

next.addEventListener('click', () => {
  clearTimeout(timer);
  runTimer();
  goForward();
});

function goForward() {
  if(one.style.display === 'block') {
    one.style.display = 'none';
    two.style.display = 'block';
    uno.style.backgroundColor = 'transparent'
    dos.style.backgroundColor = 'black'
    tres.style.backgroundColor = 'transparent';
    cuatro.style.backgroundColor = 'transparent';
    cinco.style.backgroundColor = 'transparent';
  } else if(two.style.display === 'block') {
    two.style.display = 'none';
    three.style.display = 'block';
    uno.style.backgroundColor = 'transparent';
    dos.style.backgroundColor = 'transparent';
    tres.style.backgroundColor = 'black'
    cuatro.style.backgroundColor = 'transparent';
    cinco.style.backgroundColor = 'transparent';
  } else if(three.style.display === 'block') {
    three.style.display = 'none';
    four.style.display = 'block';
    uno.style.backgroundColor = 'transparent'
    dos.style.backgroundColor = 'transparent'
    tres.style.backgroundColor = 'transparent';
    cuatro.style.backgroundColor = 'black';
    cinco.style.backgroundColor = 'transparent';
  } else if(four.style.display === 'block') {
    four.style.display = 'none';
    five.style.display = 'block';
    uno.style.backgroundColor = 'transparent'
    dos.style.backgroundColor = 'transparent'
    tres.style.backgroundColor = 'transparent';
    cuatro.style.backgroundColor = 'transparent';
    cinco.style.backgroundColor = 'black';
  } else if(five.style.display === 'block') {
    five.style.display = 'none';
    one.style.display = 'block';
    uno.style.backgroundColor = 'black'
    dos.style.backgroundColor = 'transparent'
    tres.style.backgroundColor = 'transparent';
    cuatro.style.backgroundColor = 'transparent';
    cinco.style.backgroundColor = 'transparent';
  }
}
