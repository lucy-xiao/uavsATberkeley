$(document).ready( function() {
    $(".splash-text").delay(700).animate({opacity:.9}, 2000);

    $(window).scroll( function(){
    
    $('.hidden').each( function(i){

        let bottom_of_object = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + parseInt($('.section').css("height"),10);
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1', "margin-left": "100px"},800);
        }

    }); 

});
});
