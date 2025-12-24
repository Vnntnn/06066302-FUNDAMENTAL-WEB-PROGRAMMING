const form = document.getElementById("reg_form");
const username = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("conf_pwd");

const errors = {
    uname: document.getElementById("uname_error"),
    email: document.getElementById("email_error"),
    phone: document.getElementById("phone_error"),
    pwd: document.getElementById("pwd_error"),
    conf_pwd: document.getElementById("conf_pwd_error")
};

function setError(input, message) {
    const errSlot = errors[input.id];
    if (!errSlot) return;
    errSlot.textContent = message || "";
}

function isValidateUsername(value) {
    return value.trim().length >= 5;
}

function isValidateEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
}

function isValidatePhone(value) {
    const pattern = /^[0-9]+$/;
    return pattern.test(value) && value.length === 10;
}

function isValidatePassword(value) {
    if (value.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function validateUsername() {
    const ok = isValidateUsername(username.value);
    setError(username, ok ? "" : "Username must be at least 5 characters");
    return ok;
}

function validateEmail() {
    const ok = isValidateEmail(email.value);
    setError(email, ok ? "" : "Enter a valid email");
    return ok;
}

function validatePhone() {
    const ok = isValidatePhone(phone.value);
    setError(phone, ok ? "" : "Phone must be 10 digits (numbers only)");
    return ok;
}

function validatePassword() {
    const ok = isValidatePassword(password.value);
    setError(password, ok ? "" : "Password needs 8+ chars with uppercase, lowercase, number, and special char");
    return ok;
}

function validateConfirmPassword() {
    const ok = password.value === confirmPassword.value && confirmPassword.value.length > 0;
    setError(confirmPassword, ok ? "" : "Passwords do not match");
    return ok;
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
password.addEventListener("input", () => {
    validatePassword();
    validateConfirmPassword();
});
confirmPassword.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const checks = [
        validateUsername(),
        validateEmail(),
        validatePhone(),
        validatePassword(),
        validateConfirmPassword()
    ];
    if (checks.every(Boolean)) {
        alert("Registration successful!");
    }
});