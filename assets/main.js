function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}



  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  }).reveal(`
    #home, 
    #home heat-text,
    #home h1,
    #home p,
    #home button,
    #home img, 
    #home .numbers, 
    .services .header,
    .services-cards,
    #about, 
    #about h2,
    #about p,
    #about img,
    #contact,
    #contact h2,
    #contact button,
    #contact img`)