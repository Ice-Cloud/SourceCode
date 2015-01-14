var rootFolder = "";
	var name = window.name; //username id
	var username = name.substring(0, name.indexOf(" "));
	var userid = name.substring(name.indexOf(" ")+1);
	$("#user_name").text(username);
	console.log(userid);

	$("#user_name").text(username);
	
var imagesVector = [""];

$.ajax({
		type: "GET",
		url: "http://localhost/uploadPhoto.php?id="+userid,
		dataType: "json",
		success: function(data) {
		
		    // {images : Array[3454], message: "success"}
			var valueKey = "";
		    console.log(data);
			for (var i=0; i<data['images'].length;i++) {
				var valueKey = data['images'][i];
				imagesVector[i]=valueKey;
			//	alert(valueKey);
				$("#image-list").append(
				"<tr id='tabrow'><td><img src='"+rootFolder+data['images'][i]+"' style='width:100px;height:100px; href='data['images'];' target='_blank''></img></td><td><a href='"+rootFolder+data['images'][i]+"'>"+data['images'][i]+"</a></td><td id='deleteElem' key="+data['images'][i]+" onclick='deleteItem("+i+")' ><img id='deleteImg' src='img/delete.png' style='width:20px;'></img></td></tr>");
			}
		},
		error: function() {
			alert("error");
		}
	});
	
	
	/*
	var delElem=document.getElementById("tabrow");
	delElem.onclick=function(){alert(this.innerHTML);};
	
	document.getElementById("deleteElem").onclick = function() {
        alert("Works");};
	*/
	/*
	
	$("deleteElem").each(function(index){
		$(this).on("click", function(){
		deleteee($(this)[0]);
		});
	});
	
	function deleteee(e){
	alert(e);
	}
	*/
	
	
	function deleteItem(key){
	//alert(key);
	//alert(imagesVector[key]);
	var photoId = imagesVector[key];
	$.ajax({
				type: "POST",
				url: "http://localhost/deleteItem.php?q="+photoId,
				data: photoId,
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
	
	
	/*
	function deleteItem(key){
	
		var photoId= imagesVector[key];
		var xmlhttp = new XMLHttpRequest();
        alert(imagesVector[key]);
        xmlhttp.open("GET", "deleteItem.php?q=" + photoId, true);
        xmlhttp.send();
	}*/
	
	/*
	function deleteItem(key){
	//alert(key);
	//alert(imagesVector[key]);
	var photoId = imagesVector[key];
	alert("P:"+photoId);
	var xmlhttp = new XMLHttpRequest();
        alert(imagesVector[key]);
        xmlhttp.open("GET", "delete.asp?q=" + photoId, true);
        xmlhttp.send();
		
	}*/