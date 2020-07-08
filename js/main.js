/*  ---------------------------------------------------
    Template Name: Violet 
    Description: Violet ecommerce Html Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
		    Product filter
	    --------------------*/
        if ($('#product-list').length > 0) {
            var containerEl = document.querySelector('#product-list');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        appendTo: '.header-section',
        allowParentLinks: true,
        closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
    });

    /*------------------
		Search model
	--------------------*/
	$('.search-trigger').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
    });
    
   /*------------------
		Show header dropdown
	--------------------*/
    $('.js-show-header-dropdown').on('click', function(){
        console.log('click');
        $(this).parent().find('.header-dropdown')
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){ 
            
            if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = -1;
            }
            else {
                for (var i = 0; i < menu.length; i++) {
                    $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                }

                $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                sub_menu_is_showed = jQuery.inArray( this, menu );
            }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });

    /*------------------
        Carousel Slider
    --------------------*/
     $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoplayHoverPause: true,
        mouseDrag: false,
        autoplay: false,
    });

    /*------------------
        Carousel Slider
    --------------------*/
    $(".logo-items").owlCarousel({
        loop: true,
		nav: false,
		dots: false,
		margin : 40,
		autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });


    /*------------------
        Carousel Slider
    --------------------*/
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });
    

    /*------------------
        Magnific Popup
    --------------------*/
    $('.pop-up').magnificPopup({
        type: 'image'
    });

    /*-------------------
		Sort Select
	--------------------- */
    $('.sort').niceSelect();

    /*-------------------
		Cart Select
	--------------------- */
    $('.cart-select').niceSelect();

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*-------------------
    Radio Btn
	--------------------- */
    // $(".shipping-info .cs-item label").on('click', function () {
    //     $(".shipping-info .cs-item label").removeClass('active');
    //     $(this).addClass('active');
    // });

    $(".checkout-form .diff-addr label").on('click', function () {
        $(this).toggleClass('active');
    });
    
    $(".payment-method ul li label").on('click', function () {
        $(this).toggleClass('active');
    });
    
    /*-------------------
        Pin Code Input
    --------------------- */
    $("#pin-form input").on('keyup', function (e) {
        var key = e.which,
          t = $(e.target),
          sib = t.next('input');
    
        if (key != 9 && (key < 48 || key > 57)) {
          e.preventDefault();
          return false;
        }
    
        if (key === 9) {
          return true;
        }
    
        sib.select().focus();
    });

    $("#pin-form input").on('keydown', function (e) {
        var key = e.which;
    
        if (key === 9 || (key >= 48 && key <= 57)) {
          return true;
        }
    
        e.preventDefault();
        return false;
    });

    $("#pin-form input").on('click', function (e) {
        $(e.target).select();
    });

})(jQuery);