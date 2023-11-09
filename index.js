// Let's make the email address more fun
const email = "sans@skelecode.com";
const emailElement = document.querySelector(".contact-email");
emailElement.textContent = email;

emailElement.addEventListener("mouseover", () => {
    emailElement.textContent = "stay determined!";
});

emailElement.addEventListener("mouseout", () => {
    emailElement.textContent = email;
});
