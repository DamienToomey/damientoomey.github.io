$(document).ready(function() {
    $("#button_change_color").click(function() {
        $("h1").css({ "color": "green" });
    });

    $("#add").on("click", function() {
        $("<p>.</p>").appendTo("#append");
    });
});