const form = document.querySelector(".Contact__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let message = messageInput.value;

    let formValues = {
        name,
        email,
        phone,
        message
    };

    console.log(formValues);
});

