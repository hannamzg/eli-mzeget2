const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const slider = document.getElementsByClassName('slider');
const inputRage =document.getElementById("inputRage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



hamburger.onclick = function () {
    navMenu.classList.toggle("active");
}

function closeTheMenu() {
  navMenu.classList.remove("active");
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

let pressed = false;
let startX = 0;
let t=-100;

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
 
  this.scrollLeft += startX - e.clientX;

})

setInterval(()=>{
  if (pressed===false) {
    if ( (wrapper.scrollLeft -101) > t ) {
      t = -10
  }

    wrapper.scrollLeft =t;
    t-=10;

  }
  
},100) 
 
 
  
 



for(let i=0; i<slider.length; i++){
  slider[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//input rage


window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;


  inputRage.style.width =scrolled + "%";
  inputRage.style.height += 10 + "px";
}