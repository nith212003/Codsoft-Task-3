function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "Devasena" && password === "Deva@123") {
        errorMessage.textContent = "";
        window.location.href = 'file:D:/codsoft%202/dashboard.html'; 
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
