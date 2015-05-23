$(document).ready( function() {
	 $("#submit").click(function(){
	 	if($("#name-input").val().trim()=="")
	 		alert("Name cannot be empty.");

	 	if($("#email-input").val().trim()=="")
	 		alert("Email cannot be empty.");

	 	if(validateEmail($("#email-input").val())==false)
	 		alert("Invalid email!");

	 	if($("#phone-input").val().trim()=="")
	 		alert("Phone cannot be empty.");

	 	if(validatePhone($("#phone-input").val())==false)
	 		alert("Invalid phone!");

	 }); 

	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	function validatePhone(phone) {
		var re = /^(\d|\d |\d,|\d, |\d ,|\d , )+$/i;
		return re.test(phone);
	}
});