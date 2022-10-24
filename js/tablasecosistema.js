//agregado de tablas a ecosistema

const fyfs=[
    new Florayfauna('Algarrobo negro Prosopis nigra','/src/algarrobo.jpeg'),
    new Florayfauna('Guabiyú: Myrcianthes pungens','/src/chañar.jpeg'),
    new Florayfauna('Molle o incienso Schinus longifolius','/src/molle.jpeg'),
    new Florayfauna('Pasionaria Passiflora coerulea','/src/passionaria.jpeg'),
    new Florayfauna('Chañar Geoffroea decorticans','/src/chañar.jpeg'),
    new Florayfauna('Carpintero bataraz chico Picoides mixtus','/src/carpintero.jpeg'),
    new Florayfauna('Cuis grande Cavia aperea','/src/cuiz.jpeg'),
    new Florayfauna('Curutié blanco Cranioleuca pyrrhophia','/src/curutie.jpeg'),
    new Florayfauna('Juan chiviro Cyclarhis gujanensis','/src/chiviro.jpeg'),
];

const polinizadores=[
    new Polinizador('Abejas','/src/abejas.jpeg'),
    new Polinizador('Cascarudos', '/src/cascarudo.jpeg'),
    new Polinizador('Pajaros', '/src/pajaros.jpeg')
];

const dispersores=[
    new Dispersor('Pájaros', '/src/chiviro.jpeg'),
    new Dispersor('Pequeñps Roedores','/src/cuiz.jpeg'),
    new Dispersor('Viento', '/src/viento.jpeg')
]

function mostrarTablas(){
    console.log("Mostrar Tablas");
    let textofyf='';
    let textopoli='';
    let textodisp='';

   for(let florayfauna of fyfs){
        textofyf += `<tr>
			<td>${florayfauna.nombre}</td>
			<td><img src=${florayfauna.foto}></td>
            <tr>`
    }

    for(let polinizador of polinizadores){
        textopoli += `<tr>
			<td>${polinizador.nombre}</td>
			<td><img src=${polinizador.foto}></td>
            <tr>`
    }

    for(let dispersor of dispersores){
        textodisp +=`<tr>
        <td>${dispersor.nombre}</td>
        <td><img src=${dispersor.foto}></td>
        <tr>`
    }

    document.getElementById("florayfauna").innerHTML = textofyf;
    document.getElementById("polinizadores").innerHTML = textopoli;
    document.getElementById("dispersores").innerHTML = textodisp;
}