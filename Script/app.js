/**
 * Main configuration for sing in page
 */
//Init global variables variables
let sign_in_form = $('#check-submit-form');
//on page load
$(document).ready(function () {
    //forget password on click function
    $('#forgetPassword').click(function (e) {
        //show only required fields
        $('.top_bar').hide();
        $(this).hide();
        $('#password').hide();
        //change the text of button
        $('h1').text('please check your E-mail');
        $('#sing_in_button').text('send verification email');
        $('#backbutton').show();
    });
    //sign up form
    $( "#signUp" ).click(function() {
        $(".overlay-right").hide();
        $(".sign-up-container").show();
    });
    //take data from form
    sign_in_form.submit(function (e) {
        e.preventDefault();
        this.disabled = true;
        let formData = form.serializeArray();
        let status = sendFormData(formData);
        if(status){
            //send to home page
        }
    });
});

/**
 *
 * @return boolean
 * @param data
 */
function sendFormData(data){
    //todo:need to validate data according to requirements
    let status  = false;
    let sendData = {
        "url": "#",//url to send data
        "method": "POST",
        'async': true,
        'success': 'success',
        "timeout": 0,
        "headers": {
            "Content-Type": "text/plain"
        },
        "data": data
    };
    $.ajax(sendData).done(function (response) {
        status = true;
    });
    return status;
}