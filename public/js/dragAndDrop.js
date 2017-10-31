var AintRight = {draggedText: null, originalSlot: null};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	AintRight.originalSlot = ev.target;
	AintRight.draggedText = AintRight.originalSlot.innerHTML;
}

function drop(ev) {
    ev.preventDefault();
	var realTarget = ev.target.firstChild;
    AintRight.originalSlot.innerHTML = realTarget.innerHTML;
	realTarget.innerHTML = AintRight.draggedText;
	AintRight.draggedText = null;
	AintRight.originalSlot = null;
}