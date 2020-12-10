import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';
import 'slick-carousel';
import './sliders';
import './map';



$(document).ready(function(){
    $(".page").hide();
    $(".alert").hide();
    $('.popup-fade').hide();
    $(".main-btn").click(function () {
        if ($(".page").is(":hidden")) {
            $(".page").show('fast');
            $(".main-btn").hide()
        } else {
            $(".page").hide('fast');

        }
    });
    $('.close-btn').click(function (){
        $(".page").hide('fast');
    })
    $('.send-btn').click(function (){
        $(".page").hide('fast');
        $(".alert").fadeIn('slow');
    })
    $('.alert__close--btn').click(function (){
        $(".alert").fadeOut('slow');
    })



    $('.more__posts').hide();
    $('.show__more').click(function (){
        if ($(".more__posts").is(":hidden")) {
            $(".more__posts").slideToggle('fast');
        } else {
            $(".more__posts").slideToggle('fast');
        }
    })
    $('.footer__politic').click(function() {
        $('.popup-fade').fadeIn();
        $('body').addClass('modal-open');
        $('.modal__title').removeClass('scrollFontSize');
        return false;
    });
    $('.modal__close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        $('body').removeClass('modal-open');
        $('.modal__title').removeClass('scrollFontSize');
        return false;
    });
    $(document).ready(function () {
        $('.modal').scroll(function(){
            $('.modal__title').addClass('scrollFontSize');
        });
    });
})


