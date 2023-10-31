// ormulario de reserva de mesa.
document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('fecha').value;
    var time = document.getElementById('hora').value;

    alert('¡Gracias por reservar, ' + name + '! Tu mesa está reservada para el ' + date + ' a las ' + time + '. Te esperamos.');

    document.getElementById('form-contacto').reset();
});

// Formulario de reserva de pasteles.
document.getElementById('boton-pastel').addEventListener('click', function (e) {
    let seccionReserva = e.target.parentNode.parentNode;
    seccionReserva.style.display = "none";
    let formReservaPastel = document.querySelector('#reserva-pastel');
    formReservaPastel.innerHTML = `
            <form id="contactForm" class="form-pedido-pastel">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" required class="input-pastel">
              
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" required class="input-pastel">

                    <label for="fecha" class="label-reserva">Fecha de recogida:</label>
                    <input type="date" id="fecha" required class="input-pastel" min="2023-10-31" max="2023-12-31">
               
                    <label for="message">Mensaje:</label>
                    <textarea id="message" required placeholder="Tu pedido: describe aqui como quieres que sea tu pastel, peso, color, sabores, elergias, etc."></textarea>
                
                <button type="submit" class="enviar-pedido">Enviar Pedido</button>
            </form>
        `;

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('¡Pedido realizado con éxito!');

        formReservaPastel.innerHTML = '';
        seccionReserva.style.display = "block";
    });
});
