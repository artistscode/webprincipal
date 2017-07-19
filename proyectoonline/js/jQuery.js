var pos=0;
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
    });
    $("#btnRight").click(function () {
        if(pos>-1){
        $("#sldSize").animate({left: "-=100%"}, 500);
        pos--;
        }
    });
    $("#btnLeft").click(function () {
        if(pos<1){
        $("#sldSize").animate({left: "+=100%"}, 500);
        pos++;
        }
    });
});

