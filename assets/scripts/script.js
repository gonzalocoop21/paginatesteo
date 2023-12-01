
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = "Nombre: " + nombre + "<br>Correo electrónico: " + email;
    
    // Mostrar una alerta de confirmación
    var confirmacion = confirm("¿Estás seguro de enviar el formulario?\n\n" + mensaje);
    
    if (confirmacion) {
      // Si el usuario hace clic en "Aceptar", mostrar los datos debajo del formulario
      document.getElementById("datos").innerHTML = mensaje;
    }
  });
