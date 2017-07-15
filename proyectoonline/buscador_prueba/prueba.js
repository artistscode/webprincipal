var radioBtnd = document.getElementsByName('distancia');
var radioBtnc = document.getElementsByName('color');
var caja=document.getElementsByClassName('caja');

//declaracion de la clase principal y sus atributos con get//
class Caja{
    constructor(distancia, color){
    this.distancia=distancia;
    this.color=color;
}
}
  //establecer un prototipo de la clase principal que devuelve los valores de los atributos internos//
  Caja.prototype.get=function(){
      return this.distancia;
  },
  Caja.prototype.get=function(){
      return this.color;
  };


//introduccion de los objetos en un array//
arrayObj = new Array([document.getElementsByClassName('caja').length]);


window.onload = function () {
    for (var i = 0; i <document.getElementsByName('distancia').length; i++) {
        //metemos los tados personalizados de cada objeto de la clase//
            arrayObj[i]=new Caja(obtenerDistancia(i),obtenerColor(i));
        }
        //establecer a propiedad onclick en el buscador
    document.getElementById('buscador').onclick = function () {        
        resd = elecciond();
        resc=eleccionc();
        escribir(resd, resc);
    };

};


function obtenerColor(i){
    return document.getElementsByName('color')[i].value;
}

function obtenerDistancia(i){
    return document.getElementsByName('distancia')[i].value;
}



//comparamos los atributos de la clase con los seleccionados por el usuario//
function escribir(resd, resc) {
    for (var i = 0; i < caja.length; i++) {
        caja[i].style.display='none';
    }
    for (var i = 0; i <arrayObj.length; i++) {
        if (resd==arrayObj[i].distancia || resc==arrayObj[i].color) {
            caja[i].style.display='block';
        }
    }
};
// utilizar otro if antes de este para establecer primero los productos vip//



//recopilacion de las obciones de los radio buttons elegidos por el cliente//
function elecciond() {
    for (var i = 0; i < radioBtnd.length; i++)
    {
        if (radioBtnd[i].checked)
            resultado = radioBtnd[i].value;
    }
    return resultado;
}

function eleccionc() {
    for (var i = 0; i < radioBtnc.length; i++)
    {
        if (radioBtnc[i].checked)
            resul = radioBtnc[i].value;
    }
    return resul;
}