const predefinedEmail = "us@ex.com";
const predefinedPassword = "pas";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (email === predefinedEmail && password === predefinedPassword) {
        window.location.href = "HTML\currency_converter.html";
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});
