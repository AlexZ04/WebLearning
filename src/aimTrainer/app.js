const startButton = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');

const board = document.querySelector('#board');

const colors = ['#f289e8', '#f28baf', '#f2ba86', '#f2ea85', '#eeeda9', '#08b0ff', '#08dcff', '#0efff9', '#b0fff7']

let time = 0;
let score = 0;

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandCircle();
    }
});

function startGame() {
    setTime(time);
    createRandCircle();
    setInterval(decreaseTime, 1000);
}


function finishGame() {
    board.innerHTML = `<h1>Счёт: <span class=primary>${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
}


function decreaseTime() {
    if (time === 0) {
        finishGame();
        return;
    }

    let current = --time;
    if (current < 10) {
        timeEl.innerHTML = `00:0${current}`;
        return;
    }
    setTime(current);
}

function setTime(value) {
    if (value >= 60) {
        timeEl.innerHTML = `0${value / 60}:0${value % 60}`;
        return;
    }
    timeEl.innerHTML = `00:${value}`;
}

function createRandCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const size = getRandomNumber(10, 60);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    const {width, height} = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    circle.style.background = `linear-gradient(90deg, ${getRandomColor()} 0%, ${getRandomColor()} 47%, ${getRandomColor()} 100%)`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return colors[Math.round(Math.random() * (colors.length - 1))];
}