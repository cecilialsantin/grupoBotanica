class Polinizador{

constructor(nombre, foto){
    this._nombre = nombre;
    this._foto = foto;
}

get nombre(){
return this._nombre;
}
set nombre(nombre){
return this._nombre=nombre;
}

get foto(){
return this._foto;
}
set foto(foto){
return this._foto=foto;
}
}

