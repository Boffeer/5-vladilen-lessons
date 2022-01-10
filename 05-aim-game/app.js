const startButton = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const board = document.querySelector('#board');
const COLORS = ['#66bb6a', '#80deea', '#ffee58', '#ff7043', '#ec407a', '#3f51b5'];

startButton.addEventListener('click', event => {
	event.preventDefault();
	screens[0].classList.add('up');
});


const timepickers = document.querySelector('.time-list');
timepickers.addEventListener('click', event => {
	if (event.target.getAttribute('class').includes('time-btn')) {
		let time = +event.target.getAttribute('data-time');
		screens[1].classList.add('up');
		startGame(time)
	}
})

const timer = document.querySelector('#time');
let score = 0;

function startGame(time, debug = false) {
	timer.innerHTML = `00:${time}`;
	setInterval(() => {
		if (time >= 0) {
			if (time < 10) {
				timer.innerHTML = `00:0${time}`;
			} else {
				timer.innerHTML = `00:${time}`;
			}
			--time;
		} else {
			finishGame();
		}
	}, 1000);
	spawnCircle();
}

function finishGame() {
	board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
	timer.parentNode.classList.add('hide');
}

function spawnCircle() {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 70);
	const color = getCircleColor(COLORS);
	const {width, height} = board.getClientRects()[0];
	const xOffset = getRandomNumber(0, width - size);
	const yOffset = getRandomNumber(0, height - size);

	circle.classList.add('circle');
	circle.style.background = color;
	circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.left = `${xOffset}px`;
	circle.style.top = `${yOffset}px`;

	board.append(circle)
}
board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		event.target.remove();
		spawnCircle();
		score++;
	}
})

function getCircleColor(colors) {
	const color = Math.floor(Math.random() * colors.length);
	return colors[color];
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
