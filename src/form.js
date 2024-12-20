// Form Elements
const form = document.querySelector("#form");
const userName = document.querySelector("#user-name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const errorDisplay = document.querySelector("#input-error"); 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateInput()) {
        form.submit();
    }
});

const setError = (element, message) => {
    element.style.border = "0.2px solid #ea5353";

    const errorBox = document.createElement("div");
    errorBox.className =
        "bg-[#ea5353] flex flex-col w-fit rounded-lg items-start gap-[3px] justify-center px-4 py-3";
    errorBox.innerHTML = `
        <div class="flex items-center gap-2 text-white text-sm w-40 text-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_183_15)">
                    <path d="M11.9999 18.0869C10.3643 18.0869 9.03368 19.4175 9.03368 21.0531C9.18279 24.9828 14.8176 24.9818 14.9661 21.0531C14.9661 19.4175 13.6355 18.0869 11.9999 18.0869ZM14.9647 1.36977C13.4928 -0.456159 10.5079 -0.45705 9.03536 1.36986C8.29798 2.24772 7.98841 3.39863 8.18605 4.52749C8.7754 7.89478 9.60712 12.6473 9.98038 14.7817C10.3986 17.0283 13.6017 17.0276 14.0194 14.7818L15.8141 4.52749C16.0117 3.39868 15.7022 2.24772 14.9647 1.36977Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_183_15">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <p>${message}</p>
        </div>
        <div class="w-11/12 h-[3px] bg-[#e2b3b3] rounded-lg animate-shrink"></div>
    `;

    errorDisplay.appendChild(errorBox);

    const shrinkingDiv = errorBox.querySelector(".animate-shrink");
    shrinkingDiv.addEventListener("animationend", () => {
        errorBox.remove();
    });
};

const setSuccess = (element) => {
    element.style.border = "none";
};

const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    let isFormValid = true;

    errorDisplay.innerHTML = "";

    if (userNameValue === "") {
        setError(userName, "Name is required");
        isFormValid = false;
    } else {
        setSuccess(userName);
    }

    if (emailValue === "") {
        setError(email, "Email is required");
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (subjectValue === "") {
        setError(subject, "Subject is required");
        isFormValid = false;
    } else {
        setSuccess(subject);
    }

    if (messageValue === "") {
        setError(message, "Message is required");
        isFormValid = false;
    } else {
        setSuccess(message);
    }

    return isFormValid;
};
