$(document).ready(function() {
		$(".nav-sidebar li").click(function() {
			$(this).parent().find("li").removeClass("active");
			$(this).addClass("active");

			// Populate DB
			});

		$("button.dropdown-toggle").click(function() {
			console.log("Succes");
			$('.dropdown-toggle').dropdown('toggle');
		});

		var helpClicked = false;

		$("#help-button").click(function() {
			$("#modal-help").modal('toggle');
		});

		$("button#helpbutton1").click(function() {
			$("#modal-help").modal('toggle');
		});


		$(".nav.nav-sidebar a").click(function() {
			console.log("Sucesss Nav");
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

		$("#user_name").text(window.name);

		document.getElementById("uploadBtn").onchange = function () {
    	document.getElementById("uploadFile").value = this.value;
		};

	
		$("#userSettings").click(function() {
		$("#modal-update").modal('toggle');
		});

		var username1 = $("#user_name").text();
		username1 = username1.substring(0, username1.length-2);
		console.log(username1);

		//For update button.
		$("form#data-form").submit(function() {
			console.log($(this).serialize());
			$.ajax({
				type: "POST",
				url: "http://localhost/update.php?id="+username1,

		        //Serialization
		        data: $(this).serialize(),

		        }).done(function(message) {
		                console.log("succes");
		        	$("input#firstnameUpdate").val("");
		       	 	$("input#lastnameUpdate").val("");
		        	$("input#emailUpdate").val("");
		        	$("input#passwordUpdate").val("");	
		        	$('#modal-update').modal('hide')        	
					alert("Update cu succes!");
			}).fail(function() {
				alert("error");
			});
			
			return false;
		});


			//pentru sign out
		/*$("a#signoutButton").click(function (){
   		$.ajax({
				type: "GET",
				url: "http://localhost/destroy_sesion.php",

		        }).done(function(message) {
		                console.log("succes");
			}).fail(function() {
				alert("Goodbye");
			});
			
			return false;
			window.location.href = 'index.html';
		});*/

/*
	$("#uploadBtn").click(function() {
			$("#uploadBtn").click(function() {
					//console.log("yo");
					var fisier = $("#uploadFile");
					//console.log("AICICIIII "+fisier);
					console.log("#uploadFile".value);
				});

				var valoare = document.getElementById("uploadFile").value;
				console.log(valoare);
				document.getElementById("uploadNew").value = valoare;
				//console.log("sdsdsada"+"#uploadNew".value);
				var upPhoto = document.getElementById("uploadNew").value;	
				if 	(upPhoto	== "")	
				{
				console.log("NULL");
				}
				else
				{				
				
				$.ajax({
				type: "POST",
				url: "http://localhost/insertItem.php?q="+upPhoto,
				data: upPhoto,
				contentType: "text/plain",
				 crossDomain: true,			
				 cache: false,
		        }).done(function(message) {
		        		//alert("Done");
						//location.reload();
				
    			}).fail(function() {
    				alert("error");
				});
			}
	}
		});*/
		
		//alert(upPhoto);
		
		function uploadFun()
		{
			var valoare = document.getElementById("uploadFile").value;
			$.ajax({
				type: "POST",
				url: "http://localhost/insertItem.php?q="+valoare,
				data: valoare,
				contentType: "text/plain",
				 crossDomain: true,			
				 cache: false,
		        }).done(function(message) {
		        		//alert("Done");
						location.reload();
				
    			}).fail(function() {
    				alert("error");
				});
			
			
		}

});