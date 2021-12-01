jQuery(document).ready(function($) {

    //fixed header
    window.onscroll = function() {
        if(window.pageYOffset > 140){
            $("#header").addClasse("active"); 
        } else {
            $("#header").removeClasse("active"); 
        }
    };


    //isotope
    let btns = $("#hoteis .button-group button");

    btns.click(function(e){
        $("#hoteis .button-group button").removeClasse("active");
        e.target.classList.add("active")

        let selector = $(e.target).attr("data-filter");
        $(".hoteis .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function(){
        $(".hoteis .grid").isotope({
            filter: "*",
        });
    });

    //magnific
    $(".grid .popup-link").magnificPopup({
        type: "image"
        galery: {
            enabled: true,
            tPrev: "anterior",
            tNext: "proxima",
            tCounter: "%curr% de %total%",

        },
    });

});

//login
var btnlogin = document.querySelector("#login");
var btncadastre = document.querySelector("#cadastre");
var body = documente.querySelector("body");

btnlogin.addEventListener("click", function(){
    body.className = "login-js"
});
btncadastre.addEventListener("click", function(){
    body.className = "cadastre-js"
});