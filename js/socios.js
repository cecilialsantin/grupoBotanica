
function traerDatos(){
    console.log('socios en funcion')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','/socios.json', true);

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
           
        }
    }
}