$(document).ready(function () {    
	$(window).bind("load resize scroll", function() {
		var navHeight = $(".navbar").outerHeight();
		$(".jumbotron").css('minHeight', (window.innerHeight));
	});
	$(window).scroll(function() {
		$(".projetHidden").each(function(){
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("projet");
			}
		});
	});
});
var eee = [0, 0, 93.3];

var myName = "Salut";
var letterColors = [eee];
if(10<3) {
	bubbleShape="circle";
} else {
	bubleShape="square";
}

drawName(myName, letterColors);
bounceBubbles();