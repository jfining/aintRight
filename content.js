const contentData = {
    1: {
        1: {
            question: "<p>Welcome to That Ain&#39;t Right!<br>" +
            "Before we begin your training, let's explain how<br>" +
            "the program works. Click the Next button to continue.</p>",
            slots: [],
            answers: []
        }, 2: {
            question: "<p>When white text boxes appear on a page,<br>" +
            "drag answers into them from the gray text boxes below<br>" +
            "the question. Drag &quot;What&quot; and &quot;How?&quot; into the<br>" +
            "two text slots here.</p>" +
            '<div id="slot0" class="text-slot answer-slot">Text</div>' +
            '<div id="slot1" class="text-slot answer-slot">Box</div>',
            slots: [
                {
                    init: "Text",
                    correct: "What"
                },
                {
                    init: "Box",
                    correct: "How?"
                }
            ], answers: ["Gray", "What", "Mister", "How?"]
        }, 3: {
            question: "<p>The circles at the top mark your progress through a<br>" +
            "chapter. A white circle is a page with only text, like this one.<br>" +
            "A gray circle is an unanswered question, and a green circle is a<br>" +
            "question that's been answered correctly. The white-bordered circle<br>" +
            "is the page you're on now. Just click a page to jump there instantly.</p>",
            slots: [],
            answers: []
        }, 4: {
            question: "<p>To select a chapter, click &quot;Chapters&quote to open the sidebar<br>" +
            "and click the chapter you want to go to.</p>",
            slots: [],
            answers: []
        }, 5: {
            question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared the intro!</h3>" +
            "<p>It took you <span id='timer'></span></p>" +
            "<p>You answered <span id='score'></span> of 1 questions</p>",
            slots: [],
            answers: []
        }
    },
    2: {
        1: {
            question: "<p>A variable is like a box that holds information." +
            "They have names and are assigned using this syntax:</p>" +
            "<p class='code'>name = &quot;Brian&quot;<br>" +
            "answer = 7 * 6</p>",
            slots: [],
            answers: []
        }, 2: {
            question: "<p>Variables only exist once they are given a value.<br>" +
            "Python doesn't like it when you try to use a variable that<br>" +
            "doesn't exist. Make sure you spell your variables consistently!</p>" +
            '<p class="code">camelot = "A rather silly place"<br>' +
            'print(<div id="slot0" class="text-slot answer-slot"></div>)</p>',
            slots: [{
                init: "camelort",
                correct: "camelot"
            }],
            answers: ["camelot"]
        }, 3: {
            question: "<p>To be continued</p>",
            slots: [],
            answers: []
        }
    }
};

module.exports = contentData;
