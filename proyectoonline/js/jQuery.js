
// Despliega el menu y lo repliega
$(document).ready(function () {
    $("#btnMenu").click(function () {
        $("#menu").slideToggle("slow");
    });
    $("#btnLeft").click(function () {
        $("#sldSize").slidesjs({
            width: '100%',
            height: 200
        });
    });
});