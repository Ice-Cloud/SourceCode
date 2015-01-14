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
			document.getElementById("background-picture").setAttribute("style", "background-image: url('img/cover3.jpg'); background-repeat: no-repeat; background-position: center;");
		}

		$(".inner.cover").removeClass("show");
		$(".inner.cover").addClass("hide");
		$(".masthead-nav li").removeClass("active");
		$(this).parent().addClass("active");
		$(id).removeClass("hide");
		$(id).addClass("show");
	});

	$("#send").click(function(){
		if ($('input#checkbox-terms').prop('checked') == false) {
			alert("You didn't read the Terms!");
		}
	});


//Work with DB

	$("#button-ajax").click(function() {
	console.log("yo");
	$("ul").remove();
	$.ajax({
		// Request type.
		type: "GET",
		// URL 
		url: "http://localhost/selectLogDB.php",
		// Data type.
		dataType: "json",
		// Succes
		success: function(data) {
			//create ul with data
			for(var i=0; i<data.length; i++) {
				$("body").append("<ul></ul>");
				// create ul for attribute
				for (key in data[i]) {
					$("ul:last-child")
					.append("<li>"+key+": "+data[i][key]+"</li>")
				}
			}
		},
		// fail
		error: function() {
			alert("Fetch error.");
		}

	});
	});

		//Submit Form.
		$("form#data-form").submit(function() {
			console.log($(this).serialize());
			$.ajax({
				type: "POST",
				url: "http://localhost/insertLogDb.php",

		                //Serialization.
		                data: $(this).serialize(),

		        }).done(function(message) {
		                console.log("succes");
		        	$("input#firstname-field-signup").val("");
		       	 	$("input#lastname-field-signup").val("");
		        	$("input#email-field-signup").val("");
		        	$("input#password-field-signup").val("");
		        	$("input#secretq-field-signup").val("");
		        	$("input#ecretans-field-signup").val("");
	        	
				
			}).fail(function() {
				alert("error");
			});
			
			return false;
		});

		$("button#signInButton").click(function() {
			console.log("aici!");
		$.ajax({
				type: "POST",
				url: "http://localhost/log_in.php",

		        //Serialization.
		        data: $("form#formSignIn").serialize(),

		        }).done(function(message) {
		        		message = JSON.parse(message);
		        		console.log("message");
		                if (message['message'] == "success") {
		                	var username = message['username'];
		    				var userWindow = window.open("dashboard.html", "_self");
		                   	userWindow.name = message['username'] + " " + message['id'];
		                } else {
		                	alert("Incorrect username or password");
		                }
				
    			}).fail(function() {
    				alert("error");
    			});
		});
		
			
});


