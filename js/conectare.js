$("#button-ajax").click(function() {
	console.log("yo");
	$("ul").remove();
	$.ajax({
		// tipul request-ului
		type: "GET",
		// adresa unde se face reuqest-ul
		url: "http://localhost/rox.php",
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
				url: "http://localhost/rox_send.php",

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
			