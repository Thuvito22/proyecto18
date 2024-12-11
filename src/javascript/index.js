$(function() {
    console.log('paso por paso');

    $("#resListar").on("click", function() {
        // Añade aquí la lógica para el click del botón con id "resListar"
        console.log('El botón resListar fue clickeado');

        // Si 'listar' es otro botón o elemento, asegúrate de seleccionarlo correctamente
        $('listar').click(function() {
            console.log('El botón listar fue clickeado');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Botón ${this.textContent} fue clickeado`);
        });
    });
});
