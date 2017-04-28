	var family = [];
	var server = ["to server:"];
	var number = 0;
	var reduceNumber = 0;
	var filtered = [];

  

	

	var removeFamily = function (){
		filtered = [];
		form = document.getElementById("name-form");
		form.onsubmit = function(e){
		 		e.preventDefault();
			var age = document.getElementsByName("age")[0].value;
	  		var rel = document.getElementsByName("rel")[0].value;
	  		var smoker = (form.smoker.value);
		  		for (var i = 0; i< family.length; i++){
		  			if (family[i].smoker == smoker && family[i].age == age && family[i].relationship == rel){
		  				console.log("match " + i);
		  				document.getElementById(i).remove();
		  				reduceNumber++;
		  			} else {
		  				filtered.push(family[i]);
		  			}
				}
				family = filtered;
				
		}
	};

	var addFamily = function (){
		    form = document.getElementById("name-form");
			 form.onsubmit = function(e){
			 	e.preventDefault();
			     
				var age = document.getElementsByName("age")[0].value;
			  	var rel = document.getElementsByName("rel")[0].value;
			  	var smoker = (form.smoker.value);
				

				 if ( rel != "" && age > 0 && age != ""){
				  	json = {
						"age": age,
						"relationship":rel,
						"smoker":smoker
					};

			
					family.push(json);
				// console.log("william" + family[0].rel);
					
				    var node = document.createElement("LI");
				    node.id = number;
				    var familyMember = JSON.stringify(json);            
					var textnode = document.createTextNode(familyMember);        
					node.appendChild(textnode);                             
					var list = document.getElementsByClassName("household");
					list[0].appendChild(node);  
					number++  
					return family;
				}
			}
	};
	
	function toServer(){
		console.log(filtered);
		if (filtered.length > 0){
			family = filtered;
		}

		var form = document.getElementById("name-form");
		form.onsubmit = function(e){
		e.preventDefault();
		var age = document.getElementsByName("age")[0].value;
	  	var rel = document.getElementsByName("rel")[0].value;
	  	var smoker = (form.smoker.value);
		 if ( rel != "" && age > 0 && age != ""){
			server.push(family);
			console.log(server);
			var familyMember = JSON.stringify(server);
			console.log(familyMember);
			var html = family;
			var show = document.getElementsByClassName("debug");
			show[0].innerHTML = familyMember;
			family = [];
		}
		
		filtered = [];
		var myNode = document.getElementsByClassName("household");
		while (myNode[0].firstChild) {
		    myNode[0].removeChild(myNode[0].firstChild);
		}
		number = 0;
		reduceNumber = 0;
		return server;
		}
		}

		var retrieve = function (){
			var form = document.getElementById("name-form");
			 form.onsubmit = function(e){
			 	e.preventDefault();
			 	number = 0;
			 	family = server[server.length - 1];
			 	server.pop();
			 	console.log(family);
			 	for (var i = 0 ; i< family.length; i++){
			 	var node = document.createElement("LI");
				    node.id = number;
				    var familyMember = JSON.stringify(family[i]);            
					var textnode = document.createTextNode(familyMember);        
					node.appendChild(textnode);                             
					var list = document.getElementsByClassName("household");
					list[0].appendChild(node);  
					number++ 
				}
				console.log(family[0]);
				console.log(family[1]);
				console.log(family[2]);
			} 
		}




	


