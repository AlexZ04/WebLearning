const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${slidesCount - 1}00vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});


downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        changeSlide('down');
        return;
    }
    changeSlide('up');
})

let lastUpdate = Date.now();

function changeSlide(direction) {
    if (Date.now() - lastUpdate < 500) return;
    lastUpdate = Date.now();

    if (direction === 'up') {
        activeSlideIndex++;
        activeSlideIndex %= slidesCount;
    }
    else {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    
}

function tick() {
    const now = Date.now();
}
