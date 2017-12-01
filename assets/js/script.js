$(document).ready( function() {
    // $(".splash-text").delay(700).animate({opacity:.9}, 2000);

    let peoples = [
        {
            "name":"Andre",
            "pic": "assets/img/andre2-min.jpg"
        },
        {
            "name":"David",
            "pic": "assets/img/david2-min.jpg"
        },
        {
            "name":"Eric",
            "pic": "assets/img/eric2-min.jpg"
        },
        {
            "name":"Joey",
            "pic": "assets/img/joey2-min.jpg"
        },
        {
            "name":"Ryan",
            "pic": "assets/img/ryan2-min.jpg"
        },
        {
            "name":"Trey",
            "pic": "assets/img/trey2-min.jpg"
        }
    ];

    // let peoples = [
    //     {
    //         "name":"Andre",
    //         "pic": "assets/img/andre2.jpg"
    //     }
    // ];

    for (person of peoples) {
        $(".about-container").append('<div class="person-container"><img class="person-headshot" src="' + person["pic"] + '"></img><div class="person-name">' + person['name']+ '</div></div>');
    }

    //For animating heading slide right
    $(window).scroll( function(){
    
        $('.hidden.left').each( function(i){

            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + parseInt($('.section').css("height"),10);
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', "margin-left": "100px"},800);
            }
        }); 
    });
});
