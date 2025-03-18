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
