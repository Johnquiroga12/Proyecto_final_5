document.getElementById("editarBoton").addEventListener("click", function() {
    var tabla = document.getElementById("miTabla");
    var filas = tabla.getElementsByTagName("tr");
    for (var i = 0; i < filas.length; i++) {
      var columnas = filas[i].getElementsByTagName("td");
      for (var j = 0; j < columnas.length; j++) {
        var contenido = columnas[j].innerHTML;
        columnas[j].innerHTML = "<input type='text' value='" + contenido + "'>";
      }
    }
  });