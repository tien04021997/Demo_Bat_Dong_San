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
        navText: ['', ''],
        responsiveClass: true,
        dots: false,
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
// 
$(document).ready(function() {
        // Add smooth scrolling to all links in navbar + footer link
        $(".header .menu-desktop .menu ul li a, footer a[href='#myPage']").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });


    })
    // Add smooth scrolling to all links in navbar + footer link
$("header .menu-desktop .menu ul li a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});
// =====
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
// 
$(document).ready(function() {
        // Add smooth scrolling to all links in navbar + footer link
        $(".header .menu-desktop .menu ul li a, footer a[href='#myPage']").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });


    })
    // Add smooth scrolling to all links in navbar + footer link
$("header .menu-mobile .sidenav ul li a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});