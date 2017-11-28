let sourceSlot = null;
let sourceText = null;
let sourceAnswerIndex = null;
let chapterId = null;
let problemId = null;
const chosenAnswers = [];

$(document).ready(function () {
    chapterId = document.getElementById("header").getAttribute("data-chapter");
    problemId = document.getElementById("header").getAttribute("data-problem");

    drawProgress(chapterId, problemId);

    $(".text-slot").on("drop", drop).on("dragover", allowDrop).attr("draggable", true).on("drag", drag);

    const initialAnswers = $(".answer-slot").toArray();

    for(let i = 0; i < initialAnswers.length; i++) {
        chosenAnswers[i] = initialAnswers.textContent;
    }

    if(initialAnswers.length > 0) {
        document.getElementById("next-button").disabled=true;
    } else {
        document.getElementById("check-answers-button").disabled=true;
        document.getElementById("reset-answers-button").disabled=true;
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	ev.stopPropagation();
    sourceAnswerIndex = null;

    sourceSlot = ev.target;
    sourceText = sourceSlot.textContent.trim();

    // If we're dragging an answer into a different slot, we need to store
    // its index so we can swap the answers in our chosenAnswers array
    if (ev.target.classList.contains("answer-slot")) {
        sourceAnswerIndex = ev.target.getAttribute("data-answer-index");
    }

    try {
        ev.dataTransfer.setData("text/plain", "dummy"); //Needed for Firefox to recognize the drag
    } catch (e) {
        // This stops the console from being error spammed
    }
}

function drop(ev) {
    ev.preventDefault();
    console.log(sourceSlot.textContent);
    sourceSlot.textContent = ev.target.textContent;

    if (sourceAnswerIndex) {
        chosenAnswers[sourceAnswerIndex] = ev.target.textContent;
    }

    ev.target.textContent = sourceText;
    chosenAnswers[ev.target.getAttribute("data-answer-index")] = sourceText;
}

function checkAnswers() {
    const correctAnswers = contentData[chapterId][problemId].answers;
    for (let i = 0; i < chosenAnswers.length; i++) {
        console.log(`${chosenAnswers[i]} vs ${correctAnswers[i]}`);
        if (chosenAnswers[i] !== correctAnswers[i]) {
            alert("Your answers are incorrect! Try again!");
            return false;
        }
    }
    alert("Your answers are correct! Good job!");
    document.getElementById("next-button").disabled=false;
    return true;
}

function resetAnswers() {
    window.location.reload();
}

function goToNextProblem(chapterId, problemId, problemCount) {
    if (problemId === problemCount) {
        chapterId++;
        problemId = 1;
    } else {
        problemId++;
    }
	if (chapterId > 5) {
		chapterId = 0;
		problemId = 1;
	}
    window.location.href = `/${chapterId}/${problemId}`;
}

function goToPreviousProblem(chapterId, problemId) {
    if (problemId == 1) {
        console.log(problemId);
        console.log(chapterId);
        if (chapterId == 0) {

        } else {
            chapterId--;
            problemId = Object.keys(contentData[chapterId]).length;
        }
    } else {
        console.log(problemId);
        console.log(chapterId);
        problemId--;
    }
    window.location.href = `/${chapterId}/${problemId}`;
}

function drawProgress(chapterId, problemId) {
    if (chapterId == 0) return;
    var progress = document.getElementById("drawing");
    var svgns = 'http://www.w3.org/2000/svg';
    var xlinkns = 'http://www.w3.org/1999/xlink';
    for (i = 1; i <= Object.keys(contentData[chapterId]).length; i++) {
        var shape = document.createElementNS(svgns, "circle");
        shape.setAttributeNS(null, "cx", (40 + (50 * i)));
        shape.setAttributeNS(null, "cy", 40);
        shape.setAttributeNS(null, "r", 20);
        if (i < problemId) {
            shape.setAttributeNS(null, "fill", "green");
        } else if (i == Object.keys(contentData[chapterId]).length) {
            shape.setAttributeNS(null, "fill", "yellow");
        } else if (i == problemId) {
            shape.setAttributeNS(null, "fill", "lightgray")
        } else {
            shape.setAttributeNS(null, "fill-opacity", "0");
        }

        if (problemId == i) {
            shape.setAttributeNS(null, "stroke", "white");
        } else if (i == Object.keys(contentData[chapterId]).length) {
            shape.setAttributeNS(null, "stroke", "gold");
        } else {
            shape.setAttributeNS(null, "stroke", "black")
        }
        svgLink = document.createElementNS(svgns, "a");
        svgLink.setAttributeNS(xlinkns, "href", `/${chapterId}/${i}`);
        progress.appendChild(svgLink);
        svgLink.appendChild(shape);
        //console.log(i);
    }
    //console.log("JJJ");
}