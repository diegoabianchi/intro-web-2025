// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('Clase de Manipulación del DOM iniciada');

    document.getElementById('nombreCompleto').addEventListener('blur', validarNombreCompleto);
    document.getElementById('nombreCompleto').addEventListener('focus', limpiarNombreCompleto);
    document.getElementById('nombreCompleto').addEventListener('input', mostrarSaludo);

    document.getElementById('email').addEventListener('blur', validarEmail);
    document.getElementById('email').addEventListener('focus', limpiarEmail);

    document.getElementById('contrasena').addEventListener('blur', validarContraseña);
    document.getElementById('contrasena').addEventListener('focus', limpiarContraseña);

    document.getElementById('edad').addEventListener('blur', validarEdad);
    document.getElementById('edad').addEventListener('focus', limpiarEdad);
    
    document.getElementById('telefono').addEventListener('blur', validarTelefono);
    document.getElementById('telefono').addEventListener('focus', limpiarTelefono);

    document.getElementById('direccion').addEventListener('blur', validarDireccion);
    document.getElementById('direccion').addEventListener('focus', limpiarDireccion);

    document.getElementById('ciudad').addEventListener('blur', validarCiudad);
    document.getElementById('ciudad').addEventListener('focus', limpiarCiudad);

    document.getElementById('codigoPostal').addEventListener('blur', validarCodigoPostal);
    document.getElementById('codigoPostal').addEventListener('focus', limpiarCodigoPostal);

    document.getElementById('dni').addEventListener('blur', validarDNI);  
    document.getElementById('dni').addEventListener('focus', limpiarDNI);

    document.getElementById('btn-limpiar').addEventListener('click', limpiarSaludo);
    document.getElementById('miFormulario').addEventListener('submit', enviarFormulario);
});

