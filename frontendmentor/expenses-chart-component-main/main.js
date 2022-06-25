'use-strict';

const charData = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

const graph = document.querySelector('.graph');

function highest() {
  let ht = 0;
  for (let i = 0; i < charData.length; i++) {
    if (charData[i].amount > ht) {
      ht = charData[i].amount;
    }
  }
  return ht;
}

function createGraph() {
  const hVal = highest();
  const hv = 4;

  for (let j = 0; j < charData.length; j++) {
    graph.innerHTML += `
    <div class="bar-sect">
        <div class="tooltip">$${charData[j].amount}</div>
        <div class="bar"></div>
        <p>${charData[j].day}</p>
    </div>
    `;
  }

  const bars = document.querySelectorAll('.bar');

  bars.forEach(
    (bar, idx) => {
      bar.style.height = `${charData[idx].amount * 3}px`;
      if (charData[idx].amount === hVal) {
        bar.style.backgroundColor = `hsl(186, 34%, 60%)`;
      }
  });
}

function main () {
    createGraph();

    document.querySelectorAll('.bar-sect').forEach(
        (bar) => {
          const tool = bar.firstElementChild;
          const graphBar = tool.nextElementSibling;

          graphBar.addEventListener('mouseover', function() {
            tool.style.display = 'block';
          });

          graphBar.addEventListener('mouseleave', function() {
            tool.style.display = 'none';
          });
    });
}

function setDimentions() {
  const win = screen;
  const body = document.querySelector('body');

  body.style.height = `${screen.height}px`;
}

setDimentions();
main();
