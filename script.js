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

const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');

const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const but3 = document.getElementById('but3');

const tp = document.getElementById('gallery');

but1.addEventListener('click', function () {
  column1.classList.remove('hidden');
  column2.classList.add('hidden');
  column3.classList.add('hidden');
});

but2.addEventListener('click', function () {
  column2.classList.remove('hidden');
  column1.classList.add('hidden');
  column3.classList.add('hidden');
});

but3.addEventListener('click', function () {
  column3.classList.remove('hidden');
  column1.classList.add('hidden');
  column2.classList.add('hidden');
});

but1.addEventListener('click', function () {
  if (column1.style.display === 'block' || column2.style.display === 'block' || column3.style.display === 'block') {
    window.scrollTo(0, tp.offsetTop - 55);
  };
});

but2.addEventListener('click', function () {
  if (column1.style.display === 'block' || column2.style.display === 'block' || column3.style.display === 'block') {
    window.scrollTo(0, tp.offsetTop - 55);
  };
});

but3.addEventListener('click', function () {
  if (column1.style.display === 'block' || column2.style.display === 'block' || column3.style.display === 'block') {
  window.scrollTo(0, tp.offsetTop - 55);
  };
});
