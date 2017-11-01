var AintRight = {}

$(document).ready(function(){
	//Get content from data json: number of slots, correct answers per slot,
	//number and content of answers in answer key
	var currentChapterId = $("#chapter-id")[0].innerHTML;
	var currentSlideId = $("#slide-id")[0].innerHTML;
	var currentChapter = AintRight.contentData[currentChapterId];
	var currentSlide = currentChapter[currentSlideId];
	
	for(var i = 0; i < currentSlide.slots.length; i++){
		currentSlide.slots[i].current = currentSlide.slots[i].init;
		var newPara = document.createElement("p");
		newPara.setAttribute("class", "answer-text");
		newPara.appendChild(document.createTextNode(currentSlide.slots[i].current));
		$("#slot" + i).append(newPara);
	}
	for(var i = 0; i < currentSlide.answers.length; i++){
		var newAnswerSlot = document.createElement("div");
		newAnswerSlot.setAttribute("id", "key" + i);
		newAnswerSlot.setAttribute("class", "text-slot answer-key")
		var newPara = document.createElement("p");
		newPara.setAttribute("class", "answer-text");
		newPara.appendChild(document.createTextNode(currentSlide.answers[i]));
		newAnswerSlot.append(newPara);
		$("#key-area").append(newAnswerSlot);
	}
	
	//Prepare text-slot divs for droppable
	$(".text-slot").on("drop", drop)
	.on("dragover", allowDrop);
	
	//Prepare answer-text p's for draggable
	$(".answer-text").attr("draggable", "true").on("drag", drag);
	
	//Prepare the progress bar:
	//Draw a line with length matching the number of slides in the chapter-id
	//For each slide in the chapter:
		//Draw a circle, evenly spaced. White if the slide has no answer slots, yellow for final, gray otherwise
		//The circle's stroke should be a darkened shade of the background, but golden for the final slide and white for the current slide
		//Put the flag sprite on the final slide
	
	AintRight.currentChapter = currentChapter;
	AintRight.currentSlide = currentSlide;
});

AintRight.checkAnswers = function(){
	var allCorrect = true;
	for(var i = 0; i < AintRight.currentSlide.slots.length; i++){
		var slot = $("#slot" + i).children()[0];
		if(slot.textContent != AintRight.currentSlide.slots[i].correct){
			allCorrect = false;
		}
	}
	if(allCorrect){
		//Mark the progress bar as having cleared this slide
		
		//Enable the Next button
		alert("Correct! Carry on.");
	}
}