const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let t=0;

hamburger.onclick = function () {
    navMenu.classList.toggle("active");
}


var navbar = document.querySelector('.just-color');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

//image silder

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX 
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }
  console.dir(wrapper);
  this.scrollLeft += startX - e.clientX;

})
