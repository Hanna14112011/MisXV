const fechaEvento = new Date("November 14, 2026 00:00:00").getTime();


// =====================================================
// CONTADOR
// =====================================================

function actualizarContador() {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;


    if (distancia <= 0) {

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";

        return;
    }


    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    document.getElementById("dias").innerHTML =
        String(dias).padStart(2, "0");

    document.getElementById("horas").innerHTML =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").innerHTML =
        String(minutos).padStart(2, "0");
}


actualizarContador();

setInterval(actualizarContador, 1000);


// =====================================================
// MÚSICA
// =====================================================

const musica = document.getElementById("musica");

let musicaIniciada = false;


function iniciarMusica() {

    if (musicaIniciada) {
        return;
    }

    musica.play()
        .then(() => {

            musicaIniciada = true;

        })
        .catch(() => {

            console.log("El navegador bloqueó la reproducción.");

        });
}


// Primer click o toque en cualquier parte

document.addEventListener(
    "click",
    iniciarMusica, {
        once: true
    }
);

document.addEventListener(
    "touchstart",
    iniciarMusica, {
        once: true
    }
);