// Ajoute l'animation au bouton du menu.
const btnNav = document.querySelector('#Menu');

btnNav.addEventListener('click', () => {
    let menuSpans = document.querySelectorAll('button span');
    
    // Appliquer les classes aux spans individuels
    menuSpans[0].classList.toggle('rotateplus45'); // 1ère span
    menuSpans[1].classList.toggle('disappear'); // 2ème span
    menuSpans[2].classList.toggle('rotateminus45'); // 3ème span

    // Sélectionner la nav uniquement dans header section
    let menuNav = document.querySelector('header section nav');
    
    // Ajouter/retirer la classe translateNav
    menuNav.classList.toggle('translateNav'); // Appliquer/retirer translateNav
});


// Ajoute l'animation au bouton du main section 2.
const btnAnimation1 = document.querySelector('#anime1');

btnAnimation1.addEventListener('click', () => {
    // Sélectionner la nav uniquement dans header section
    let animeBalahara= document.getElementById('balaharaImg');
    
    // Ajouter/retirer la classe translateNav
    animeBalahara.classList.toggle('animation1'); // Appliquer/retirer animation1
});

// Ajoute l'animation au bouton du main section 3.
const btnAnimation3 = document.querySelector('#anime3');

btnAnimation3.addEventListener('click', () => {
    // Sélectionner la nav uniquement dans header section
    let animeRayDau= document.getElementById('RayDauImg');
    
    // Ajouter/retirer la classe translateNav
    animeRayDau.classList.toggle('animation3'); // Appliquer/retirer animation1
});
