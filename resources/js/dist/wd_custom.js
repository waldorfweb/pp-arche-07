$(function() {

});

//require(['jQuery'], function ($) {
//$(document).ready(function(){
$(window).on("load", function() {
    //$().ready(function(){

    //$('.brand-wrapper').append('<a href="https://www.instagram.com/arche_naturkueche/" target="_blank" class="instagram"><img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/Instagram_font_awesome.png" alt="Instagram" width="23" height="23"></a>');

    $('.footerpayment').prepend('<hr>');
    //$('.footerpayment').append('<hr class="lasthr">');

    $('.textrow_color01').wrap('<div class="widget-full-width textrow_color01_wrapper"></div>');


    $(window).on("scroll touchmove", function() {
        //$("body").addClass("touched-fixed");
        if ($(document).scrollTop() <= $("body").position().top - 0) {
            console.log('add fixed class');
            $("body").removeClass("fixed");

        } else {
            console.log('remove fixed class');
            $("body").addClass("fixed");
            $("body").addClass("touched-fixed");
        }

    });

    $("body").removeClass("fixed");
    //remove canonical tag
    //$(".cano").removeClass("cano");
    $(".search-input ").attr("placeholder", "Suche");

    if ($("body").hasClass("item-10000621")) {
        //alert('test3');
        //alert('test4');

    }

    $('.normalmenu .level2').each(function() {
        $(this).siblings(".level1").addClass('navpfeil');
    });
    $('.megamenu .level1').each(function() {
        $(this).siblings(".level2").addClass('navpfeil');
    });
    $('.megamenu .level2').each(function() {
        $(this).siblings(".level2").addClass('navpfeil');
    });


    $('.page-singleitem .widget_badge .badge span').css('display', 'none');
    $('.page-singleitem .widget_badge .badge span').each(function() {

        if ($(this).text() == 'Bio') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio-EU-Siegel.jpg" alt="Bio">');
        }
        if ($(this).text() == 'Bio-Siegel') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Bilddatenbank/Grafiken/Piktogramme/2021/Bio-EU-Siegel.jpg" alt="Bio-Siegel">');
        }
        if ($(this).text() == 'Vegan') {
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE-Vegan-Logo.png" alt="Vegan">');
        }
        if ($(this).text() == 'Glutenfrei') {
            console.log('Spielgut');
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE_Gluten_free_Symbol_3.png" alt="Glutenfrei">');
        }
        if ($(this).text() == 'Ecofriednly') {
            console.log('Ecofriednly');
            $(this).css('display', 'block');
            $(this).html('<img src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Arche/Icons/ARCHE-ecofriendly-Siegel-3.png" alt="Ecofriednly">');
        }
    });


    //Tooltip Varianten Farben
    // $('.v-s-box img').attr('title', function() {
    //     if (!this.title) {
    //         return this.alt;
    //     }
    // });
    //$("#close-nb").click(function(){
    //  $("#notificationbar").hide();
    //});

    //$('.top-bar.wd_search #notificationbar').remove();




















    if ($(".single_herstellerlogo .widget-inner img").length) {
        $(".single_herstellerlogo").show();
    } else {
        $(".single_herstellerlogo").hide();
    }




    // $(".widget_crosselling_aehnlich .widget-inner:empty").parent().hide();
    // $(".widget_crosselling_zubehoer .widget-inner:empty").parent().hide();
    // $('.widget_crosselling_zubehoer .widget-caption div p').wrapInner('<span class="wd-topseller"></span>');
    // $('.widget_crosselling_aehnlich .widget-caption div p').wrapInner('<span class="wd-topseller"></span>');


    //Kategorie Beschreibung



    //Login Passwort Hinweis
    //$(".modal-title, .login-view-title").append("<div class='passworthinweis'>Liebe Kunden, wie Sie vielleicht bermerkt haben ist unser neuer Webshop da. Daher müssen wir Sie leider bitten ein neues Passwort mit der Funktion \"Passwort vergessen\" zu vergeben. </div>");


    //Widget Startseite

    $('.widget_box_moebel').prepend('<div class="special-tags"><span class="badge badge-offer badge-danger">-20% auf Artikel von Livipur</span></div>');

    $('.page-home .widget_katalog article').wrap('<div class="owl-item"></div>');



    /// is in Viewport ende


    //Über Uns Sub-Navigation



    // Search
    //$(".wd_search .search-shown").prepend('<div class="wd_logo"><a href="/" title="Arche.eu" alt="waldorfshop.eu"><img alt="Arche" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/logo.svg"></a></div>');
    //$('#page-header-parent .page-header').wrapInner('<div class="wd_searchbar"></div>');




    $(".upperpaginationinner").last().css("margin-bottom", "40px");

    $('.widget-image-carousel').wrapInner('<div class="svgform"></div>');
    //$('.widget_baby').wrapInner('<div class="svgform_widget"></div>');
    $('.modFooterBox').wrapInner('<div class="svgformfooter"></div>');
    //KontaktLink
    $('a[href="/contact"]').attr('href', '/kontakt/');



    //Crosselling und Topseller
    $('.widget_crosselling .widget-caption > div > p').wrapInner('<span style="color:#302e2f"></span>');
    $('.widget_topseller .widget-caption > div > p').wrapInner('<span class="wd-topseller"></span>');
    //$(".page-home .wd-topseller").replaceWith($(".wd-topseller").contents());
    $(".widget_topseller .crossprice").each(function() {
        var text = $(this).text();
        text = text.replace("UVP", "");
        $(this).text(text);
    });





    //Kategorie Sidebar


    if ($(window).width() < 576) {
        //alert('mobile');
        $('.sidebar-categories').prepend('<p><button class="btn btn-primary sidebar-categories-mobile-btn" type="button" data-toggle="collapse" data-target="#Subkatmenu" aria-expanded="false" aria-controls="collapseExample">Kategorien <i aria-hidden="true" class="fa fa-caret-down sidebar-categories-mobile-i" style="color:white !Important;float: right !important; margin-top: 12px !important;"></i></button></p>');
        $('.sidebar-categories .widget-inner').wrap('<div class="collapse" id="Subkatmenu"><div class="card card-body"></div></div>');
        $('.sidebar-categories').append('');

    } else {
        //$('#referenzdetail .et_pb_column_1_4').removeClass('police');
    }


    if ($(".nav-item").hasClass("active")) {
        $(".sidebar-categories .active > a").addClass("activeinner");
        //$(".");
    } else {
        $(".sidebar-categories .active > a").removeClass("activeinner");
    }

    //Menü Selected Entry
    $('.mainmenu a').each(function() {
        var ThisHref = ($(this).attr('href').split('?'))[0];
        if (window.location.href.indexOf(ThisHref) > -1) {
            $(this).addClass('selected');
        }
    });




    // Landing Pages




    //Bug Workaround externer Blog - Owl Carousel Neuheiten Bilder werden nicht geladen

    // $(".page-home .owl-carousel .carousel-control.right .owl-single-item-control").click(function() {
    //     $("html, body").animate({
    //         scrollTop: ($(window).scrollTop() + 1)
    //     });
    //     //alert('>');
    // });
    // $(".page-home .owl-single-item-control.right").click(function() {
    //     $("html, body").animate({
    //         scrollTop: ($(window).scrollTop() + 1)
    //     });

    // });

    // Blog Button Ideenforum
    // $('.widget_button_ideenforum a').addClass('btn btn-primary');

});
//});

