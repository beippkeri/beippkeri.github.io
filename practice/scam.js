function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // alert("Username: " + username + "\nPassword: " + password);
    alert("get scammed lmao");
    // const newWindow = window.open("https://thegeekboiz.github.io/PythonScratcher/youareanidiot/", "_blank",);
    return false; // Prevent form submission for demonstration purposes
}
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show Password";
    }
}
function clearForm() {
    const userResponse = confirm("Are you sure you want to proceed?");
    if (userResponse == true) {
        document.getElementById("loginForm").reset();
    }
}