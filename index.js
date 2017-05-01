
	var family = [];
	var server = ["to server:"];
	var number = 0;
	var reduceNumber = 0;
	var filtered = [];

  	var style = document.getElementsByTagName('style')[0].innerHTML=".debug {font-family: monospace;border: 1px solid black;padding: 10px;overflow:auto;}";
  	var form = document.getElementsByTagName('form')[0].setAttribute("id", "name-form");
  	var inputAge = document.getElementsByTagName('input')[0].setAttribute("type", "number");
	var inputSmoker = document.getElementsByTagName('input')[1].setAttribute("type", "radio");
	document.getElementsByTagName('input')[1].setAttribute("name", "smoker");
	document.getElementsByTagName('input')[1].value = "smoker";
	var divSmoker = document.getElementsByTagName('div')[3];
	var labelNonsmoker = document.createElement('label');
	labelNonsmoker.innerHTML = "Nonsmoker?";
	var inputNonsmoker = document.createElement('input');
	labelNonsmoker.appendChild(inputNonsmoker);
	divSmoker.appendChild(labelNonsmoker);
	document.getElementsByTagName('input')[2].setAttribute("type", "radio");
	document.getElementsByTagName('input')[2].setAttribute("name", "smoker");
	document.getElementsByTagName('input')[2].value = "nonsmoker";
	var addButton = document.getElementsByTagName('button')[0];
	addButton.onclick = function (){
		form = document.getElementById("name-form");
			 form.onsubmit = function(e){
			 	e.preventDefault();
			     
				var age = document.getElementsByName("age")[0].value;
			  	var rel = document.getElementsByName("rel")[0].value;
			  	var smoker = (form.smoker.value);
				

				 if ( rel !== "" && age > 0 && age !== ""){
				  	json = {
						"age": age,
						"relationship":rel,
						"smoker":smoker
					};

			
					family.push(json);	
				    var node = document.createElement("LI");
				    node.id = number;
				    var familyMember = JSON.stringify(json);            
					var textnode = document.createTextNode(familyMember);        
					node.appendChild(textnode);                             
					var list = document.getElementsByClassName("household");
					list[0].appendChild(node);  
					number++;  
					return family;
				}
			};
	};

	var deleteButton = document.createElement('button');
	var addRemove = document.getElementsByTagName('div')[4];
	addRemove.appendChild(deleteButton);
	document.getElementsByTagName('button')[1].setAttribute("class", "remove");
	document.getElementsByTagName('button')[1].innerHTML = "remove";
	var deletePerson = document.getElementsByTagName('button')[1];
	deletePerson.onclick = function () {
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
				
		};
	};

	var submitButton = document.getElementsByTagName('button')[2];
	submitButton.onclick = function (){
			console.log(filtered);
		if (filtered.length > 0){
			family = filtered;
		}
		console.log(family);
		var form = document.getElementById("name-form");
		form.onsubmit = function(e){
		e.preventDefault();
		var age = document.getElementsByName("age")[0].value;
	  	var rel = document.getElementsByName("rel")[0].value;
	  	var smoker = (form.smoker.value);
		 if ( rel !== "" && age > 0 && age !== ""){
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
		};
	};

	var retrieveButton = document.createElement('button');
	var serverDiv = document.getElementsByTagName('div')[5];
	serverDiv.appendChild(retrieveButton);
	retrieveButtonText = document.getElementsByTagName('button')[3].innerHTML = "retrieve last";
	retrieveButton.onclick = function () {
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
			} 
		};


	