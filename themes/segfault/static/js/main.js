
$(document).ready(function(){

	//warsztaty
	$(function() {
		if (window.location.href.indexOf("warszawa2020") > -1) {
		  $.getJSON("https://segfault-reg.herokuapp.com/stats", function(data) {
			$.each(data, function(i, el) {
			  $('#sessionRegs-' + el.title.replace(/[^a-z]/gi, '')).html(el.count)
			})
		  });
		}
	  })


	$(window).scroll(function() {
		// var header = $('#top-header');
		var logo = $('#logo');
		var scroll = $(this).scrollTop();
		if($('body').hasClass('home')) {
		    if (scroll > 0) {
		        $('#mainNav').css('background', '#1B2D33');
		    } else {
		    	$('#mainNav').css('background', 'transparent');
		    }
		}

		if (scroll >= 100) {
			logo.removeClass('invisible').addClass('visible');
		} else {
			logo.removeClass('visible').addClass('invisible');
		}		
	});
/*OLD NAV
	$(document).on('click', 'a[class*="active"]', function (event) {
	    event.preventDefault();

	    $('a.active').removeClass('active');
	    $(this).addClass('active');
	});*/
	
	$(document).on('click', 'a:not(.active)', function (event) {
		   /* event.preventDefault();*/

		    $('a.active').removeClass('active');
		    $(this).addClass('active');
		});
/*OLD NAV
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 100
	    }, 500);
	});*/
	
	$(document).on('click', 'a[href*="#"]', function (event) {			    
		var hrefparts = $(this).attr('href').split("#");

		if (window.location === hrefparts[0]) {
			event.preventDefault();
			var anchorname = hrefparts[hrefparts.length-1];
			window.location.hash = anchorname
			$('html, body').animate({scrollTop: $("#" + anchorname).offset().top}, 500);	
		}
	});

	$("#myToggler").click(function(){
		$('body').addClass('open-menu');
		$("body").animate({
		    left: "-300",
		    right: "300",
		}, 300);
		$("#mainNav").animate({
		    left: "-300",
		    right: "300",
		}, 300);
	});

	$(".nav-link, #closeMenu").click(function(){
		$("body").animate({
		    left: "0",
		    right: "0",
		}, 300, function(){
			$('body').removeClass('open-menu');
		});
		$("#mainNav").animate({
		    left: "0",
		    right: "0",
		}, 300);
	});

/*	function initMap() {
		// The location of Uluru
		var lodz = {lat: 51.759251, lng: 19.4669354};
		// The map, centered at Uluru
		var map = new google.maps.Map(
		  $('#map'), {zoom: 17, center: lodz});
		// The marker, positioned at Uluru
		var marker = new google.maps.Marker({position: lodz, map: map});
	} */


var scrollParam = localStorage.getItem('SCROLLPARAM');
if(scrollParam && $("#" + scrollParam).offset()){
	$('html, body').animate({
		scrollTop: $("#" + scrollParam).offset().top - 100
	}, 500);
	
}
localStorage.SCROLLPARAM=null;
});