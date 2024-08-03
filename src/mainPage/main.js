const firstProjectBtn = document.querySelector('#first_project');
const secondProjectBtn = document.querySelector('#second_project');
const thirdProjectBtn = document.querySelector('#third_project');
const fourthProjectBtn = document.querySelector('#fourth_project');
const fifthProjectBtn = document.querySelector('#fifth_project');

firstProjectBtn.addEventListener('click', () => {
    window.location.href = "src/galleryCards";
})

secondProjectBtn.addEventListener('click', () => {
    window.location.href = "src/drag&drop";
})

thirdProjectBtn.addEventListener('click', () => {
    window.location.href = "src/slider";
})

fourthProjectBtn.addEventListener('click', () => {
    window.location.href = "src/miniGame";
})

fifthProjectBtn.addEventListener('click', () => {
    window.location.href = "src/aimTrainer";
})
