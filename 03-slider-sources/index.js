const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slider = document.querySelector('.main-slide');

const sidebar = document.querySelector('.sidebar');

const container = document.querySelector('.container');

let totalSlides =  slider.querySelectorAll('div').length;
let currentSlide = 0;

upButton.addEventListener('click', () => {
	moveSlides('up');
});
downButton.addEventListener('click', () => {
	moveSlides('down');
});

sidebar.style.top = `-${(totalSlides - 1) * 100}vh`

function moveSlides(direction) {
	if (direction === 'up') {
		currentSlide++
		if (currentSlide === totalSlides) {
			currentSlide = 0;
		}
	} else if (direction === 'down') {
		currentSlide--
		if (currentSlide < 0) {
			currentSlide = totalSlides - 1;
		}
	}
	const sliderHeight = container.clientHeight;

	slider.style.transform = `translateY(-${currentSlide * sliderHeight}px)`
	sidebar.style.transform = `translateY(${currentSlide * sliderHeight}px)`
}
