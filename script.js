// Video

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

// Video


//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    const navbar = document.getElementById("nav");
    // Get the navbar
    const sticky = navbar.offsetTop;
    // Get the offset position of the navbar

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

  };

  // https://www.w3schools.com/howto/howto_js_navbar_sticky.asp





