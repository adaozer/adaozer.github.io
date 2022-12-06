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

const h5 = document.getElementById('h5');

but1.addEventListener('click', function () {
  if (column1.classList.contains('hidden')) {
    column1.classList.remove('hidden');
    column2.classList.add('hidden');
    column3.classList.add('hidden');
    h5.classList.add('marginsh4');
  } else {
    column1.classList.add('hidden');
    h5.classList.remove('marginsh4');
  };

  if (column1.classList.contains('hidden') === false || column2.classList.contains('hidden') === false || column3.classList.contains('hidden') === false) {
    window.scrollTo(0, tp.offsetTop - 55);
  };
});

but2.addEventListener('click', function () {
  if (column2.classList.contains('hidden')) {
    column2.classList.remove('hidden');
    column1.classList.add('hidden');
    column3.classList.add('hidden');
    h5.classList.add('marginsh4');
  } else {
    column2.classList.add('hidden');
    h5.classList.remove('marginsh4');
  };

  if (column1.classList.contains('hidden') === false || column2.classList.contains('hidden') === false || column3.classList.contains('hidden') === false) {
    window.scrollTo(0, tp.offsetTop - 55);
  };
});

but3.addEventListener('click', function () {
  if (column3.classList.contains('hidden')) {
    column3.classList.remove('hidden');
    column1.classList.add('hidden');
    column2.classList.add('hidden');
    h5.classList.add('marginsh4');
  } else {
    column3.classList.add('hidden');
    h5.classList.remove('marginsh4');
  };

  if (column1.classList.contains('hidden') === false || column2.classList.contains('hidden') === false || column3.classList.contains('hidden') === false) {
    window.scrollTo(0, tp.offsetTop - 55);
  };
});

// https://vizhub.com/curran/326730c80fc54969ae501fb58c8cb94b?edit=files&file=bundle.js
// https://www.statista.com/study/58458/online-art-market/
(function (d3) {
  'use strict';

  const titleText = 'Top 10 Most Populous Countries';
  const xAxisLabelText = 'Population';

  const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data => {
    const xValue = d => d.population;
    const yValue = d => d.country;
    const margin = { top: 50, right: 40, bottom: 77, left: 180 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, xValue)])
      .range([0, innerWidth]);

    const yScale = d3.scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xAxisTickFormat = number =>
      d3.format('.3s')(number)
        .replace('G', 'B');

    const xAxis = d3.axisBottom(xScale)
      .tickFormat(xAxisTickFormat)
      .tickSize(-innerHeight);

    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('.domain, .tick line')
      .remove();

    const xAxisG = g.append('g').call(xAxis)
      .attr('transform', `translate(0,${innerHeight})`);

    xAxisG.select('.domain').remove();

    xAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', 65)
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text(xAxisLabelText);

    g.selectAll('rect').data(data)
      .enter().append('rect')
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());

    g.append('text')
      .attr('class', 'title')
      .attr('y', -10)
      .text(titleText);
  };

  d3.csv('data.csv').then(data => {
    data.forEach(d => {
      d.population = +d.population * 1000;
    });
    render(data);
  });
}(d3));

// https://vizhub.com/curran/326730c80fc54969ae501fb58c8cb94b?edit=files&file=bundle.js
// https://www.statista.com/study/58458/online-art-market/

const formB = document.getElementById('butForm');

formB.addEventListener('click', function () {
  alert("Thank you!\nWe'll be in touch!");
  console.log('click');
});
