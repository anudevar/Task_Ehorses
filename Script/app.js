$( document ).ready(function() {
    $(".sign-up-container").hide();
    $( "#signUp" ).click(function() {
        $(".overlay-right").hide();
        $(".sign-up").show();
    });
});
