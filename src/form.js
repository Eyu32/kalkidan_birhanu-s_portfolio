// form part 
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
