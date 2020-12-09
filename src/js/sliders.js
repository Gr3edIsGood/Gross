import $ from "jquery";

$('.slider__main').slick({
    arrows:true,
    speed:600,
    autoplay:true,
    infinite: false,
    responsive:[
        {
            breakpoint:376,
            settings:{
                prevArrow:false,
                nextArrow:false,
            },
        },

    ],
});
$('.slider__vacancy').slick({
    arrows:true,
    speed:600,
    infinite: false,
    slidesToShow:1,
    autoplay:true,
    variableWidth: true,
    responsive:[
        {
            breakpoint:376,
            settings:{
                prevArrow:false,
                nextArrow:false,
                variableWidth: false,
            },
        },

    ],
});