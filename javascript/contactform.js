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

function evitarRecarga(event) {
  event.preventDefault();
  return false;
}

function cargarArchivo() {
  document.getElementById("file-input").click();
  console.log("agregar archivo OK");
}

function dropArchivo() {
  console.log("agregar archivo OK");
}

function agregarProducto() {

  var nombreProducto = document.getElementById("nombreProducto").value;
  var precioProducto = document.getElementById("precioProducto").value;
  var descripcionProducto = document.getElementById(
    "descripcionProducto"
  ).value;

  if (nombreProducto!="" && precioProducto!=""&&descripcionProducto!=""){
    console.log(nombreProducto);
    console.log(precioProducto);
    console.log(descripcionProducto);
    console.log("agregar producto OK");
  }
  else{
    alert("Complete todos los campos");
  }

}
