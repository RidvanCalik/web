var isClick = 0;


$(document).ready(function () {

    $.get("./header.html", function (data) { $("#myHeader").html(data); });

    var searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get('sayfa') == "home" || searchParams.get('sayfa') == "") {
        $.get("./home.html", function (data) { $("#myContent").html(data); });
    } else if (searchParams.get('sayfa') == "projes") {
        $.get("./projes.html", function (data) { $("#myContent").html(data); });
    }
    else if (searchParams.get('sayfa') == "contact") {
        $.get("./contact.html", function (data) { $("#myContent").html(data); });
    } else {
        $.get("./home.html", function (data) { $("#myContent").html(data); });
    }
});


function openCloseMenu() {
    if (isClick == 0) {
        $("#main").css("transform", "scale(0.8,0.8) translateX(-40%)");
        $("#hamburger_menu").text("menu_open");
        isClick = 1;
    } else {
        $("#main").css("transform", "scale(1,1) translateX(0%)");
        $("#hamburger_menu").text("menu");
        isClick = 0;
    }

};





