$(document).ready(function() {
	$(".nav-sidebar li").click(function() {
		$(this).parent().find("li").removeClass("active");
		$(this).addClass("active");

		// De aici poți să faci requesturi către baza de date și o să populezi tabelele cu informația returnată de la DB
	});

	$("button.dropdown-toggle").click(function() {
		console.log("yo");
		$('.dropdown-toggle').dropdown('toggle');
	});

	var helpClicked = false;
	$("#help-button").click(function() {
		$("#modal-help").modal('toggle');
	});

	$(".nav.nav-sidebar a").click(function() {
		console.log("yoyo");
		var id="#"+$(this).attr("id").substring(0, $(this).attr("id").length-2);
		$(".inner.cover").removeClass("show");
		$(".inner.cover").addClass("hide");
		$(".masthead-nav li").removeClass("active");
		$(this).parent().addClass("active");
		$(id).removeClass("hide");
		$(id).addClass("show");
	});

	$(".inner.cover").addClass("hide");
	$("#all").addClass("show");
});