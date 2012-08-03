$(document).ready(function(){
	$("#nav li:not(#search)").hover(
		function(){
			$(this).removeClass();
			$(this).addClass("green");
		},
		function(){
			$(this).removeClass();
			$(this).addClass("brown");
		}
	);
});