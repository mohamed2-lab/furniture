$(document).ready(function(){


    .navbar-toggler .two {
        margin: 5px 0px;
    }
    .top{
        transform: rotate(-45deg) translate(0,10px);
    }
    .middle {
        opacity: 0;
    }
    .bottom{
        transform: rotate(45deg) translate(0,-11px);
    }

    // mix it up.

    var mixer = mixitup('.shuffel');

    // veno box.

    $('.venobox').venobox(); 

    // scroll

    $('nav li a').on('click', function(){

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 75

        })

    })

    // active link

    $('nav li a').on('click', function(){

        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

    })

    // btn up

    $(window).scroll(function(){

        if($(this).scrollTop()>= 1000) {

            $('.up').fadeIn(1000)

        } else {

            $('.up').fadeOut(1000)

        }

    })

    $('.up').on('click', function() {

        $('html, body').animate({

            scrollTop: 0

        })

    })


});