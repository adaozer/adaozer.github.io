window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

// Responsive navigation bar tutorial | HTML CSS JAVASCRIPT (2018) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=gXkqy0b4M5g (Accessed: December 6, 2022).

const navSlide = function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const navLinks = document.querySelectorAll('.nav_links li');

  burger.addEventListener('click', function () {
    nav.classList.toggle('nav_active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 5 + 1.5}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

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

// Bostock, M. (2011) Data-driven documents, D3.js. Available at: https://d3js.org/ (Accessed: December 6, 2022).
// Kelleher, C. (2018) Making a bar chart with D3.js and SVG [reloaded], YouTube. YouTube. Available at: https://www.youtube.com/watch?v=NlBt-7PuaLk&amp;ab_channel=CurranKelleher (Accessed: December 6, 2022).
// Making a bar chart (2018) VizHub. Available at: https://vizhub.com/curran/326730c80fc54969ae501fb58c8cb94b (Accessed: December 6, 2022).
// Jocelyn, V. and Biagi, L. (2022) Global online art market, Statista. Available at: https://www.statista.com/study/58458/online-art-market/ (Accessed: December 6, 2022).

/* (function (d3) {
  'use strict';

  const titleText = 'The Values of Our Paintings';
  const xAxisLabelText = 'Prices';

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
      d.population = +d.population * 1000000;
    });
    render(data);
  });
}(d3)); */

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

const formatPercent = d3.format('.0%');

const x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1, 1);

const y = d3.scale.linear()
    .range([height, 0]);

const xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .tickFormat(formatPercent);

const svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.tsv('data.tsv', function (error, data) {
  data.forEach(function (d) {
    d.frequency = +d.frequency;
  });

  x.domain(data.map(function (d) { return d.letter; }));
  y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

  svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Frequency');

  svg.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) { return x(d.letter); })
      .attr('width', x.rangeBand())
      .attr('y', function (d) { return y(d.frequency); })
      .attr('height', function (d) { return height - y(d.frequency); });

  d3.select('input').on('change', change);

  const sortTimeout = setTimeout(function () {
    d3.select('input').property('checked', true).each(change);
  }, 2000);

  function change () {
    clearTimeout(sortTimeout);

    // Copy-on-write since tweens are evaluated after a delay.
    const x0 = x.domain(data.sort(this.checked
        ? function (a, b) { return b.frequency - a.frequency; }
        : function (a, b) { return d3.ascending(a.letter, b.letter); })
        .map(function (d) { return d.letter; }))
        .copy();

    svg.selectAll('.bar')
        .sort(function (a, b) { return x0(a.letter) - x0(b.letter); });

    const transition = svg.transition().duration(750);
        const delay = function (d, i) { return i * 50; };

    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', function (d) { return x0(d.letter); });

    transition.select('.x.axis')
        .call(xAxis)
      .selectAll('g')
        .delay(delay);
  }
});

const formB = document.getElementById('butForm');

formB.addEventListener('click', function () {
  alert("Thank you!\nWe'll be in touch!");
});
