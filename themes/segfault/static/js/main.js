$(document).ready(function(){
	$('.customer-logos').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		slidesPerRow: 3,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1
		      }
		    },
	    ]
	});

	$(window).scroll(function() {
		if($('body').hasClass('home')){
		    if ($(this).scrollTop() > 0) {
		        $('#mainNav').css('background', '#1B2D33');
		    }
		    else{
		    	$('#mainNav').css('background', 'transparent');
		    }
		}
	});

	$(document).on('click', 'a[class*="active"]', function (event) {
	    event.preventDefault();

	    $('a.active').removeClass('active');
	    $(this).addClass('active');
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 100
	    }, 500);
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

	$("#closeMenu").click(function(){
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
});