// Contact Form
function validateForm() { 

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var comments = document.forms["myForm"]["comments"].value;    
    var phone = document.forms["myForm"]["phone"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-danger error_message'>Please enter your name</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-danger error_message'>Please enter your email</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-danger error_message'>Please enter a message</div>";
        fadeIn();
        return false;
    }

	var arr = [];
	arr.push( A5.ajax.buildURLParam('name',name) );
	arr.push( A5.ajax.buildURLParam('email',email) );
	arr.push( A5.ajax.buildURLParam('comments',comments) );
	arr.push( A5.ajax.buildURLParam('phone',phone) );
	var queryString = arr.join('&');

	A5.ajax.callback('contact.a5w', queryString);	

    return false;
}
function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}