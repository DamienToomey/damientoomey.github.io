$(document).ready(function() {
    $("#button_hello").click(function() {
        $("#h1").css({ "color": "green" });
    });

    $("#add").on("click", function() {
        $("<p>.</p>").appendTo(".content");
    });
});