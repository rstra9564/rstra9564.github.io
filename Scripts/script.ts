/******TS FILE******/
// Image Carousel
let imagePaths = ["images/ENRGY.png", "images/STAY AWHILE.png", "images/LINEZ.png", "images/BURNFORYOU.png", "images/Dans.png", "images/SUBLIMINAL.png"];

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.getElementById("carousel-container") as HTMLElement;
    const leftButton = document.getElementById("left_button") as HTMLButtonElement;
    const rightButton = document.getElementById("right_button") as HTMLButtonElement;

    if (carouselContainer && leftButton && rightButton) {
        const imageElements = carouselContainer.querySelectorAll<HTMLImageElement>("img");

            let buttonClicked: boolean = false;
        leftButton.addEventListener("click", () => {
            // shift the items in the array to the left
            const firstLink = imagePaths.shift();
            if (firstLink) {
                imagePaths.push(firstLink);
            }

            // display the first three images
            for (let i = 0; i < imageElements.length; i++) {
                imageElements[i].src = imagePaths[i];
            }
            buttonClicked = true;
        });

        rightButton.addEventListener("click", () => {
            // shift the items in the array to the right
            const lastLink = imagePaths.pop();
            if (lastLink) {
                imagePaths.unshift(lastLink);
            }

            // display the first three images
            for (let i = 0; i < imageElements.length; i++) {
                imageElements[i].src = imagePaths[i];
            }
        });
    }
});

// jQuery Radio CheckBox
$(function () {
    $("input[type='radio']").checkboxradio();
});

// Contact Form Validation
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const messageInput = document.getElementById("message") as HTMLTextAreaElement;
const nameError = document.getElementById("name-error") as HTMLElement;
const emailError = document.getElementById("email-error") as HTMLElement;
const messageError = document.getElementById("message-error") as HTMLElement;

function validateForm(): boolean {
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("submit-button")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    if (validateForm()) {
        // Submit the form
        console.log("Form submitted successfully!");
    }
});
