function comenzar() {
  //identificamos los elementos
  zonadatos = document.getElementById("zonadatos");
  var archivos = document.getElementById("archivos"); //almacenamos el boton de archivos

  //ponemos a la escucha al boton archivo para cuando se seleccione un archivo llame a una funcion
  archivos.addEventListener("change", procesar, false);
}

function alerta() {
  alert("El video se está cargando");
}

//funcion que se encarga de procesar y mostrar el archivo
function procesar(e) {
  //insertar el archivo
  var archivos = e.target.files; //guardamos en un array el archivo seleccionado
  var miArchivo = archivos[0]; //accedemos al archivo

  //comprobamos si el archivo seleccionado es un video
  if (!miArchivo.type.match("video.*")) {
    alert("¡Error! El archivo no es un video");
    return;
  }

  var nombre = miArchivo.name; //guardamos el nombre del archivo
  var video = document.createElement("VIDEO"); //creamos un elemento video en nuestro html

  //mensaje mientras se carga el video
  video.onloadstart = function () {
    alert("El vídeo se esta cargando");
  };
  video.id = "mivideo"; //asignamos id al video
  video.src = nombre; //asignamos el nombre como la ruta para que lo reproduzca
  zonadatos.appendChild(video); //lo mostramos como elemento dentro de zonadatos

  //crear botones qu apareceran junto al video
  //PLAY
  var play = document.createElement("input"); //creamos un elemnto input en el html
  play.type = "button"; //asignamos tipo boton
  play.value = "Reproducir";
  //creamos la funcion para que se reproduzca y la asignamosa onclivk
  play.onclick = function () {
    document.getElementById(video.id).play();
  };
  zonadatos.appendChild(play); //la mostramos como elemento de zona datos

  //PAUSA
  var pausa = document.createElement("input");
  pausa.type = "button";
  pausa.value = "Pausa";
  pausa.onclick = function () {
    document.getElementById(video.id).pause();
  };
  zonadatos.appendChild(pausa);

  //SUBIR VOLUMEN
  var subirV = document.createElement("input");
  subirV.type = "button";
  subirV.value = "Subir Volumen";
  subirV.onclick = function () {
    // controlamos que el volumen no pase del limite y de error
    if (document.getElementById(video.id).volume < 1) {
      document.getElementById(video.id).volume += 0.1;
    } else {
      alert("¡Atención! Volumen subido al maximo"); //si el volumen no puedesubir mas muestra una alerta
    }
  };
  zonadatos.appendChild(subirV);

  //BAJAR VOLUMEN
  var bajarV = document.createElement("input");
  bajarV.type = "button";
  bajarV.value = "Bajar Volumen";
  bajarV.onclick = function () {
    if (document.getElementById(video.id).volume > 0.1) {
      document.getElementById(video.id).volume -= 0.1;
    } else {
      alert("¡Atención! Volumen bajado al maximo");
    }
  };
  zonadatos.appendChild(bajarV);
}

window.addEventListener("load", comenzar, false);
