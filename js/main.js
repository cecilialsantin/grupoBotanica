//Agregado pie de pagina

let piepags = document.getElementById('piePagina');

piepags.innerHTML = `
    <p>Copyright - Grupo Botanica -  </p>
    <p>Curso Full Stack Python Codo a Codo - Comisión 22519</p>
`

//animación imagen Contacto

imgContacto.onclick= function(){
    this.style.width = '200px';
    this.style.height = '200px';
}; 

//carga de sucursales en base a la clase sucursal


const sucursales = [
    new Sucursal('Reserva Pilar', 'Pilar', 'repi@mail.com.ar', '/src/reservaPilar.png', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.5550293167357!2d-58.9159119!3d-34.4126543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d54387b4de7%3A0xb3cfe58ae07fc0db!2sReserva%20Natural%20del%20Pilar!5e0!3m2!1ses-419!2sar!4v1666446330569!5m2!1ses-419!2sar'),
    new Sucursal('Reserva Quinta Gigordia', 'Luján', 'quicig@mail.com.ar','/src/quintaCigordia.jpeg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0990358731915!2d-59.130341484857325!3d-34.57636056355795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7dbd9ba47c89%3A0xf1e73fb8b4a42bd1!2sReserva%20Forestal%20Quinta%20de%20Cigordia!5e0!3m2!1ses-419!2sar!4v1666446546067!5m2!1ses-419!2sar'),
];

function mostrarSucursales(){
    console.log("Mostrar Sucursales");
    let texto='';
   for(let sucursal of sucursales){
        console.log(sucursales);
        texto += `<tr>
			<td>${sucursal.nombre}</td>
			<td>${sucursal.localidad}</td>
			<td><a href="mailto:${sucursal.email}">${sucursal.email}</a></td>
			<td><img src=${sucursal.foto}></td>
			<td><iframe src=${sucursal.mapa}></iframe></td>
            <tr>`
    }

    document.getElementById('sucursales').innerHTML = texto;

}
