function guardar(){
    db.collection("socios").add({
        nombre: document.getElementById('nombrereg').value,
        apellido: document.getElementById('apellidoreg').value,
        email: document.getElementById('emailreg').value
    })
    .then((docRef) => {
       alert("Registro existoso");
    })
    .catch((error) => {
        console.error("error en el registro");
    });
    
}