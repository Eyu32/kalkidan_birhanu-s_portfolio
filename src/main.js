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

filterBtns.addEventListener('click', function (e) {
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
            btn.classList.remove('bg-white/20');
        });
        eTarget.classList.add('bg-white/20');
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
        btn.classList.remove('bg-white/20');
    });

    allBtn.classList.add('bg-white/20');

    if (document.body.contains(noResultContainer)) {
        noResultContainer.remove();
    }
});

// form part 
// Select DOM elements
const form = document.querySelector("#submit-btn");
const userName = document.querySelector("#user-name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");

// Form submission event
form.addEventListener("click", e => {
    e.preventDefault(); // Prevent form from submitting immediately

    if (validateInput()) {
        form.submit(); // Submit the form if validation passes
    }
});

// Set error message and styles
const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector(".input-error");

    errorDisplay.innerText = message; // Display error message
    input.classList.add("error");
    input.classList.remove("success");
};

// Set success styles
const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector(".input-error");

    errorDisplay.innerText = ""; // Clear error message
    input.classList.add("success");
    input.classList.remove("error");
};

// Validate email using regex
const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified regex for email validation
    return re.test(String(email).toLowerCase());
};

// Validate form inputs
const validateInput = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    let isFormValid = true;

    // Validate Name
    if (userNameValue === "") {
        setError(userName, "Name is required");
        isFormValid = false;
    } else {
        setSuccess(userName);
    }

    // Validate Email
    if (emailValue === "") {
        setError(email, "Email is required");
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    return isFormValid; // Return validation status
};
