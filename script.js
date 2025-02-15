document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Change header background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#000";
        } else {
            header.style.background = "#1a1a1a";
        }
    });

    // GSAP Animations
    gsap.from(".hero-content", { opacity: 0, x: -100, duration: 1 });
    gsap.from(".hero-img img", { opacity: 0, x: 100, duration: 1 });

    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Hover effect on cards
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });
});
