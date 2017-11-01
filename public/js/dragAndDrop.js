function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	AintRight.originalSlot = ev.target;
	AintRight.draggedText = AintRight.originalSlot.textContent;
}

function drop(ev) {
    ev.preventDefault();
	var realTarget = ev.target.firstChild;
    AintRight.originalSlot.textContent = realTarget.textContent;
	realTarget.textContent = AintRight.draggedText;
	AintRight.draggedText = null;
	AintRight.originalSlot = null;
	AintRight.checkAnswers();
}