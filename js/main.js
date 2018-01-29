// ====header-menu====
//-- hien nav--///
function openNav() {
    $('#mySidenav').css({ transform: 'translateX(0)' });
    $('#mySidenav').css({ transition: 'all 0.5s' });
    // document.body.style.overflow = "hidden";
    $(document).ready(function() {
        $('#rotation').addClass('rotation');
        $('#rotation').removeClass('rotation_backwards');
    });
}
//--an nav--//
function closeNav() {
    $('#mySidenav').css({ transform: 'translateX(-250px)' });
    $('#mySidenav').css({ transition: 'all 0.5s' });
    // document.getElementById("main_page").style.marginLeft= "0";
    // document.getElementById("main_page").style.transition = "all 0.5s";
    //  document.getElementById("main_page").style.backgroundColor = "#fff";
    document.body.style.overflow = "visible";
    $(document).ready(function() {
        $('#rotation').addClass(' rotation_backwards');
        $('#rotation').removeClass('rotation');
    });
}
//--tat su kien  khi click vao sidenav--// 
$(document).ready(function() {
    $(".icon-bar").click(function(event) {
        event.stopPropagation();
        openNav();
        $('#ovelay').addClass('ovelay');
    });
    $("#mySidenav").click(function(event) {
        event.stopPropagation();
    });
    $("body").click(function(event) {
        closeNav();
        $('#ovelay').removeClass('ovelay');
    });
});

$(document).ready(function() {
    //--Them nut button--// 
    var x = $(".sidenav ul li").find("ul");
    if (x.length != 0) {
        x.before('<button class="accordion_2"></button>')

    }
    //--accordition--// 
    var acc_2 = document.getElementsByClassName("accordion_2");
    var j;

    for (j = 0; j < acc_2.length; j++) {
        acc_2[j].onclick = function() {
            this.classList.toggle("active");
            var sub_item_2 = this.nextElementSibling;
            if (sub_item_2.style.maxHeight) {
                sub_item_2.style.maxHeight = null;
            } else {
                sub_item_2.style.maxHeight = sub_item_2.scrollHeight + "px";
            }
        }
    }
});
// ====end.header-menu====
$('.owl-mainTop').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa  fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    })
    //============
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});