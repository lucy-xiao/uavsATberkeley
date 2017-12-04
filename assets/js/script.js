let peoples = [
    {
        "name":"Andre Askari",
        "pic": "assets/img/andre2-min.jpg",
        "email": "andreaskari@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/andreaskari/",
        "title" : "Director of Public Relations"
    },
    {
        "name":"David Hooper",
        "pic": "assets/img/david2-min.jpg",
        "email": "davidhooper4@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/david-dominguez-hooper-57950190/",
        "title" : "Senior Advisor"

    },
    {
        "name":"Eric Sivonxay",
        "pic": "assets/img/eric2-min.jpg",
        "email": "sivonxay@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/eric-sivonxay-547b52100/",
        "title" : "FPV Racing Team Captain"
    },
    {
        "name":"Joey Kroeger",
        "pic": "assets/img/joey2-min.jpg",
        "email": "jrkroeger@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/joey-kroeger-185292119/",
        "title" : "Director of R&D"
    },
    {
        "name":"Ryan Park",
        "pic": "assets/img/ryan2-min.jpg",
        "email": "rbqpark@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/rbqpark/",
        "title" : "Vice President"
    },
    {
        "name":"Trey Fortmuller",
        "pic": "assets/img/trey2-min.jpg",
        "email": "tfortmuller@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/trey-fortmuller/",
        "title" : "President"
    },
    {
        "name": "Matt Wong",
        "pic": "assets/img/matt-min.jpg",
        "email": "mbearw@berkeley.edu",
        "linkedin": "https://www.linkedin.com/in/motherofdrones/",
        "title" : "Orchestrator"
    }
];
let scrolled = [$("#about"), $("#organizers"), $("#gallery") ,$("#sponsors")];
let emailSVG = '<svg class="icon email" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#fff;}</style></defs><title>email2</title><circle class="icon-background" cx="64" cy="64" r="64"/><path class="cls-1" d="M64,28"/><path class="cls-1" d="M64,72.4l38.2-32.7A4.1,4.1,0,0,0,100,39H28a4.1,4.1,0,0,0-2.2.7Z"/><path class="cls-1" d="M66.6,75.4a4,4,0,0,1-5.2,0L24,43.5V85a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V43.4Z"/></svg>';

let linkedinSVG = '<svg class="icon linkedin" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.39 486.39"><defs></defs><title>linkedin</title><path class="icon-background" d="M243.2,0C108.89,0,0,108.89,0,243.2s108.89,243.2,243.2,243.2,243.2-108.89,243.2-243.2S377.5,0,243.2,0ZM182.4,361H121.6V148.2h60.8ZM153.88,135.16a28.51,28.51,0,1,1,28.51-28.51A28.49,28.49,0,0,1,153.88,135.16ZM395.19,361h-60.8V229.43c0-15.41-4.41-26.2-23.35-26.2-31.4,0-37.45,26.2-37.45,26.2V361H212.8V148.2h60.8v20.34a101.69,101.69,0,0,1,60.8-20.31c19.7,0,60.8,11.79,60.8,83.05V361Z"/></svg>';

for (person of peoples) {
    $(".organizers-container").append(
        '<div class="person-container"><img class="person-headshot" src="' + person["pic"] + '"></img>'
            + '<div class="person-name">' + person['name']+ '</div>'
            + '<div class="person-title">' + person['title']+ '</div>'
            +'<a href="' + person["linkedin"] +'">' +linkedinSVG + '</a>'
            +'<a href="mailto:' + person["email"] +'">' +emailSVG + '</a></div>');
}



function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByClassName('splash')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

$(document).ready( function() {

    onReady(function() {
        $('body').addClass('loaded');
    });

    // For animating heading slide right
    // $(window).scroll( function(){
    
    //     $('.hidden.left').each( function(i){
    //         let bottom_of_object = $(this).offset().top;
    //         let bottom_of_window = $(window).scrollTop() + parseInt($('.section').css("height"),10);
    //         if( bottom_of_window > bottom_of_object ){
    //             $(this).animate({'opacity':'1', "margin-left": "100px"},200);
    //         }
    //     }); 
    // });

function isScrolledIntoView(elem, window) {
    var docViewTop = window.scrollTop();
    var docViewBottom = docViewTop + screen.height;
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();
    return ((elemBottom <= docViewBottom) && (elemBottom >= docViewTop));
}
$(document).on("scroll", function () {
    scrolled.forEach( function(i){
        if (isScrolledIntoView(i, $(window))) {
            // i.animate({'opacity':'1', "margin-left": "100px"},800);
            i.addClass("animate");
        }
    });
});

});
