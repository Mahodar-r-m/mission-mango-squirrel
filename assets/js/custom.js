$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. slick carousel
3. welcome animation support
4. feather icon
5. counter
6. post days counter
7. Deadline counter
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
				$('#share-button').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
				$('#share-button').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. slick carousel

	    $(".testimonial-carousel").slick({
	        infinite: true,
	        centerMode: true,
	        autoplay:true,
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        autoplaySpeed:1500,
	        // the magic
			responsive: [
				{

					breakpoint:1440,
					settings: {
					slidesToShow:3
					}

				},
				{

					breakpoint: 1024,
					settings: {
					slidesToShow:2,
					
					}

				}, 
				{

					breakpoint:991,
					settings: {
					slidesToShow:2,
					centerMode:false,
					}

				},
				{

					breakpoint:767,
					settings: {
					slidesToShow:1,
					}

				}
			]
	    });



    // 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 4. feather icon

		feather.replace();

	// 5. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		});

	// 6. post days counter
	function calculatePostDays(startDate, endDate) {
		const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
	  
		// Convert the start and end dates to milliseconds
		const startDateInMs = startDate.getTime();
		const endDateInMs = endDate.getTime();
	  
		// Calculate the difference in milliseconds between the two dates
		// const differenceInMs = endDateInMs - startDateInMs - oneDay;
		const differenceInMs = endDateInMs - startDateInMs;
	  
		// Calculate the number of days between the two dates
		const days = Math.floor(differenceInMs / oneDay);
	  
		// Return the number of days
		return days;
	}
	
	// Example usage:
	
	const startDate = new Date("2024-04-12");
	const endDate = new Date();
	
	const days = calculatePostDays(startDate, endDate);
	document.getElementById('post_days').innerHTML = `${days} ${days === 1 ? 'day' : 'days'} ago`
	// console.log(days); // 3

	// 7. Deadline counter
	function updateTimer() {
		const future = Date.parse("May 31, 2024 23:59:59");
		const now = new Date();
		const diff = future - now;
	  
		const days  = Math.floor( diff / (1000*60*60*24) );
		const hours = Math.floor( diff / (1000*60*60) );
		const mins  = Math.floor( diff / (1000*60) );
		const secs  = Math.floor( diff / 1000 );
	  
		const d = days;
		const h = hours - days  * 24;
		const m = mins  - hours * 60;
		const s = secs  - mins  * 60;
	  
		document.getElementById("timer")
		  .innerHTML =
			'<div>' + d + '<span>days</span></div>' +
			'<div>' + h + '<span>hours</span></div>' +
			'<div>' + m + '<span>minutes</span></div>' +
			'<div>' + s + '<span>seconds</span></div>' ;
	  }
	//   setInterval('updateTimer()', 1000 );
	setInterval(() => {
		updateTimer();
	}, 1000);	  
});