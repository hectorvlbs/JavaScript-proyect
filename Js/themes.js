window.addEventListener("load", () => {
    $("#theme-changed").hide();
    var theme = $("#theme");
    $("#to_pink").click(function (e) { 
        theme.attr("href", "Css/Index_pink.css");

        $("#theme-changed").slideDown().delay(3000).queue(function (next) {
            $(this).slideUp();
            next();
        });
    });

    $("#to_black").click(function (e) { 
        theme.attr("href", " "); 
        $("#theme-changed").slideDown().delay(3000).queue(function (next) {
            $(this).slideUp();
            next();
        });
    });

});