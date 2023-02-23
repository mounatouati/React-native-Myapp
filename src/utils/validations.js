export function validateEmail(email) {
    return email.includes("@");
}
export function validateUsername(username) {
    return validateUsernameTooShort(username) && validateUsernameTooLong(username);
}
export function validateUsernameTooShort(username) {
    return username.length >= 3;
}
export function validateUsernameTooLong(username) {
    return username.length <= 12;
}
export function validatePassword(password) {
    return password.length >= 6;
}
export function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}
export function getConfirmPasswordError(password, confirmpassword) {
    if (!validateConfirmPassword(password, confirmpassword)) {
        return " Les mots de passe ne sont pas identiques!";
    }
    return "";
}
export function getPasswordError(password) {
    if (!validatePassword(password)) {
        return "Password trop";
    }
    return "";
}
export function getUsernameError(username) {
    if (!validateUsername(username)) {
        return " Minimum 3 caractère et maximum 12 caractères";
    }
    return "";
}
export function getEmailError(email) {
    if (!validateEmail(email)) {
        return "Email incorrecte";
    }
    return "";
}

