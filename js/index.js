
// activating the flickity carousel
var flkty = new Flickity( '.mobile-carousel', {
    // options
    cellAlign: 'left',
    contain: true
  });
  
// activating toggle navigation on mobile
function toggleMobileNavigation(){
var element = document.getElementById('mobile-navigation')
if (element.classList.contains('mobile-navigation-open')){
  element.classList.remove('mobile-navigation-open');
}else{
  element.classList.add('mobile-navigation-open');
 }
}


// initalizing aos
AOS.init();



// activating accordion onlcick
const accordion = document.getElementsByClassName('ccontainer');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}