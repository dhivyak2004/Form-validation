function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("login-password").value;
    var remember = document.getElementById("remember");

    if (username == "") {
        alert("Username must be filled out");
        return false;
    }

    if (password == "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (!remember.checked) {
        alert("You must agree to remember me to proceed");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
