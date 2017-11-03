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
let chapterId = null;
let problemId = null;
const chosenAnswers = [];

$(document).ready(function() {
    chapterId = document.getElementById("header").getAttribute("data-chapter");
    problemId = document.getElementById("header").getAttribute("data-problem");

    const question = document.getElementById("question");
    const questionChildren = question.childNodes;
    console.log(question.childElementCount);
    for (let i = 0; i < questionChildren.length; i++) {
        if (questionChildren[i].classList && questionChildren[i].classList.contains("answer-slot")) {
            console.log(questionChildren[i].textContent);
            chosenAnswers.push(questionChildren[i].textContent);
            questionChildren[i].addEventListener("drop", drop);
            questionChildren[i].addEventListener("dragover", allowDrop);
        }
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    sourceSlot = ev.target;
    sourceText = sourceSlot.textContent.trim();
}

function drop(ev) {
    ev.preventDefault();
    console.log(sourceSlot.textContent);
    sourceSlot.textContent = ev.target.textContent;
    ev.target.textContent = sourceText;
    chosenAnswers[ev.target.getAttribute("data-answer-index")] = sourceText;
    if(checkAnswers()) {
        alert("Your answers are correct! Good job!");
    }
}

function checkAnswers() {
    const correctAnswers = contentData[chapterId][problemId].answers;
    console.log(correctAnswers);
    console.log(chosenAnswers);
    for(let i = 0; i < chosenAnswers.length; i++) {
        console.log(`${chosenAnswers[i]} vs ${correctAnswers[i]}`);
        if(chosenAnswers[i] !== correctAnswers[i]) {
            return false;
        }
    }
    return true;
}

function goToNextProblem(chapterId, problemId, problemCount) {
    console.log(problemCount);
    if(problemId === problemCount) {
        chapterId++;
        problemId = 1;
    } else {
        problemId++;
    }
    window.location.href = `/${chapterId}/${problemId}`;
}