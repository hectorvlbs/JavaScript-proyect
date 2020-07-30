window.addEventListener("load", () => {
    $("#Up").click(function (e) { 
        console.log("Hola");
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
});