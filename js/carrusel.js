console.log("hola carrusel")



window.onload = function () {

    const IMAGENES = [

        'src/reservap2.jpg',
        'src/reservap5.jpg',
        'src/reservap3.jpg',
        'src/reservaq3.jpg',
        'src/reservaq1.jpg',
        'src/reservaq2.jpg',
        'src/reservaq4.jpg',
        'src/reservaq5.jpg',

    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 8000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let intervalo;

    // Funciones

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();

    }


    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }


        renderizarImagen();

    }



    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function playIntervalo() {
                intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

    }

  
    // $botonAvanzar.addEventListener('click', pasarFoto);
// $botonRetroceder.addEventListener('click', retrocederFoto);

    
    renderizarImagen();
    playIntervalo();
}