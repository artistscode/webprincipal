
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
    });
    $("#btnRight").click(function () {
        $("#sldSize").animate({left: "+=100%"}, 500);
    });
    $("#btnLeft").click(function () {
        $("#sldSize").animate({left: "-=100%"}, 500);
    });
});

