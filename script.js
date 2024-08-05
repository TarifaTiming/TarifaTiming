document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("timeForm");
    const tableBody = document.querySelector("#timesTable tbody");
}); 



document.addEventListener('DOMContentLoaded', () => {
    const botonFormulario = document.getElementById('formu');
    const form = document.getElementById('timeForm');

    botonFormulario.addEventListener('click', () => {
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden');
            botonFormulario.textContent = 'Cancelar'; // Opcional: cambia el texto del botón
        } else {
            form.classList.add('hidden');
            botonFormulario.textContent = '¡Añade tu tiempo!'; // Opcional: cambia el texto del botón
        }
    });
});