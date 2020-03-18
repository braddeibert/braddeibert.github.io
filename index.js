$(document).ready(function() {
    $("#a").click(function() {
        $("#about").fadeIn(1500);
        $("#proj").fadeIn(2000);
        $("#edu").fadeIn(2500);
        $("#exp").fadeIn(3000);
        $("footer").fadeIn(3500);
        $('html, body').animate({scrollTop: $("#about").offset().top}, 1000);
    });

    $("#p").click(function() {
        $("#about").fadeIn(1500);
        $("#proj").fadeIn(2000);
        $("#edu").fadeIn(2500);
        $("#exp").fadeIn(3000);
        $("footer").fadeIn(3500);
        $('html, body').animate({scrollTop: $("#proj").offset().top}, 1500);
    });

    $("#ed").click(function() {
        $("#about").fadeIn(1500);
        $("#proj").fadeIn(2000);
        $("#edu").fadeIn(2500);
        $("#exp").fadeIn(3000);
        $("footer").fadeIn(3500);
        $('html, body').animate({scrollTop: $("#edu").offset().top}, 2000);
    });

    $("#ex").click(function() {
        $("#about").fadeIn(1500);
        $("#proj").fadeIn(2000);
        $("#edu").fadeIn(2500);
        $("#exp").fadeIn(3000);
        $("footer").fadeIn(3500);
        $('html, body').animate({scrollTop: $("#exp").offset().top}, 2500);
    });

    $("#c").click(function() {
        $("#about").fadeIn(1500);
        $("#proj").fadeIn(2000);
        $("#edu").fadeIn(2500);
        $("#exp").fadeIn(3000);
        $("footer").fadeIn(3500);
        $('html, body').animate({scrollTop: $("footer").offset().top}, 3000);
    });

    $("#prop").mouseenter(function() {
        $("#proj").css("background-image", "url(imgs/proposal-preview.png)");
    });

    $("#rcp").mouseenter(function() {
        $("#proj").css("background-image", "url(imgs/rcp-preview.png)");
    });

    $("#etch").mouseenter(function() {
        $("#proj").css("background-image", "url(imgs/etch-preview.png)");
    });

    $("#goog").mouseenter(function() {
        $("#proj").css("background-image", "url(imgs/google-preview.png)");
    });
});
    

