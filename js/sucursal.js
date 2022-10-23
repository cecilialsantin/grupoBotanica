class Sucursal{

    constructor(nombre, localidad, email, foto, mapa){
        this._nombre = nombre;
        this._localidad = localidad;
	    this._email = email;
	    this._foto = foto;
	    this._mapa = mapa;
    }
    
get nombre(){
    return this._nombre;
}
set nombre(nombre){
    return this._nombre=nombre;
}
get localidad(){
    return this._localidad;
}
set localidad(localidad){
    return this._localidad=localidad;
}
get email(){
    return this._email;
}
set email(email){
    return this._email=email;
}

get foto(){
    return this._foto;
}
set foto(foto){
    return this._foto=foto;
}
get mapa(){
    return this._mapa;
}
set mapa(mapa){
    return this._mapa=mapa;
}
}
