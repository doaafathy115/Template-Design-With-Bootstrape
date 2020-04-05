/* global $ , jQuerr , alert*/

$(document).ready(function(){

	"use strict";

	//Nice scroll

	$("html").niceScroll();

	$('.carousel').carousel({
		interval:6000
	});

	//Class On Navbar When Scroll

	$(window).scroll(function(){
		var navbar = $('.navbar');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled'))   //check if navbar has class 
				navbar.addClass('scrolled')
		} else{
			navbar.removeClass('scrolled')
		}
	});
	
	//Show Color Option Div When Click On The Gear

	$(".fa-cog").click(function(){
		$(".color-option").fadeToggle();
	});

	//Change Theme Color On Click

	var colorLi = $('.color-option ul li');
	colorLi
	.eq(0).css('backgroundColor','#E41b17').end()
	.eq(1).css('backgroundColor','#0895D1').end()
	.eq(2).css('backgroundColor','#179819').end()
	.eq(3).css('backgroundColor','#ba06ec');

	colorLi.click(function(){
		$('link[href*="theme"]').attr('href',$(this).data("value"));;
	});

	//Loading Screen

	$(window).load(function(){
		"use strict";
		$('.loading-overlay .spinner').fadeOut(2000,
			function()
			{
				$(this).parent ().fadeOut(2000,
					function()
					{
						$(this).remove();
				    });
			});
	});

	//Scroll To Top

	var scrollButton = $('.scroll-top');
	$(window).scroll(function(){
		$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide(); 
	});

	//Click On Button To Scroll Top

	scrollButton.click(function(){
		$('html,body').animate({scrollTop : 0},600);
	});
});
