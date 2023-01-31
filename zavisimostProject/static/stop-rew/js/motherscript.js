$('.sub-button').on('click', function() {
    var currentnav=$(this).closest('li').find('.sub-menu');
    if(!currentnav.is(':visible')){
        currentnav.slideDown();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    } else {
        currentnav.slideUp();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    }
});
$('.sub-element').on('click', function() {
    var currentnav=$(this).closest('li').find('.sub-sub-menu');
    if(!currentnav.is(':visible')){
        currentnav.slideDown();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    } else {
        currentnav.slideUp();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    }
});
$('.sub-icon').on('click', function() {
    var currentnav=$(this).closest('li').find('.subb-menu');
    if(!currentnav.is(':visible')){
        currentnav.slideDown();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    } else {
        currentnav.slideUp();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    }
});
$('.more-btn').on('click', function() {
    var currentnav=$(this).closest('div').find('.sub-more');
    if(!currentnav.is(':visible')){
        currentnav.slideDown();
        var $this = $(this);
        $this.toggleClass('is-active').children('p').toggleClass('is-visible');
    } else {
        currentnav.slideUp();
        var $this = $(this);
        $this.toggleClass('is-active').children('p').toggleClass('is-visible');
    }
});
$('.filial-btn a').on('click', function() {
    var currentnav=$(this).closest('div').find('.filial-more');
    if(!currentnav.is(':visible')){
        currentnav.slideDown();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    } else {
        currentnav.slideUp();
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    }
});
$('.center-slid').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    prevArrow: '<div class="prev-arrow"><img src="/stop-rew/ico/left-arrow-b.svg"></div>',
    nextArrow: '<div class="next-arrow"><img src="/stop-rew/ico/right-arrow-b.svg"></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.centerdiv-slid').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 4,
    prevArrow: '<div class="prev-arrow"><img src="/stop-rew/ico/left-arrow-b.svg"></div>',
    nextArrow: '<div class="next-arrow"><img src="/stop-rew/ico/right-arrow-b.svg"></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.three-slid').slick({
    centerMode: false,
    centerPadding: '60px',
    dots: false,
    slidesToShow: 3,
    prevArrow: '<div class="prev-arrow"><img src="/stop-rew/ico/left-arrow-b.svg"></div>',
    nextArrow: '<div class="next-arrow"><img src="/stop-rew/ico/right-arrow-b.svg"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                dots:true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            dots:true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
});
$('.three-slid-articles').slick({
    centerMode: false,
    centerPadding: '60px',
    dots: false,
    slidesToShow: 3,
    prevArrow: '<div class="prev-arrow"><img src="/stop-rew/ico/left-arrow-b.svg"></div>',
    nextArrow: '<div class="next-arrow"><img src="/stop-rew/ico/right-arrow-b.svg"></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                dots:false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                dots:false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.gallery-clinic').slick({
    centerMode: false,
    centerPadding: '20px',
    dots:true,
    slidesToShow: 1,
    prevArrow: '<div class="prev-arrow"><img src="/stop-rew/ico/left-arrow-b.svg"></div>',
    nextArrow: '<div class="next-arrow"><img src="/stop-rew/ico/right-arrow-b.svg"></div>',
    dots:false

});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    prevArrow: 'none',
    nextArrow: 'none',
    focusOnSelect: true
});
$('.one-slode-owl').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad:true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    dots:false,
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:true
        },
        1000:{
            items:1
        }

    }
});
$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
});
$('.doc-slider-owl').owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    margin: 10,
    lazyLoad: true,
    center: true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }

    }
}).trigger('refresh.owl.carousel');
$('.two-slode-owl').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad: true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:true
        },
        900:{
            items:1,
            nav:true,
            dots:false
        },
        1000:{
            items:2
        }

    }
});
$('.thre-slode-owl').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad: true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:true,
            dots:false
        },
        900:{
            items:2,
            nav:true,
            dots:false
        },
        1000:{
            items:3,
            dots:false
        }

    }
});
$('.thre-slode-owl-nonav').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad: true,
    navText: false,
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:true,
            dots:false
        },
        900:{
            items:2,
            nav:false,
            dots:false
        },
        1000:{
            items:3,
            dots:false,
            nav:false
        }

    }
});
$('.diplom-owl-nonav').owlCarousel({loop:true, autoWidth:true, margin:30,nav:true,lazyLoad: true,navText: false,autoplay:false,responsive:{0:{items:1,nav:false,dots:false},900:{items:2,nav:false,dots:false},1000:{items:3,dots:false,nav:false}}}).trigger('refresh.owl.carousel');
$('.diplomlitc-owl-nonav').owlCarousel({loop:true, autoWidth:true, margin:30,nav:true,lazyLoad: true,navText: false,autoplay:false,responsive:{0:{items:1,nav:false,dots:false},900:{items:2,nav:false,dots:false},1000:{items:5,dots:false,nav:false}}}).trigger('refresh.owl.carousel');
$('.four-slode-owl').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad: true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:1,
            nav:true,
            dots:false
        },
        900:{
            items:2,
            nav:true,
            dots:false
        },
        1000:{
            items:4,
            nav:true,
            dots:false
        }

    }
});
$('.four-slode-owl-big').owlCarousel({
    loop:false, //Р—Р°С†РёРєР»РёРІР°РµРј СЃР»Р°Р№РґРµСЂ
    margin:30, //РћС‚СЃС‚СѓРї РѕС‚ СЌР»РµРјРµРЅС‚Р° СЃРїСЂР°РІР° РІ 50px
    nav:true, //РћС‚РєР»СЋС‡РµРЅРёРµ РЅР°РІРёРіР°С†РёРё
    lazyLoad: true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    autoplay:false, //РђРІС‚РѕР·Р°РїСѓСЃРє СЃР»Р°Р№РґРµСЂР°
    responsive:{ //РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ. РљРѕР»-РІРѕ РІС‹РІРѕРґРёРјС‹С… СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ С€РёСЂРёРЅРµ.
        0:{
            items:2,
            nav:true,
            dots:false
        },
        900:{
            items:3,
            nav:true,
            dots:false
        },
        1000:{
            items:4,
            nav:true,
            dots:false
        }

    }
});
$(".owl-multi").each(function(){
    $(this).owlCarousel({
        loop:true,
        margin:30,
        merge:true,
        center: true,
        lazyLoad:true,
        nav:true,
        navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });
$(function(){
    $('.some_link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
        e.preventDefault();
    });
});




// С‚РµСЃС‚ РЅРѕРІРѕРіРѕ СЃР»Р°Р№РґРµСЂР°


var owl = $('.owl-carousel-2');
owl.owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    navText: ['<div class="prev-owl"><picture><img loading="lazy" src="/stop-rew/ico/left-arrow-b.svg" alt="РџСЂРµРґС‹РґСѓС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° РїСЂРµРґРёРґСѓС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"><picture></div>','<div class="next-owl"><picture><img loading="lazy" src="/stop-rew/ico/right-arrow-b.svg" alt="РЎР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" title="РџРµСЂРµРєР»СЋС‡РёС‚СЊ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ" style="width: 38px;height: 38px;"></picture></div>'],
    lazyLoad:true,
    autoplay: false,
    autoplaySpeed: 800,
      items : 1, // IMPORTANT
      responsive : {
        480 : { items : 1  },
        800 : { items : 1  },
        1024 : { items : 1 }
      }
});
// Function for detect center item FOR 3 ITEMS (Change i==1) for your element
// Р¤СѓРЅРєС†РёСЏ РґР»СЏ РѕРїСЂРµРґРµР»РµРЅРёСЏ С†РµРЅС‚СЂР°Р»СЊРЅРѕРіРѕ СЌР»РµРјРµРЅС‚Р°. Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ РґР»СЏ 3-С… СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё СЃР»Р°Р№РґРµСЂР°.
// РР·РјРµРЅРёС‚Рµ РєРѕР»РёС‡РµСЃС‚РІРѕ РІ "i==1",
// РґРѕ РЅСѓР¶РЅРѕРіРѕ РІР°Рј РєРѕР»РёС‡РµСЃС‚РІР°, С‡С‚РѕР±С‹ С‚РѕС‡РЅРѕ РѕРїСЂРµРґРµР»СЏС‚СЊ С†РµРЅС‚СЂР°Р»СЊРЅС‹Р№ СЌР»РµРјРµРЅС‚.
function set_owl_center() {
    owl.find( ".active" ).removeClass('owl-center');
    setTimeout(function(){
      owl.find( ".active" ).each(function( i ) {
        if(i==1) $(this).addClass('owl-center');
      });
    }, 80);
}
set_owl_center(); // Init center
owl.on('changed.owl.carousel', function(event) {set_owl_center();}) // On changes
$('.toggle').click(function(e) {
    e.preventDefault();
                var $this = $(this);
                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
    } else {
                    $this.parent().parent().find('li .inner').removeClass('show');
                    $this.parent().parent().find('li .inner').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);
    }
});


