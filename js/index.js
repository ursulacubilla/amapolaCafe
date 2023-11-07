// Formulario de reserva de mesa.
document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('fecha').value;
    var time = document.getElementById('hora').value;

    alert('¡Gracias por reservar, ' + name + '! Tu mesa está reservada para el ' + date + ' a las ' + time + '. Te esperamos.');

    document.getElementById('form-contacto').reset();


});



// Limitacion de la fecha de reserva
const inputFecha = document.getElementById('fecha');
const fechaHoy = new Date().toISOString().split('T')[0];
inputFecha.min = fechaHoy;

// Formulario de reserva de pasteles.
document.getElementById('boton-pastel').addEventListener('click', function (e) {
    let seccionReserva = e.target.parentNode.parentNode;
    seccionReserva.style.display = "none";
    let formReservaPastel = document.querySelector('#reserva-pastel');
    formReservaPastel.innerHTML = `
            <form id="contactForm" class="form-pedido-pastel">
                    <label for="name" class="label-reserva-pastel">Nombre:</label>
                    <input type="text" id="name" required class="input-pastel">
              
                    <label for="email" class="label-reserva-pastel">Correo Electrónico:</label>
                    <input type="email" id="email" required class="input-pastel">

                    <label for="fecha" class="label-reserva-pastel">Fecha de recogida:</label>
                    <input type="date" id="fecha" required class="input-pastel" min="2023-10-31" max="2023-12-31">
               
                    <label for="message" class="label-reserva-pastel">Mensaje:</label>
                    <textarea id="message" required placeholder="Tu pedido: describe aqui como quieres que sea tu pastel, peso, color, sabores, elergias, etc."></textarea>
                
                <button type="submit" class="enviar-pedido">Enviar Pedido</button>
                <button type="button" class="cancelar-pedido">Cancelar</button>
                
            </form>
        `;

    const contactoForm = document.getElementById('contactForm');
    contactoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('¡Pedido realizado con éxito!');

        formReservaPastel.innerHTML = '';
        seccionReserva.style.display = "block";
    });

    const cancelarPedidoBtn = document.querySelector('.cancelar-pedido');
    cancelarPedidoBtn.addEventListener('click', function () {
        formReservaPastel.innerHTML = '';
        seccionReserva.style.display = "block";
    });
});


window.addEventListener('scroll', function() {
}, { passive: true });

