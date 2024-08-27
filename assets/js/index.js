let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleIndicators');
    const fireGifs = document.querySelectorAll('.fire-gif'); 

    carousel.addEventListener('slide.bs.carousel', function (e) {
        fireGifs.forEach(gif => gif.style.display = 'none'); 
        const nextSlide = e.relatedTarget;
        const gifInNextSlide = nextSlide.querySelector('.fire-gif');
        if (gifInNextSlide) {
            gifInNextSlide.style.display = 'block';
        }
    });
});




$('.services-silider').owlCarousel({
    loop:true,
    margin:10,
    navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    nav:true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// gallery-section-start

$('.gallery-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    nav: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});



$('.testimonial_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoHeight : true,
    navText : [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
}); 





document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;

        // Remove the text truncation and show full content
        content.style.display = 'block';
        content.style.webkitLineClamp = 'unset'; // Remove the line clamp to show full content

        // Hide the "Read More" button
        button.style.display = 'none';
    });
});



// contact form 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




// about counter
$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });
