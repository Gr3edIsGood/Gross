import $ from "jquery";











ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.620393],
            zoom: 13,
            controls: [],

        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            clusterize: true,
            clusterDisableClickZoom: true,
        }),




        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-1, -1],
            id:'phis',
        }),

        myPlacemark1 = new ymaps.Placemark([55.7640, 37.6126], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'phis',

        }),
        myPlacemark2 = new ymaps.Placemark([55.7579, 37.6577], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'phis',

        }),
        myPlacemark3 = new ymaps.Placemark([55.7575, 37.6243], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'phis',

        }),
        myPlacemark4 = new ymaps.Placemark([55.7569, 37.6100], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'phis',

        }),
        myPlacemark5 = new ymaps.Placemark([55.7611, 37.6405], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'ur',

        }),
        myPlacemark6 = new ymaps.Placemark([ 55.7575, 37.5957], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'ur',

        }),
        myPlacemark7 = new ymaps.Placemark([55.7382, 37.6272], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'ur',
        }),
        myPlacemark8 = new ymaps.Placemark([55.7515, 37.6371], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'ur',

        }),
        myPlacemark9 = new ymaps.Placemark([55.7666, 37.6316], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.svg',
            // Размеры метки.
            iconImageSize: [16, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            id:'ur',

        });


    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeButton');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');


    let visible = new ymaps.GeoObjectCollection();
    let all = new ymaps.GeoObjectCollection({
        properties:{
            id: "all",
            name: 'показать все'
        }
    });
    let phisFace = new ymaps.GeoObjectCollection({
        properties:{
            id: "phis",
            name:'физлицо'
        }
    });
    let urFace = new ymaps.GeoObjectCollection({
        properties:{
            id: "ur",
            name:'юрлицо'
        }
    });
    phisFace
        .add(myPlacemark)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);
    urFace
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9);
    all
        .add(phisFace)
        .add(urFace);
    visible
        .add(phisFace)
        .add(urFace);
    myMap.geoObjects
        .add(visible)

    $('.nav-header').on('click', function (e) {
        $('.nav-header').removeClass('active');
        $(this).addClass('active');
    });

    $('#all').click(function (){
        if ($('#all').hasClass('active')){
            myMap.geoObjects.add(phisFace);
            myMap.geoObjects.add(urFace);
            $('.label-all').addClass('active-tab');
            $('.label-dir').removeClass('active-tab');
            $('.label-phis').removeClass('active-tab');

        }
    });
    $('#ur').click(function (){
        if ($('#ur').hasClass('active')){
            myMap.geoObjects.remove(phisFace);
            myMap.geoObjects.add(urFace);
            $('.label-all').removeClass('active-tab');
            $('.label-phis').removeClass('active-tab');
            $('.label-dir').addClass('active-tab');
        }
    });
    $('#phis').click(function (){
        if ($('#phis').hasClass('active')){
            $('.label-all').removeClass('active-tab');
            $('.label-dir').removeClass('active-tab');
            $('.label-phis').addClass('active-tab');
            myMap.geoObjects.remove(urFace);
            myMap.geoObjects.add(phisFace);
        }  else{
            myMap.geoObjects.add(visible);
        }
    });






});