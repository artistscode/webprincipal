
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
    });
    $("#btnRight").click(function () {
        $("#sldSize").animate({marginLeft: "+=100%"}, 500);
    });
    $("#btnLeft").click(function () {
        $("#sldSize").animate({marginLeft: "-=100%"}, 500);
    });
});

