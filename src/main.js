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


const filterBtns = document.querySelector('.filter-btns')
const allFilterBtns = document.querySelectorAll('.all-filters')
const videoWorks = document.querySelectorAll('.video-works')
const allBtn = document.querySelector('#all')

filterBtns.addEventListener('click', function(e){
    const eTarget = e.target
    if (eTarget.className.includes('filters')){
        const innerBtnText = eTarget.textContent.trim().split(/\s+/).join('');
        videoWorks.forEach(function(videoTag){
            const videoTagAttr = videoTag.getAttribute('data-video')

            if (innerBtnText !== videoTagAttr) {  
                videoTag.classList.add('deActive');
                const firstDiv = videoTag.querySelector('div')
                firstDiv.classList.add('filter-add')
            }
            else {
                videoTag.classList.remove('deActive'); 
            }

            allFilterBtns.forEach(function(btns){
                btns.classList.remove('bg-white/20'); 
            }) 
            eTarget.classList.add('bg-white/20');
            
        })
    }
})

allBtn.addEventListener('click', function(){
    videoWorks.forEach(function(videoTag){
        videoTag.classList.remove('deActive')
        const firstDiv = videoTag.querySelector('div')
        firstDiv.classList.remove('filter-add')
    })
    allFilterBtns.forEach(function(btns){
        btns.classList.remove('bg-white/20'); 
    }) 
    allBtn.classList.add('bg-white/20');
})


