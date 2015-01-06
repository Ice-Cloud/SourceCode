//aici folosim!

$(document).ready(function() {
	var loginClicked = false;
	$("#login").click(function() {
		$("#modal").modal('toggle');
	});

	var loginClicked = false;
	$("#signup").click(function() {
		$("#modal-signup").modal('toggle');
	});

	$(".nav.masthead-nav a").click(function() {
		var id="#"+$(this).attr("id").substring(0, $(this).attr("id").length-2);

		if ((id == "#contact")|| (id == "#about")){
			$("#background-picture").removeAttr("style");
		}
		else {
			document.getElementById("background-picture").setAttribute("style", "background-image: url('img/cloud.png'); background-repeat: no-repeat; background-position: center;");
		}

		$(".inner.cover").removeClass("show");
		$(".inner.cover").addClass("hide");
		$(".masthead-nav li").removeClass("active");
		$(this).parent().addClass("active");
		$(id).removeClass("hide");
		$(id).addClass("show");
	});

	$("#signup2").click(function(){
		if ($('input#checkbox-terms').prop('checked') == false) {
			alert("Nu ai citit!");
		}
	});
	
});


