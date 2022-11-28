const navSlide = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_links");
    const navLinks = document.querySelectorAll(".nav_links li");

    burger.addEventListener("click", function() {
        nav.classList.toggle("nav_active");
        // Toggle Nav

        // Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5 ease forwards ${index/5+ 1.5}s`
        }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
    });
    
    
    
}

navSlide();
