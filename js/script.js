const slideList = [{
    img: "src/plant_1.jpg",
    text: "First text"
}, {
    img: "src/plant_2.jpg",
    text: "Second text"
}, {
    img: "src/plant_3.jpg",
    text: "Third text"
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
//Interface
const time = 3000;
let active = 0;
const dots = [...document.querySelectorAll('.dots span')];


//Implementation
const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
};

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
};

setInterval(changeSlide, time);