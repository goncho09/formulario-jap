const submitBtn = document.getElementById('regBtn');

submitBtn.addEventListener('click', (e) => {
  const contrasena = document.getElementById('password1').value;
  const contrasena2 = document.getElementById('password2').value;
  e.preventDefault();

  if (contrasena === contrasena2) {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});

function showAlertSuccess() {
  document.getElementById('alert-success').classList.add('show');
  document.getElementById('alert-danger').classList.remove('show');
}

function showAlertError() {
  document.getElementById('alert-danger').classList.add('show');
  document.getElementById('alert-success').classList.remove('show');
}
