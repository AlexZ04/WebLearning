const board = document.querySelector('#board');
const colors = ['#124348', '#1ab254', '#91e87e', '#f6eda4', '#122d45', '#15668d', '#20a3d9', '#20dad8']

const SQUARES_NUMBER = 1024

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square)
    )

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 0px #000`
}

function getRandColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}