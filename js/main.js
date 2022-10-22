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
    new Sucursal('Reserva Pilar', 'Pilar', 'repi@mail.com.ar', new Image(50, '/src/reservaPilar.png'), new URL('https://goo.gl/maps/cWKPUZLYTBv8YyCAA')),
    new Sucursal('Reserva Quinta Gigordia', 'Luján', 'quicig@mail.com.ar', new Image(50, '/src/quintaCigordia.jpeg'), new URL('https://goo.gl/maps/VJbKy7fT2RRoPMLy9')),
];

function mostrarSucursales(){
    console.log("Mostrar Sucursales");
    let texto='';
   for(let sucursal of sucursales){
        console.log(sucursales);
        texto += `<tr>
			<td>${sucursal.nombre}</td>
			<td>${sucursal.localidad}</td>
			<td>${sucursal.email}</td>
			<td>${sucursal.foto}</td>
			<td>${sucursal.mapa}</td>
            <tr>`
    }

    document.getElementById('sucursales').innerHTML = texto;

}