/*•	Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.*/
function validarNombreCompleto() {
    console.log('validarNombreCompleto');    
    var nombreCompleto = document.getElementById('nombreCompleto');
    var errorMsg = document.getElementById('error-nombreCompleto');

    if (nombreCompleto.value.length <= 6 || !nombreCompleto.value.includes(' ')) {
        nombreCompleto.style.borderColor = 'red';
        errorMsg.textContent = 'Nombre Completo: Debe tener más de 6 letras y al menos un espacio entre medio.';
        return false;
    }else{
        nombreCompleto.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarNombreCompleto() {
    console.log('limpiarNombreCompleto');
    document.getElementById('nombreCompleto').style.borderColor = '';
    document.getElementById('error-nombreCompleto').textContent = '';
}

/*•	Email: debe tener un formato de email válido.*/
function validarEmail() {
    console.log('validarEmail');
    var email = document.getElementById('email');
    var errorMsg = document.getElementById('error-email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        email.style.borderColor = 'red';
        errorMsg.textContent = 'Email: Debe tener un formato de email válido.';
        return false;
    }else{
        email.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarEmail() {
    console.log('limpiarEmail');
    document.getElementById('email').style.borderColor = '';
    document.getElementById('error-email').textContent = '';
}

/*•	Contraseña: Al menos 8 caracteres, formados por letras y números.*/
function validarContraseña() {
    console.log('validarContraseña');
    var contrasena = document.getElementById('contrasena');
    var errorMsg = document.getElementById('error-contrasena');
    var contrasenaPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!contrasenaPattern.test(contrasena.value)) {
        contrasena.style.borderColor = 'red';
        errorMsg.textContent = 'Contraseña: Al menos 8 caracteres, formados por letras y números.';
        return false;
    }else{
        contrasena.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }   
}
function limpiarContraseña() {
    console.log('limpiarContraseña');
    document.getElementById('contrasena').style.borderColor = '';
    document.getElementById('error-contrasena').textContent = '';
}
    
/*•	Edad: Número entero mayor o igual a 18.*/
function validarEdad() {
    console.log('validarEdad');
    var edad = document.getElementById('edad');
    var errorMsg = document.getElementById('error-edad');
    var edadValue = parseInt(edad.value, 10);

    if (isNaN(edadValue) || edadValue < 18) {
        edad.style.borderColor = 'red';
        errorMsg.textContent = 'Edad: Número entero mayor o igual a 18.';
        return false;
    }else{
        edad.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }   
}
function limpiarEdad() {
    console.log('limpiarEdad');
    document.getElementById('edad').style.borderColor = '';
    document.getElementById('error-edad').textContent = '';
}

/*•	Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.*/
function validarTelefono() {
    console.log('validarTelefono');
    var telefono = document.getElementById('telefono');
    var errorMsg = document.getElementById('error-telefono');
    var telefonoPattern = /^\d{7,}$/;

    if (!telefonoPattern.test(telefono.value)) {
        telefono.style.borderColor = 'red';
        errorMsg.textContent = 'Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.';
        return false;
    }else{
        telefono.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarTelefono() {
    console.log('limpiarTelefono');
    document.getElementById('telefono').style.borderColor = '';
    document.getElementById('error-telefono').textContent = '';
}

/*•	Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.*/
function validarDireccion() {
    console.log('validarDireccion');
    var direccion = document.getElementById('direccion');
    var errorMsg = document.getElementById('error-direccion');
    var direccionPattern = /^[a-zA-Z0-9\s]{5,}$/;

    if (!direccionPattern.test(direccion.value)) {
        direccion.style.borderColor = 'red';
        errorMsg.textContent = 'Dirección Al menos 5 caracteres, con letras, números y un espacio en el medio.';
        return false;
    }else{
        direccion.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarDireccion() {
    console.log('limpiarDireccion');
    document.getElementById('direccion').style.borderColor = '';
    document.getElementById('error-direccion').textContent = '';
}

/*•	Ciudad: Al menos 3 caracteres.*/
function validarCiudad() {
    console.log('validarCiudad');
    var ciudad = document.getElementById('ciudad');
    var errorMsg = document.getElementById('error-ciudad');
    var ciudadPattern = /^[a-zA-Z\s]{3,}$/;

    if (!ciudadPattern.test(ciudad.value)) {
        ciudad.style.borderColor = 'red';
        errorMsg.textContent = 'Ciudad: Al menos 3 caracteres.';
        return false;
    }else{
        ciudad.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarCiudad() {
    console.log('limpiarCiudad');
    document.getElementById('ciudad').style.borderColor = '';
    document.getElementById('error-ciudad').textContent = '';
}

/*•	Código Postal: Al menos 3 caracteres.*/
function validarCodigoPostal() {
    console.log('validarCodigoPostal');
    var codigoPostal = document.getElementById('codigoPostal');
    var errorMsg = document.getElementById('error-codigoPostal');
    var codigoPostalPattern = /^[a-zA-Z0-9\s]{3,}$/;

    if (!codigoPostalPattern.test(codigoPostal.value)) {
        codigoPostal.style.borderColor = 'red';
        errorMsg.textContent = 'Código postal: Al menos 3 caracteres.';
        return false;
    }else{
        codigoPostal.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarCodigoPostal() {
    console.log('limpiarCodigoPostal');
    document.getElementById('codigoPostal').style.borderColor = '';
    document.getElementById('error-codigoPostal').textContent = '';
}

/*•	DNI: Número de 7 u 8 dígitos.*/
function validarDNI() {
    console.log('validarDNI');
    var dni = document.getElementById('dni');
    var errorMsg = document.getElementById('error-dni');
    var dniPattern = /^\d{7,8}$/;

    if (!dniPattern.test(dni.value)) {
        dni.style.borderColor = 'red';
        errorMsg.textContent = 'DNI: Número de 7 u 8 dígitos.';
        return false;
    }else{
        dni.style.borderColor = 'green';
        errorMsg.textContent = '';
        return true;
    }
}
function limpiarDNI() {
    console.log('limpiarDNI');
    document.getElementById('dni').style.borderColor = '';
    document.getElementById('error-dni').textContent = '';
}

/*Al presionar el botón “Enviar” se debe mostrar un cartel emergente con la información cargada en el formulario en caso de que haya 
pasado todas las validaciones. Si alguna validación no pasó, además de mostrar el error debajo del campo, también se debe mostrar 
el error en el cartel emergente.*/
async function enviarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario
    console.log('enviarFormulario');

    var nombreCompletoValido = validarNombreCompleto();
    var emailValido = validarEmail();
    var contrasenaValida = validarContraseña();
    var edadValida = validarEdad();
    var telefonoValido = validarTelefono();
    var direccionValida = validarDireccion();
    var ciudadValida = validarCiudad();
    var codigoPostalValido = validarCodigoPostal();
    var dniValido = validarDNI();

    if (nombreCompletoValido && emailValido && contrasenaValida && edadValida && telefonoValido && direccionValida && ciudadValida && codigoPostalValido && dniValido) {
        var nombreCompleto = document.getElementById('nombreCompleto').value;
        var email = document.getElementById('email').value;
        var edad = document.getElementById('edad').value;
        var telefono = document.getElementById('telefono').value;
        var direccion = document.getElementById('direccion').value;
        var ciudad = document.getElementById('ciudad').value;
        var codigoPostal = document.getElementById('codigoPostal').value;
        var dni = document.getElementById('dni').value;

        var mensaje = 'Información del formulario:\n\n' +
                      'Nombre Completo: ' + nombreCompleto + '\n' +
                      'Email: ' + email + '\n' +
                      'Edad: ' + edad + '\n' +
                      'Teléfono: ' + telefono + '\n' +
                      'Dirección: ' + direccion + '\n' +
                      'Ciudad: ' + ciudad + '\n' +
                      'Código Postal: ' + codigoPostal + '\n' +
                      'DNI: ' + dni;

        alert(mensaje);

        // Clase 10 - Envío de datos al servidor (GET con query params)
        console.log('Enviando datos al servidor...');
        // Recolectar datos del formulario
        const form = document.getElementById('miFormulario');
        const datos = new FormData(form);
        const params = new URLSearchParams(datos).toString();
        const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

        try {
            const response = await fetch(url, { method: 'GET' });

            if (!response.ok) {
                const errorTexto = `Error ${response.status}: ${response.statusText}`;
                mostrarModal("Error al enviar datos", errorTexto);
                return;
            }

            const data = await response.json();
            console.log('Respuesta recibida:', data);

            // Mostrar modal con los datos recibidos
            mostrarModal("Suscripción exitosa 🎉", JSON.stringify(data, null, 2));

            // Guardar en LocalStorage
            localStorage.setItem('datosSuscripcion', JSON.stringify(Object.fromEntries(datos)));

        } catch (error) {
            mostrarModal("Error de conexión", error.message);
        }

    } else {
        var errores = document.getElementsByClassName('error-msg');
        var stringErrores = "";
        for (var i = 0; i < errores.length; i++) {
            if (errores[i].textContent !== '') {  
                stringErrores += errores[i].textContent + '\n';
            } 
        }

        //alert('Por favor, corrija los errores en el formulario antes de enviarlo: '+'\n\n'+stringErrores);
        mostrarModal('Error en validación', 'Por favor, corrija los errores en el formulario antes de enviarlo: '+'\n\n'+stringErrores);
        return;
    }   
}


/*Bonus: Si pudieron resolver todo lo anterior y les queda tiempo, agregar un título al formulario que diga “HOLA” 
y que a medida que se edita el campo “nombre completo”, se vaya modificando en tiempo real el título del formulario. 
Por ejemplo, si el nombre es JUAN PÉREZ, el título debe decir “HOLA JUAN PÉREZ” e ir modificándose en tiempo real a 
medida que se presionan teclas (utilizar evento keydown y focus).*/
function mostrarSaludo() {
    console.log('mostrarSaludo');
    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var saludo = document.getElementById('saludo');
    saludo.textContent = 'Hola ' + nombreCompleto;
}
function limpiarSaludo() {
    console.log('limpiarSaludo');
    document.getElementById('saludo').textContent = '';
}


// -----------------------------------------------------------------------
// ----------------------------- Clase 10 --------------------------------
// -----------------------------------------------------------------------

// MODAL
function crearModal() {
    const modal = document.createElement('div');
    modal.id = 'miModal';
    modal.classList.add('modal', 'oculto');
    modal.innerHTML = `
        <div class="modal-contenido">
            <span id="cerrarModal" class="cerrar">&times;</span>
            <h2 id="modalTitulo"></h2>
            <pre id="modalMensaje"></pre>
        </div>
    `;
    document.body.appendChild(modal);

    // Cerrar modal
    document.getElementById('cerrarModal').addEventListener('click', ocultarModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) ocultarModal();
    });
}
function ocultarModal() {
    document.getElementById('miModal').classList.add('oculto');
}

function mostrarModal(titulo, mensaje) {
    const modal = document.getElementById('miModal');
    document.getElementById('modalTitulo').textContent = titulo;
    document.getElementById('modalMensaje').textContent = mensaje;
    modal.classList.remove('oculto');
}

// Crear modal al cargar la página
document.addEventListener('DOMContentLoaded', crearModal);

// --- CARGAR DATOS DESDE LOCALSTORAGE AL INICIAR ---
window.onload = function() {
    const guardados = localStorage.getItem('datosSuscripcion');
    if (guardados) {
        const datos = JSON.parse(guardados);
        for (const [key, value] of Object.entries(datos)) {
            const campo = document.getElementById(key);
            if (campo) campo.value = value;
        }
        document.getElementById('saludo').textContent = 'Hola ' + (datos.nombreCompleto || '');
    }
};
