$(document).ready(function() {
    $('.owl-carousel').owlCarousel({


        loop: true,
        items: 4,
        lazyLoad: true,

        margin: 5,
        stagePadding: 5,
        responsive: {
            0: {
                items: 1
            },
            485: {
                items: 2
            },
            728: {
                items: 3
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
        document.getElementById("logo").style.fontSize = "50px";
    } else {
        document.getElementById("logo").style.fontSize = "0px";
    }
}