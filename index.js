const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-form");
const loginError = document.getElementById("login-error");



loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "admin1" && email === "user@gmail.com" && password === "KellerSchroeder1") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginError.style.opacity = 1;
    }
})

