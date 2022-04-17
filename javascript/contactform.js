//Validacion de usuario

function validarUsuario() {
  var password = document.getElementById("password").value;
  var mail = document.getElementById("email").value;

  if (password == "Lechuga" && mail == "test@test.com") {
    window.open("newproduct.html");
  } else {
    alert("Usuario o contraseña incorrecta");
    console.log("error");
  }
}

//Enviar mensaje con validacion de campos no nulos

function enviarMensaje() {
  var nombre = document.getElementById("input").value;
  var texto = document.getElementById("textarea").value;

  if (input.value != "" && textarea.value != "") {
    alert("Se abrira una ventana para enviar tu mensaje");
    window.location.href =
      "mailto:florenciapaulamartinez@gmail.com?subject=" +
      "Alura Geek - Mensaje" +
      "&body=" +
      encodeURIComponent("Nombre: " + nombre + "\r" + "Comentarios: " + texto);

    document.getElementById("input").value = "";
    document.getElementById("textarea").value = "";
  } else {
    alert("Ingrese su nombre y mensaje");
  }
}

//prevent default recarga de formulario

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}

//cargar archivo desde la pc seleccionando

function cargarArchivo() {
  document.getElementById("file-input").click();
  console.log("agregar archivo OK");//en progreso
}

//cargar archivo desde la pc arrastrando

function dropArchivo() {
  console.log("agregar archivo OK");//en progreso
}

//agregar producto (tomar datos ingresados por el usuario y almacenarlos en variables)

function agregarProducto() {
  var nombreProducto = document.getElementById("nombreProducto").value;
  var precioProducto = document.getElementById("precioProducto").value;
  var descripcionProducto = document.getElementById(
    "descripcionProducto"
  ).value;

  if (
    nombreProducto != "" &&
    precioProducto != "" &&
    descripcionProducto != ""
  ) {
    console.log(nombreProducto);
    console.log(precioProducto);
    console.log(descripcionProducto);
    console.log("agregar producto OK");//conectar a base de datos para dar de alta ese producto
  } else {
    alert("Complete todos los campos");
  }
}
