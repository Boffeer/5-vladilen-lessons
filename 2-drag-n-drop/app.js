const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
	event.target.classList.add('dragged')
	setTimeout(() => {
		event.target.classList.add('hidden')
	}, 0)
};
function dragend(event) {
	event.target.classList.remove('dragged', 'hidden')
};

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('dragover', dragover);
	placeholder.addEventListener('dragleave', dragleave);
	placeholder.addEventListener('drop', dragdrop);
}

function dragenter(event) {
	event.target.classList.add('placeholder--hovered');
};
function dragover(event) {
	event.preventDefault();
};
function dragleave(event) {
	event.target.classList.remove('placeholder--hovered');
};
function dragdrop(event) {
	event.target.classList.remove('placeholder--hovered');
	event.target.append(item);
};
