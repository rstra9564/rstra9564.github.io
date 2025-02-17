/*Riley Strasser 2/2/25*/
alert("Welcome To STRAÜSS Music"); 
let modLog = []; //moderation log

function logModerationAction(user, action, reason) {

  const timestamp = new Date().toLocaleString(); 

  modLog.push({ user, action, reason, timestamp });
}
// display mod log:

function displayModLog() {

  const logArea = document.getElementById("modLogArea"); 

  modLog.forEach(entry => {

    logArea.innerHTML += `<p>User: ${entry.user}, Action: ${entry.action}, Reason: ${entry.reason}, Time: ${entry.timestamp}</p>`;

  });

}
function myFunction() {
    document.getElementById("ticketbutton").innerHTML = "No Tickets Available at this time.";
} 
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
 
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
 
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
   function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
   }
   /**/
   let scrollContainer = document.querySelector(".gallery");
        let backBtn = document.getElementById("backBtn");
        let nextBtn = document.getElementById("nextBtn");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            scrollContainer.style.scrollBehavior = "auto";
        });

        nextBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 900;
        });

        backBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 900;
        });

