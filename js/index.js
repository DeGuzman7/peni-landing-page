// storing variables
const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

//    hamburger toggling function
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})
// activating the nav menu with the hamburger
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active")
navMenu.classList.remove("active")
}))

// activating the flickity carousel
var flkty = new Flickity( '.mobile-carousel', {
    // options
    cellAlign: 'left',
    contain: true
  });