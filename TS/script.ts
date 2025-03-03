function myFunction() {
  document.getElementById("ticket-button").innerHTML = "No Tickets Available at this time.";
}
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
  return emailRegex.test(email);
}
/**/

scrollContainer.addEventListener("wheel", evt => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});