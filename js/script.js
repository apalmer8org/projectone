function init(){

	document.getElementById("submit").addEventListener("click", function()
	{
		var output = "Thank you for subscribing to the Gaming News Network. Be sure to check your email for offers and more.";
		alert(output);
	});

}
window.addEventListener('load', init);

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