// Document Ready End

//load extern Blog from WP

$(window).on('load', function() {

    //$(".blog-extern-iframe").load("https://blog.waldorfshop.eu/blog-extern");

    //$(".widget_slider_new").load("https://slider.waldorfshop.eu/startseite_waldorfshop.php", function() {
    //     		$(".widget_slider_new").load("https://slider.waldorfshop.eu/startseite_waldorfshop.php", function(slider) {
    //     				slider.stopPropagation()
    //    if ($(this).height() > 100) {

    //    }
    //});
    //return false;

    // if ($(window).width() > 576) {
    //     //alert('mobile');
    // } else {}

    // $(".blog-extern-iframe").load("https://blog.waldorfshop.eu/blog-extern", function() {
    //     if ($(this).height() > 100) {
    //         $(".et_pb_image_container .be_img").prepend('.entry-title');
    //         $(".entry-title").insertBefore('.et_pb_image_container .be_img');
    //     }
    // });
    // return false;


});

//load extern Blog from WP end




$(function() {

    // $(".mainmenu li a").each(function() {
    //     if ($(this).attr("href") == window.location.pathname) {
    //         $(this).parent().parent().parent().addClass("selected");
    //     }
    // });

});



// scroll to anchor fix

$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 240
            // 100 is the sticky nav height
    }, 500);
});