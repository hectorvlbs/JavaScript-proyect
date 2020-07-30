window.addEventListener("load", () => {

    var Posts = [
        {
            title: 'Prueba de título',
            date: GetDate(),
            content: GetContent()
        },
        {
            title: 'Prueba de título',
            date: new Date(),
            content:  GetContent()
        },
        {
            title: 'Prueba de título',
            date: new Date(),
            content:  GetContent()
        }
    ];

    cl(Posts);
    fillpostshtml(Posts);

    function GetDate() {
        date = new Date();
        return date;
    }

    function GetContent() {
        return 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';
    }

    function fillpostshtml(Posts) {
        Posts.forEach((element, index) => {
            var post = `
                <article class="post">
                    <h3>${element.title}</h3>
                    <span>${element.date}</span>
                    <p>${element.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            //cl(post);
            $("#posts").append(post);
        });
    }

    function cl(String) {
        return console.log(String);
    }

    $(document).ready(function(){
        $('.slider').bxSlider();
      });

    $(function() {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: 'true',
            slideWidth: 1200,
            pager: false
        }); 
    });  

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

    $("#Up").click(function (e) { 
        console.log("Hola");
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

});