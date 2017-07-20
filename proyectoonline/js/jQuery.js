//Creo una variable para establecer la posición actual de la imagen
var pos=0;
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
        $("#sldSize, #btnRight, #btnLeft").toggleClass("sldSizeNone");
        //Comprobación si el slide tiene entre sus clases la clase "sldSizeNone"
        if($("#sldSize, #btnRight, #btnLeft").hasClass("sldSizeNone")){
            //Desaparece el slide cuando el menu esta activo con fadeOut
            $("#sldSize, #btnRight, #btnLeft").fadeOut("slow");
        }else{
            //Aparece el slide cuando el menu esta oculto con fadeIn
            $("#sldSize, #btnRight, #btnLeft").fadeIn("slow");
        }
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

