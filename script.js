window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// Window∷ domcontentloaded event - web apis: MDN (2022) Window: DOMContentLoaded event - Web APIs | MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event (Accessed: December 6, 2022).

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
// Jocelyn, V. and Biagi, L. (2022) Global online art market, Statista. Available at: https://www.statista.com/study/58458/online-art-market/ (Accessed: December 6, 2022).
// Sortable Bar Chart (2015) Popular Blocks. Available at: https://bl.ocks.org/mbostock/3885705 (Accessed: December 6, 2022)

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

const svg = d3.select('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv('data.csv', function (data) {
  data.forEach(function (d) {
    d.value = +d.value;
  });

  x.domain(data.map(function (d) { return d.year; }));
  y.domain([0, d3.max(data, function (d) { return d.value; })]);

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
      .text('Market value in billion U.S. dollars');

  svg.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) { return x(d.year); })
      .attr('width', x.rangeBand())
      .attr('y', function (d) { return y(d.value); })
      .attr('height', function (d) { return height - y(d.value); });

  d3.select('input').on('change', change);

  const sortTimeout = setTimeout(function () {
    d3.select('input').property('checked', true).each(change);
  }, 2000);

  function change () {
    clearTimeout(sortTimeout);

    const x0 = x.domain(data.sort(this.checked
        ? function (a, b) { return b.value - a.value; }
        : function (a, b) { return d3.ascending(a.year, b.year); })
        .map(function (d) { return d.year; }))
        .copy();

    svg.selectAll('.bar')
        .sort(function (a, b) { return x0(a.year) - x0(b.year); });

    const transition = svg.transition().duration(750);
        const delay = function (d, i) { return i * 50; };

    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', function (d) { return x0(d.year); });

    transition.select('.x.axis')
        .call(xAxis)
      .selectAll('g')
        .delay(delay);
  }
});

const formB = document.getElementById('butForm');
const inp = document.getElementById('exampleInputEmail1');

formB.addEventListener('click', () => {
  inp.value = '';
  alert("Thank you!\nWe'll be in touch!");
});
