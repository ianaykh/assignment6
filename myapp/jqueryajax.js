$(document).ready(function result() {

    $(document).on("click", ":submit", function(event) {
        alert($(this).val());
        console.log("hi");
        if ($(this).val() != " ") {
            $("#Form").attr("action", "/play/" + $(this).val());
            $("#Form").submit();
        }
    });
    $.ajax({
        url: "/output",
        dataType: "json",
        success: function(data) {
            console.log(data);

            $("#result").empty();
            $("#result").append("<h3> result: " + data.outcome + "</h3>");
            $("#result").append("<h4>Wins:" + data.wins + " &nbsp;&nbsp;  Losses:" +
                data.losses + "&nbsp;&nbsp;  Ties:" + data.ties + "</h4>");
        },
        type: "POST"
    });
});
