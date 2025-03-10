"use strict";
//-------------*Drop Down Tickets menu*-------------//
function myFunction() {
    alert("Welcome!")
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
//-----------------*Image Carousel*------------------//
const imagePaths = ["images/ENRGY.png", "images/STAY AWHILE.png", "images/LINEZ.png", "images/BURNFORYOU.png", "images/Dans.png", "images/SUBLIMINAL.png"]

document.addEventListener("DOMContentLoaded", () => {
    const imageElements = document.querySelectorAll('#carousel-container img');
    
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let firstLink = imagePaths.shift();
        imagePaths.push(firstLink);
        
        // display the first three images
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = imagePaths[i];
        }
    }); 
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the items in the array to the right
        let lastLink = imagePaths.pop();
        imagePaths.unshift(lastLink);

        // display the first three images
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = imagePaths[i];
        }
    });
})
//--------------*jquery Radio CheckBox*----------------//
$( function() {
    $( "input" ).checkboxradio();
  } );
//-------------*Contact Form Validation*-------------//
function validateForm() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    if (name.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    if (message.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }
    return isValid;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
}