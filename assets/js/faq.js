$(function(){

    var faqContent = $("#faq-content").text();

    $('body').on('click touchstart', '.fa-minus', function(e){
        initialize ()
    });

    $('body').on('click touchstart', '.fa-plus', function(e){
        initialize ()
        $(this).addClass("text-gold");
        $(this).addClass("fa-minus");
        $(this).removeClass("fa-plus");
        var random = Math.floor((Math.random() * 20) + 1);
        $("#faq-content").html(faqContent.substring(0, faqContent.length - random));
        $(this).parent().parent().children(":first").addClass("text-gold");
    })

    function initialize () {
        $(".text-gold").removeClass("text-gold");
        $(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        $("#faq-content").empty();
    }

});
