// var AintRight = {}
//
// AintRight.updateSlide = function(currentChapterId, currentSlideId) {
// 	console.log(currentChapterId);
//     let currentChapter = AintRight.contentData[currentChapterId];
//     let currentSlide = currentChapter[currentSlideId];
//
//     for (var i = 0; i < currentSlide.slots.length; i++) {
//         $("#slot" + i).empty();
//         currentSlide.slots[i].current = currentSlide.slots[i].init;
//         var newPara = document.createElement("p");
//         newPara.setAttribute("class", "answer-text");
//         newPara.appendChild(document.createTextNode(currentSlide.slots[i].current));
//         $("#slot" + i).append(newPara);
//     }
//     $("#key-area").empty();
//     for (var i = 0; i < currentSlide.answers.length; i++) {
//         var newAnswerSlot = document.createElement("div");
//         newAnswerSlot.setAttribute("id", "key" + i);
//         newAnswerSlot.setAttribute("class", "text-slot answer-key");
//         var newPara = document.createElement("p");
//         newPara.setAttribute("class", "answer-text");
//         newPara.appendChild(document.createTextNode(currentSlide.answers[i]));
//         newAnswerSlot.append(newPara);
//         $("#key-area").append(newAnswerSlot);
//     }
// };
//
// $(document).ready(function(){
// 	//Get content from data json: number of slots, correct answers per slot,
// 	//number and content of answers in answer key
// 	AintRight.currentChapterId = "intro";
//     AintRight.currentSlideId = 1;
//     console.log(AintRight.currentChapterId);
// 	AintRight.updateSlide(AintRight.currentChapterId, AintRight.currentSlideId);
//
// 	//Prepare text-slot divs for droppable
// 	$(".text-slot").on("drop", drop)
// 	.on("dragover", allowDrop);
//
// 	//Prepare answer-text p's for draggable
// 	$(".answer-text").attr("draggable", "true").on("drag", drag);
//
// 	//Prepare the progress bar:
// 	//Draw a line with length matching the number of slides in the chapter-id
// 	//For each slide in the chapter:
// 		//Draw a circle, evenly spaced. White if the slide has no answer slots, yellow for final, gray otherwise
// 		//The circle's stroke should be a darkened shade of the background, but golden for the final slide and white for the current slide
// 		//Put the flag sprite on the final slide
//
// 	$("#next-button").click(function() {
// 		alert("wow!");
//         document.getElementById("progress-bar").value++;
//         AintRight.currentSlideId++;
//         AintRight.updateSlide(AintRight.currentChapterId, AintRight.currentSlideId);
// 	});
// });
//
// AintRight.checkAnswers = function(){
// 	var allCorrect = true;
//     let currentSlide = AintRight.contentData[AintRight.currentChapterId][AintRight.currentSlideId];
// 	for(var i = 0; i < currentSlide.slots.length; i++){
// 		var slot = $("#slot" + i).children()[0];
// 		if(slot.textContent != currentSlide.slots[i].correct){
// 			allCorrect = false;
// 		}
// 	}
// 	if(allCorrect) {
// 		// $("next-button").
// 		alert("Correct! Carry on.");
// 	}
// };
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
//	document.getElementById("next-button").disabled=true;
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log("boom");
    sourceSlot = ev.target;
    sourceText = sourceSlot.textContent.trim();

    // If we're dragging an answer into a different slot, we need to store
    // its index so we can swap the answers in our chosenAnswers array
    if (ev.target.classList.contains("answer-slot")) {
        sourceAnswerIndex = ev.target.getAttribute("data-answer-index");
    } else {
        sourceAnswerIndex = null;
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

    if (checkAnswers()) {
        document.getElementById("next-button").disabled = false;
        setTimeout(function () {
            alert("Your answers are correct! Good job!")
        }, 100);
    }
}

function checkAnswers() {
    const correctAnswers = contentData[chapterId][problemId].answers;
    for (let i = 0; i < chosenAnswers.length; i++) {
        console.log(`${chosenAnswers[i]} vs ${correctAnswers[i]}`);
        if (chosenAnswers[i] !== correctAnswers[i]) {
            return false;
        }
    }
    return true;
}

function goToNextProblem(chapterId, problemId, problemCount) {
    if (problemId === problemCount) {
        chapterId++;
        problemId = 1;
    } else {
        problemId++;
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