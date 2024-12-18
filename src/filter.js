const filterBtns = document.querySelector('.filter-btns');
const allFilterBtns = document.querySelectorAll('.all-filters');
const videoWorks = document.querySelectorAll('.video-works');
const allBtn = document.querySelector('#all');

const noResultContainer = document.createElement('div'); // Create a container for "nothing here" message
noResultContainer.classList.add('no-results');
noResultContainer.innerHTML = `
  <div class="flex flex-col gap-4 items-center justify-center">
        <p class="ps-3 text-sm lg:text-lg font-Lato">Oops! Looks like it's empty here.</p>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V12" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="16" r="1" fill="#B3B3B3"/>
        </svg>
</div>

`;

filterBtns.addEventListener('click', function(e) {
    const eTarget = e.target;

    if (eTarget.classList.contains('filters')) {
        const innerBtnText = eTarget.textContent.trim().split(/\s+/).join('');
        let anyMatchFound = false;

        videoWorks.forEach(function (videoTag) {
            const videoTagAttr = videoTag.getAttribute('data-video');
            const firstDiv = videoTag.querySelector('div');
            const isFirstDivEmpty = !firstDiv || firstDiv.textContent.trim() === '';

            if (innerBtnText !== videoTagAttr || isFirstDivEmpty) {
                videoTag.classList.add('deActive');
                if (firstDiv) {
                    firstDiv.classList.add('filter-add');
                }
            } else {
                videoTag.classList.remove('deActive');
                anyMatchFound = true; 
                if (firstDiv) {
                    firstDiv.classList.remove('filter-add');
                }
            }
        });

        if (!anyMatchFound) {
            if (!document.body.contains(noResultContainer)) {
                filterBtns.parentElement.appendChild(noResultContainer);
            }
        } else {
            if (document.body.contains(noResultContainer)) {
                noResultContainer.remove();
            }
        }

        allFilterBtns.forEach(function (btn) {
            btn.classList.remove('bg-white/90', 'font-semibold', 'text-black', 'text-primary-white');
            btn.classList.add('hover:bg-white/10');
            allBtn.classList.remove('bg-white/90', 'font-semibold', 'text-black', 'text-primary-white');
            allBtn.classList.add('hover:bg-white/10');
        });
        eTarget.classList.add('bg-white/90', 'font-semibold', 'text-black');
        eTarget.classList.remove('hover:bg-white/10');
    }
});

allBtn.addEventListener('click', function () {
    videoWorks.forEach(function (videoTag) {
        videoTag.classList.remove('deActive');
        const firstDiv = videoTag.querySelector('div');
        if (firstDiv) {
            firstDiv.classList.remove('filter-add');
        }
    });

    allFilterBtns.forEach(function (btn) {
        btn.classList.remove('bg-white/90', 'font-semibold', 'text-primary-white', 'text-black');
        btn.classList.add('hover:bg-white/10');
    });

    allBtn.classList.add('bg-white/90', 'font-semibold', 'text-black');
    allBtn.classList.remove('hover:bg-white/10');

    if (document.body.contains(noResultContainer)) {
        noResultContainer.remove();
    }
});