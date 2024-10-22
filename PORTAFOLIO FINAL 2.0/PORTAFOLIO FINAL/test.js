document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado correctamente. ¡Gracias por contactarte!');
});
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-text');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const projectText = this.nextElementSibling; // Selecciona el siguiente elemento (el texto del proyecto)

            if (projectText.style.display === 'none' || projectText.style.display === '') {
                projectText.style.display = 'block'; // Muestra el texto
                this.textContent = 'Mostrar Menos'; // Cambia el texto del botón
            } else {
                projectText.style.display = 'none'; // Oculta el texto
                this.textContent = 'Mostrar Más'; // Cambia el texto del botón
            }
        });
    });
});
