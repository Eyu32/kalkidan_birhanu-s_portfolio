const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const mainNav = document.querySelector('#main-nav');
const coverCard = document.querySelector('#cover-card');

let isActive = false;

// Menu open handler
menu.addEventListener('click', function () {
    if (!isActive) {
        mainNav.classList.remove('deActive');
        coverCard.classList.remove('deActive');
        isActive = true;
    }
});

// Menu close handler
close.addEventListener('click', function () {
    if (isActive) {
        mainNav.classList.add('deActive');
        coverCard.classList.add('deActive');
        isActive = false;
    }
});

coverCard.addEventListener('click', function (e) {
    const eventTarget = e.target;
    if (isActive && eventTarget.id !== 'main-nav' && eventTarget.id !== 'menu') {
        mainNav.classList.add('deActive');
        coverCard.classList.add('deActive');
        isActive = false;
    }
});



