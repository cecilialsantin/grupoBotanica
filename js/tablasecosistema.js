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

    const fyfs=[
        new Florayfauna('Algarrobo negro Prosopis nigra','./src/algarrobo.jpeg'),
        new Florayfauna('Guabiyú: Myrcianthes pungens','./src/chañar.jpeg'),
        new Florayfauna('Molle o incienso Schinus longifolius','./src/molle.jpeg'),
        new Florayfauna('Pasionaria Passiflora coerulea','./src/passionaria.jpeg'),
        new Florayfauna('Chañar Geoffroea decorticans','./src/chañar.jpeg'),
        new Florayfauna('Carpintero bataraz chico Picoides mixtus','./src/carpintero.jpeg'),
        new Florayfauna('Cuis grande Cavia aperea','./src/cuiz.jpeg'),
        new Florayfauna('Curutié blanco Cranioleuca pyrrhophia','./src/curutie.jpeg'),
        new Florayfauna('Juan chiviro Cyclarhis gujanensis','./src/chiviro.jpeg'),
    ];
    
    const polinizadores=[
        new Polinizador('Abejas','./src/abejas.jpeg'),
        new Polinizador('Cascarudos', './src/cascarudo.jpeg'),
        new Polinizador('Pajaros', './src/pajaros.jpeg')
    ];
    
    const dispersores=[
        new Dispersor('Pájaros', './src/chiviro.jpeg'),
        new Dispersor('Pequeños Roedores','./src/cuiz.jpeg'),
        new Dispersor('Viento', './src/viento.jpeg')
    ]
    
    let mostrarTablas = function mostrarTablas(){
        console.log("Mostrar Tablas");
        let textofyf='';
        let textopoli='';
        let textodisp='';
    
       for(let florayfauna of fyfs){
            textofyf += `<tr>
                <td>${florayfauna.nombre}</td>
                <td><img width="80px" heigth="80px" src=${florayfauna.foto}></td>
                <tr>`
        }
    
        for(let polinizador of polinizadores){
            textopoli += `<tr>
                <td>${polinizador.nombre}</td>
                <td><img width="80px" heigth="80px" src=${polinizador.foto}></td>
                <tr>`
        }
    
        for(let dispersor of dispersores){
            textodisp +=`<tr>
            <td>${dispersor.nombre}</td>
            <td><img width="80px" heigth="80px" src=${dispersor.foto}></td>
            <tr>`
        }
    
        document.getElementById("florayfauna").innerHTML = textofyf;
        document.getElementById("polinizadores").innerHTML = textopoli;
        document.getElementById("dispersores").innerHTML = textodisp;
    }

    return mostrarTablas();

}

//agregado de tablas a ecosistema

