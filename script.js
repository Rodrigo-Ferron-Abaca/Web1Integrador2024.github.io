//Validar Formulario

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const email = document.getElementById('email').value.trim();
    const usuarioLol = document.getElementById('usuarioLol').value.trim();
    
    // Validaciones
    let valid = true;
    
    // Función para marcar un campo como error
    function setError(element) {
        element.classList.add('error');
        element.classList.remove('success');
        valid = false;
    }
    
    // Función para marcar un campo como correcto
    function setSuccess(element) {
        element.classList.remove('error');
        element.classList.add('success');
    }
    
    if (nombre === '' || nombre.length > 50) {
        setError(document.getElementById('nombre'));
    } else {
        setSuccess(document.getElementById('nombre'));
    }
    
    if (apellido === '' || apellido.length > 50) {
        setError(document.getElementById('apellido'));
    } else {
        setSuccess(document.getElementById('apellido'));
    }
    
    if (!/^\d+$/.test(dni)) {
        setError(document.getElementById('dni'));
    } else {
        setSuccess(document.getElementById('dni'));
    }
    
    if (isNaN(edad) || edad < 0 || edad > 100) {
        setError(document.getElementById('edad'));
    } else {
        setSuccess(document.getElementById('edad'));
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(document.getElementById('email'));
    } else {
        setSuccess(document.getElementById('email'));
    }
    
    if (!/^[\w #]{3,20}$/.test(usuarioLol)) {
        setError(document.getElementById('usuarioLol'));
    } else {
        setSuccess(document.getElementById('usuarioLol'));
    }
    
    // Mostrar los datos enviados si todos los campos son válidos
    if (valid) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; // Limpiar resultados previos
        
        const data = {
            Nombre: nombre,
            Apellido: apellido,
            DNI: dni,
            Edad: edad,
            Email: email,
            'Usuario de LoL': usuarioLol
        };
        
        for (const key in data) {
            resultDiv.style.display = 'flex';
            const p = document.createElement('p');
            p.textContent = `${key}: ${data[key]}`;
            resultDiv.appendChild(p);
        }
    }
});


