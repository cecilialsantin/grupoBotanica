
function listarSocios() {
   db.collection("socios").get().then((querySnapshot)=>{
    let socios = [];
    querySnapshot.forEach(doc =>{
        socios.push(doc.data());
    });
    agregarTodosLosSocios(socios)
    document.getElementById("totalSocios").innerHTML = `Total Socios: ${socios.length}`

});
}

function listarSociosRealTime() {
    db.collection("socios").onSnapshot((querySnapshot)=>{
     let socios = [];
     querySnapshot.forEach(doc =>{
         socios.push(doc.data());
     });
     agregarTodosLosSocios(socios);
     
 });
 
 }

 let socioNro=0;
 let tbody = document.getElementById('listasocios');

 function agregarSocioTabla(nombre, apellido, email){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.innerHTML = nombre;
    td2.innerHTML = apellido;
    td3.innerHTML = email;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);

    tbody.appendChild(trow);

 }

 function agregarTodosLosSocios(SociosDocsLista){
    socioNro=0;
    tbody.innerHTML='';
    SociosDocsLista.forEach(element=>{
        agregarSocioTabla(element.nombre, element.apellido, element.email)
    });

 }

 
 window.onload = listarSocios;
 

