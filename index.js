document.addEventListener("DOMContentLoaded", function() {
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        gap: 20,
        autoplay: 3000, // Adjust autoplay speed as needed
        breakpoints: {
            600: {
                perView: 1
            },
            768: {
                perView: 2
            },
            992: {
                perView: 3
            }
        }
    }).mount();
});
