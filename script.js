console.log('Hello!');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(
    'Aquí puedes poner el código que quieres que se ejecute cuando se envía el formulario'
  );
});

// Función para validar el formulario
function validarFormulario() {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  // Validar que el nombre no esté vacío
  if (nombre === '') {
    document.getElementById('errorNombre').innerText =
      'Por favor ingrese su nombre';
    return false;
  } else {
    document.getElementById('errorNombre').innerText = '';
  }

  // Validar que el email sea válido
  var emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email.match(emailRegEx)) {
    document.getElementById('errorEmail').innerText =
      'Por favor ingrese un email válido';
    return false;
  } else {
    document.getElementById('errorEmail').innerText = '';
  }

  // Validar que el mensaje no esté vacío
  if (mensaje === '') {
    document.getElementById('errorMensaje').innerText =
      'Por favor ingrese un mensaje';
    return false;
  } else {
    document.getElementById('errorMensaje').innerText = '';
  }

  mostrarModal();
  // Enviar el formulario si todos los campos son válidos
  return true;
}

// ventana

function mostrarModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal');
  overlay.classList.add('active');
  modal.classList.add('active');
}

function cerrarModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal');
  overlay.classList.remove('active');
  modal.classList.remove('active');
}

// ESTILOS
function cambiarTamanioLetra(tamanio) {
  document.body.style.fontSize = tamanio + 'px';
}

function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}

function cambiarTipoLetra(tipo) {
  document.body.style.fontFamily = tipo + ', sans-serif';
}
