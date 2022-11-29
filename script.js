window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

// Video

const navSlide = function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const navLinks = document.querySelectorAll('.nav_links li');

  burger.addEventListener('click', function () {
    nav.classList.toggle('nav_active');
    // Toggle Nav

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 5 + 1.5}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

// Video

// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  const navbar = document.getElementById('nav');

  // Get the navbar
  const sticky = navbar.offsetTop;
  // Get the offset position of the navbar

  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
};

// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

function showDiv () {
  const column1 = document.getElementById('column1');
  const column2 = document.getElementById('column2');
  const column3 = document.getElementById('column3');
    if (column1.style.display === 'none') {
    column1.style.display = 'block';
    column2.style.display = 'none';
    column3.style.display = 'none';
  } else {
    column1.style.display = 'none';
  }
 }

const but1 = document.getElementById('but1');

but1.addEventListener('click', showDiv);

function showDiv2 () {
  const column1 = document.getElementById('column1');
  const column2 = document.getElementById('column2');
  const column3 = document.getElementById('column3');
  if (column2.style.display === 'none') {
  column1.style.display = 'none';
  column2.style.display = 'block';
  column3.style.display = 'none';
} else {
  column2.style.display = 'none';
}
}

const but2 = document.getElementById('but2');

but2.addEventListener('click', showDiv2);

function showDiv3 () {
  const column1 = document.getElementById('column1');
  const column2 = document.getElementById('column2');
  const column3 = document.getElementById('column3');

  if (column3.style.display === 'none') {
  column1.style.display = 'none';
  column2.style.display = 'none';
  column3.style.display = 'block';
} else {
  column3.style.display = 'none';
}
}

const but3 = document.getElementById('but3');

but3.addEventListener('click', showDiv3);
