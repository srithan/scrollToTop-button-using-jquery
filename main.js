/*

Let’s jQuery do the “Abraka Dabra” :

The following jQuery code displays our scroll to top button when the user scrolls the page. If the vertical scrollbar is greater than 100px from the top, scroll to top button will be displayed using jQuery fadeIn() effect which gives a smooth feel to the webpage. We are using jQuery  scrollTop() to get the vertical scrollbar position from the top.


Read full tutorial at http://blog.srithan.me/create-scroll-top-button-using-jquery

*/





$(document).ready(function(){


	/*  
		The following code will display the scroll to top button,  
		once the user has scrolled more than 100px
	*/

	$(window).scroll(function() {

		if( $(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}

	});


	// Let's make it work

	$('.scrollToTop').click(function(event) {

		event.preventDefault();

		$('html,body').animate({scrollTop: 0}, 600);

	});

});
