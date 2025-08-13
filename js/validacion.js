const submitBtn = document.getElementById('regBtn');
const form = document.querySelector('form');

submitBtn.addEventListener('submit', (e) => {
  const contrasena = document.getElementById('password1').value;
  const contrasena2 = document.getElementById('password2').value;
  e.preventDefault();

  if (!form.checkValidity()) {
    return; // el navegador mostrará los mensajes de required
  }

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
