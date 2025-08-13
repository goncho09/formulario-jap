const submitBtn = document.getElementById('regBtn');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  const contrasena = document.getElementById('password1').value;
  const contrasena2 = document.getElementById('password2').value;

  if (!form.checkValidity()) {
    return;
  }

  if (contrasena === contrasena2 && contrasena.length >= 6) {
    showAlertSuccess();
  } else {
    e.preventDefault();
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
