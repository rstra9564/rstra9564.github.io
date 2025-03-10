"use strict";
import * as $ from 'jquery';
//-------------*Drop Down Tickets menu*-------------//
function myFunction(): void {
    alert("Welcome!");
    const dropdown = document.getElementById("myDropdown") as HTMLElement;
    dropdown.classList.toggle("show");
}

window.onclick = function(event: MouseEvent) {
    if (!(event.target as HTMLElement).matches('.drop-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i] as HTMLElement;
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//-----------------*Image Carousel*------------------//
const imagePaths: string[] = ["images/ENRGY.png", "images/STAY AWHILE.png", "images/LINEZ.png", "images/BURNFORYOU.png", "images/Dans.png", "images/SUBLIMINAL.png"];

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll<HTMLImageElement>('#carousel-container img');

    document.querySelector("#left_button")?.addEventListener("click", evt => {
        // shift the items in the array to the left
        const firstLink = imagePaths.shift();
        if (firstLink) {
            imagePaths.push(firstLink);
        }

        // display the first three images
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = imagePaths[i];
        }
    });
    
    document.querySelector("#right_button")?.addEventListener("click", evt => {
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
});
//--------------*jquery Radio CheckBox*----------------//
$(function() {
    $("input").checkboxradio();
});
//-------------*Contact Form Validation*-------------//
function validateForm(): boolean {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    let isValid = true;

    if (name.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    if (message.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }
    return isValid;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