//

         setTimeout(() => {
            $(function() {
                var $menu_popup = $('.menu-popup');

                $(".menu-triger").click(function(){
                    $('body').addClass('body_pointer');
                    $menu_popup.show(0);
                    $menu_popup.animate(
                        {right: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0},
                        300
                    );
                    return false;
                });

                $(".menu-close").click(function(){
                    $('body').removeClass('body_pointer');
                    $menu_popup.animate(
                        {right: parseInt($menu_popup.css('right'),10) == 0 ? -$menu_popup.outerWidth() : 0},
                        300,
                        function(){
                            $menu_popup.hide(0);
                        }
                    );
                    return false;
                });

                $(document).on('click', function(e){
                    if (!$(e.target).closest('.menu-popup').length){
                        $('body').removeClass('body_pointer');
                        $menu_popup.animate(
                            {right: parseInt($menu_popup.css('right'),10) == 0 ? -$menu_popup.outerWidth() : 0},
                            300,
                            function(){
                                $menu_popup.hide(0);
                            }
                        );
                    }
                });
            });
            }, 2500);

             setTimeout(() => {
            function burgerMenu(selector) {
            let menu = $(selector);
            let button = menu.find('.burger-menu_button', '.burger-menu_lines');
            let links = menu.find('.burger-menu_link');
            let overlay = menu.find('.burger-menu_overlay');

            button.on('click', (e) => {
                e.preventDefault();
                    toggleMenu();
                });

                links.on('click', () => toggleMenu());
                overlay.on('click', () => toggleMenu());

                function toggleMenu(){
                    menu.toggleClass('burger-menu_active');

                    if (menu.hasClass('burger-menu_active')) {
                        $('body').css('overlow', 'hidden');
                    } else {
                        $('body').css('overlow', 'visible');
                    }
                }
            }

            burgerMenu('.burger-menu');
        }, 2500);

         setTimeout(() => {
        $(document).ready(function(){

            $(window).scroll(function () {
                if ($(this).scrollTop() > 0) {
                    $('#scroller').fadeIn();
                } else {
                    $('#scroller').fadeOut();
                }
            });
            $('#scroller').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
            $.fn.setCursorPosition = function(pos) {
              if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
              } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
              }
            };

        });

        }, 2500);

        setTimeout(() => {
            jQuery(function($) {
                $("input[name='f_phone']").click(function(){
                $(this).setCursorPosition(3);
            }).mask("+7(999) 999-9999");
                $("input[name='f_phone']").mask("+7(999) 999-9999");
            });
        }, 2600);