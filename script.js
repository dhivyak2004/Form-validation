function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var phn = document.getElementById("phn").value;
    var policy = document.getElementById("box");

    // Name validation
    var namePattern = /^[A-Za-z]+$/;
    if (name == "") {
        alert("Username must be filled out");
        return false;
    } else if (!name.match(namePattern)) {
        alert("Username must contain only letters");
        return false;
    }

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation without regex
    if (password == "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    } else {
        var hasLowercase = false;
        var hasUppercase = false;
        var hasDigit = false;
        var hasSpecialChar = false;
        var specialChars = "@$!%*?&";
        for (var i = 0; i < password.length; i++) {
            var char = password.charAt(i);
            if (char >= 'a' && char <= 'z') hasLowercase = true;
            else if (char >= 'A' && char <= 'Z') hasUppercase = true;
            else if (char >= '0' && char <= '9') hasDigit = true;
            else if (specialChars.indexOf(char) > -1) hasSpecialChar = true;
        }
        if (!hasLowercase) {
            alert("Password must contain at least one lowercase letter");
            return false;
        }
        if (!hasUppercase) {
            alert("Password must contain at least one uppercase letter");
            return false;
        }
        if (!hasDigit) {
            alert("Password must contain at least one digit");
            return false;
        }
        if (!hasSpecialChar) {
            alert("Password must contain at least one special character (@$!%*?&)");
            return false;
        }
    }

    // Confirm password validation
    if (confirm == "") {
        alert("Please confirm your password");
        return false;
    } else if (password != confirm) {
        alert("Passwords do not match");
        return false;
    }

    // Phone number validation
    var phoneno = /^\d{10}$/;
    if (phn == "") {
        alert("Phone number must be filled out");
        return false;
    } else if (!phn.match(phoneno)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    // Policy agreement validation
    if (!policy.checked) {
        alert("You must agree to the terms and conditions to proceed");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
