function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const check = document.getElementById('terminos');
const button = document.getElementById('regBtn');

button.addEventListener('click', function () {
    
    checkBoxIsChecked();

})


function checkBoxIsChecked() {
   if(!check.checked) {
        showAlertError();
        return;
    }

    showAlertSuccess();
}