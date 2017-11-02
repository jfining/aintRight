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

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    sourceSlot = ev.target;
    sourceText = sourceSlot.textContent;
}

function drop(ev) {
    ev.preventDefault();
    sourceSlot.textContent = ev.target.textContent;
    ev.target.textContent = sourceText;
}