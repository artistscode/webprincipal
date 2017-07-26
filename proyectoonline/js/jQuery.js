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
    //Cambia las imagenes del menu segun entra o sale el raton "hay que reducir"
    $('#bcgColor1').mouseenter(function() {
        $('#bcgColor1').css('background-image', 'url(image/image1.png)');
    });
    $('#bcgColor1').mouseleave(function() {
        $('#bcgColor1').css('background-image', 'none');
    });
     $('#bcgColor2').mouseenter(function() {
        $('#bcgColor2').css('background-image', 'url(image/image2.png)');
    });
    $('#bcgColor2').mouseleave(function() {
        $('#bcgColor2').css('background-image', 'none');
    });
     $('#bcgColor3').mouseenter(function() {
        $('#bcgColor3').css('background-image', 'url(image/image3.png)');
    });
    $('#bcgColor3').mouseleave(function() {
        $('#bcgColor3').css('background-image', 'none');
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

