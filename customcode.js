console.log("I am working")

// Plyr Code
const player = new Plyr('#home-video');


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const headerNav = document.querySelector('.header-nav');
    let lastScrollY = window.scrollY;
    let isHeaderVisible = true; // Track header visibility state

    // ScrollTrigger to hide header after .hero
    ScrollTrigger.create({
        trigger: '.hero',
        start: 'bottom top',  // When the bottom of .hero hits the top of the viewport
        onEnter: () => gsap.to(headerNav, { yPercent: -100, duration: 0.5, ease: "power1.out" }),
        onLeaveBack: () => gsap.to(headerNav, { yPercent: 0, duration: 0.5, ease: "power1.out" }), // Reset when scrolling back up past .hero
    });

    // Detect scroll direction and dynamically toggle header visibility
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Scrolling up
            if (!isHeaderVisible) {
                gsap.to(headerNav, { yPercent: 0, duration: 0.5, ease: "power1.out" });
                isHeaderVisible = true; // Update state
            }
        } else {
            // Scrolling down
            if (isHeaderVisible && currentScrollY > 100) { // Optional: add threshold for better UX
                gsap.to(headerNav, { yPercent: -100, duration: 0.5, ease: "power1.out" });
                isHeaderVisible = false; // Update state
            }
        }

        lastScrollY = currentScrollY; // Update lastScrollY
    });
});





