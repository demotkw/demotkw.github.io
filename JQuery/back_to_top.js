jQuery(document).ready(function($){
	$("#scrolltop").click(function(event){
		$("html, body").animate({scrollTop:0},"slow");
	});
});