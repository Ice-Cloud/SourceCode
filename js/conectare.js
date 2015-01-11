$("#button-ajax").click(function() {
	console.log("Enter Ajax");
	$("ul").remove();
	$.ajax({
		// Request type.
		type: "GET",
		// URL Request
		url: "http://localhost/selectLogDB.php",
		// Data Type specfication otherway strings.
		dataType: "json",
		// Request Done.
		success: function(data) {
			// Create UL for every data.
			for(var i=0; i<data.length; i++) {
				$("body").append("<ul></ul>");
				// Create UL in list.
				for (key in data[i]) {
					$("ul:last-child")
					.append("<li>"+key+": "+data[i][key]+"</li>")
				}
			}
		},
		// Request Fail.
		error: function() {
			alert("fetch error");
		}

	});
	});

		// Submit form.
		$("form#data-form").submit(function() {
			console.log($(this).serialize());
			$.ajax({
				type: "POST",
				url: "http://localhost/insertLogDb.php",

		                //Serialization.
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
		