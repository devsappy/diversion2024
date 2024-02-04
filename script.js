$(document).ready(function(){
    var isLoginForm = true;

    function toggleForm() {
        isLoginForm = !isLoginForm;

        if (isLoginForm) {
            $("#formTitle").text("Login");
            $("#submitBtn").text("Submit");
            $("#toggleForm").text("Toggle to Sign Up");
            $("#additionalFields").hide();
            $("#signUpBtn").hide(); // Hide the Sign Up button on login form
            $("#login_button").show(); // Show login button group
            $("#signup_button").hide(); // Hide sign-up button group
        } else {
            $("#formTitle").text("Sign Up");
            $("#submitBtn").text("Submit"); // Keep the Submit text for Sign Up
            $("#toggleForm").text("Toggle to Login");
            $("#additionalFields").show();
            $("#signUpBtn").hide(); // Hide the Sign Up button on sign-up form
            $("#login_button").hide(); // Hide login button group
            $("#signup_button").show(); // Show sign-up button group
        }
    }

    $("#toggleForm").click(function(){
        toggleForm();
    });

    $(".input_text").focus(function(){
        $(this).prev('.fa').addClass('glowIcon');
    });

    $(".input_text").focusout(function(){
        $(this).prev('.fa').removeClass('glowIcon');
    });

    $("#submitBtn").click(function() {
        if (isLoginForm) {
            // Your logic for login form submission goes here
            console.log("Login form submitted.");
            window.location.href = "index.html";
        } else {
            // Your logic for sign-up form submission goes here
            console.log("Sign Up form submitted.");
            window.location.href = "index.html";
        }
    });

    $("#signUpBtn").click(function() {
        // Your logic for sign-up button click goes here
        console.log("Sign Up button clicked.");
    });

    $("#submitSignUpBtn").click(function() {
        // Your logic for sign-up form submission goes here
        console.log("Sign Up form submitted.");
    });

    $("#toggleToLogin").click(function() {
        toggleForm();
    });
});
