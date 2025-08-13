function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById("regBtn").addEventListener("click", function()) {
const password = document.getElementById("password1").value;

if (password.lenght>=6) {
    showAlertSuccess();
} else {
    showAlertError();
}
}