//Creo una variable para establecer la posición actual de la imagen
var pos=0;
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
    });
    $("#btnRight").click(function () {
        //Compruebo que la posición de la foto que se muestra no sea la primera
        if(pos>-1){
        $("#sldSize").animate({left: "-=100%"}, 500);
        pos--;
        }
    });
    $("#btnLeft").click(function () {
        //Compruebo que la posición de la foto que se muestra no sea la ultima
        if(pos<1){
        $("#sldSize").animate({left: "+=100%"}, 500);
        pos++;
        }
    });
});

