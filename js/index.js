
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

AOS.init();