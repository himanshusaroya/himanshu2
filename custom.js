

// slider js start //


$('.img-slider1').owlCarousel({
    rtl:true,
    loop:true,
    dots:false,
    margin:25,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
        },
        1000:{
            items:5,
            nav:false,
            
        }
    }
});

$('.img-slider2').owlCarousel({
    ltr:true,
    loop:true,
    dots:false,
    margin:25,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            
        }
    }
});


// slider js end //

// blog slider //

$('.blog-slider').owlCarousel({
    loop:true,
    dots:true,
    margin:25,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            
        }
    }
});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

AOS.init();



