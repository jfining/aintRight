$(document).ready(function(){
	//Get content from data json: number of slots, correct answers per slot,
	//number and content of answers in answer key
	
	//Prepare text-slot divs for droppable
	$(".text-slot").on("drop", drop)
	.on("dragover", allowDrop);
	
	//Prepare answer-text p's for draggable
	$(".answer-text").attr("draggable", "true").on("drag", drag);
	
	//Physically arrange answer key in a nice table
});