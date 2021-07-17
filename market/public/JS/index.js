let searchParams = new URLSearchParams(window.location.searc);


$.get('./header.html', function (data) {
    $('#header').html(data);
});
$.get('./home.html', function (data) {
    $('#main').html(data);
}).then(function () {
    new Swiper('.swiper-container', {

        autoplay: {
            delay: 4000,
        },
        spaceBetween: 30,
        loop: true,


    });
});

