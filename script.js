let nightSky = document.querySelector('img:nth-child(1)');
let moon = document.querySelector('img:nth-child(2)');
let mountain = document.querySelector('img:nth-child(3)');
let road = document.querySelector('img:nth-child(4)');
let text = document.querySelector('h1');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  nightSky.style.top = value * 0.5 + 'px';
  moon.style.left = value * 0.5 + 'px';
  text.style.top = value * 0.5 + 'px';
  // mountain.style.top = value * 0.01 + 'px';

})
