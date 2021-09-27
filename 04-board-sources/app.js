const board = document.querySelector('#board');
const SQUARE_AMOUNT = 400;
const COLORS = ['#66bb6a', '#80deea', '#ffee58', '#ff7043', '#ec407a', '#3f51b5'];
const DEFAULT_SQUARE_COLOR = '#444';

for (let i = 0; i < SQUARE_AMOUNT; i ++) {
	const square = document.createElement('div');
	square.classList.add('square');
	board.append(square);

	square.addEventListener('mouseover', event => {
		let color = getRandomColor(COLORS);
		setColor(square, color);
	})
	square.addEventListener('mouseleave', event => {
		removeColor(square, DEFAULT_SQUARE_COLOR);
	})
}

function setColor(square, color) {
	square.style.backgroundColor = color;
	square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(square, color) {
	square.style.backgroundColor = color;
	square.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(colors) {
	const color = Math.floor(Math.random() * colors.length);
	return colors[color];
}
