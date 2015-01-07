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


//LUAREA  si punerea DE DATE DIN/in DB

	$("#button-ajax").click(function() {
	console.log("yo");
	$("ul").remove();
	$.ajax({
		// tipul request-ului
		type: "GET",
		// adresa unde se face reuqest-ul
		url: "http://localhost/rox2.php",
		// se foloseste pentru a identifica tipul datelor (daca nu se specifica datele vor fi preluate ca si String)
		dataType: "json",
		// daca request-ul reuseste 
		success: function(data) {
			// parcurge data, creaza un element <ul> pt fiecare obiect din mesajul json
			for(var i=0; i<data.length; i++) {
				$("body").append("<ul></ul>");
				// creaza u element in lista pentru fiecare atribut al obiectului json 
				for (key in data[i]) {
					$("ul:last-child")
					.append("<li>"+key+": "+data[i][key]+"</li>")
				}
			}
		},
		// daca request-ul nu reuseste
		error: function() {
			alert("fetch error");
		}

	});
	});


		// cand se apasa butonul de submit
		$("form#data-form").submit(function() {
			console.log($(this).serialize());
			$.ajax({
				type: "POST",
				url: "http://localhost/rox_send2.php",

		                //se serializeaza formularul pentru a fi trimis catre server
		                data: $(this).serialize(),

		        }).done(function(message) {
		                console.log("succes");
		        	$("input#name").val("");
		       	 	$("input#age").val("");
		        	$("input#jobtitle").val("");
		        	$("option#manager").val("");
				
			}).fail(function() {
				alert("error");
			});
			
			return false;
		});
			
});


