function Redirect() {
	//Get the answer from the html input
	var answer = document.getElementById("answer").value;
	
	//Starting the If/Else Statement to access the website
	if (answer >= 6.02 && answer <= 6.02) { 
		window.location.href = "yes.html"; 
	}
	else { 
		window.location.href = "no.html";
	}	
}