const contentData = {
    0: {
		1: {
			question: "<h1>That Ain't Right</h1>" +
			"<h2>An Interactive Python Review Guide</h2><br><br>" +
			"<p><a href='/1/1'>Start</a></p>" +
			"<p><a href='https://docs.google.com/forms/d/e/1FAIpQLScq4JimfF7xoELJerSPigT60_oFS3Kk_MHTL1a1UVECAPVRvQ/viewform?usp=sf_link'>Student Survey</a></p>",
			answers: [],
			choices: []
		}
	},
	1: {
        1: {
            question: "<h1>Intro</h1><p>Welcome to That Ain&#39;t Right!<br>" +
            "Before we begin your training, let's explain how " +
            "the program works. Click the Next button to continue.</p>",
            answers: [],
            choices: []
        }, 2: {
            question: "<p>When white text boxes appear on a page, " +
            "drag answers into them from the gray text boxes below " +
            "the question. Drag &quot;What&quot; and &quot;How?&quot; into the " +
            "two text slots here.</p>" +
            '<div data-answer-index=0 id="slot0" class="text-slot answer-slot">Text</div>' +
            '<div data-answer-index=1 id="slot1" class="text-slot answer-slot">Box</div>',
            answers: ["What", "How?"],
            choices: ["Gray", "What", "Mister", "How?"]
        }, 3: {
            question: "<p>The circles at the top mark your progress through a " +
            "chapter. The white-bordered circle " +
            "is the page you're on now. Just click a page to jump there instantly.</p>",
            answers: [],
            choices: []
        }, 4: {
            question: "<p>To go to a different chapter, use the Chapters sidebar on the left.</p>",
            answers: [],
            choices: []
        }, 5: {
            question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared the intro!</h3>",
            answers: [],
            choices: []
        }
    },
    2: {
		1: {
			question: "<h1>1-1. Variables</h1>" +
			"<p>In this lesson, we will learn what variables are and how to manipulate them.</p>",
			answers: [],
			choices: []
		},
        2: {
            question: "<p>A variable is like a box that holds information." +
            "They have names and are assigned using this syntax:</p>" +
            "<p class='code'>name = &quot;Brian&quot;<br>" +
            "answer = 7 * 6</p>",
            answers: [],
            choices: []
        }, 3: {
            question: "<p>Variables only exist once they are given a value.<br>" +
            "Python doesn't like it when you try to use a variable that " +
            "doesn't exist. Make sure you spell your variables consistently!</p>" +
            '<p class="code">camelot = "A rather silly place"<br>' +
            'print(<span data-answer-index=0 id="slot0" class="text-slot answer-slot">camelort</span>)</p>',
            answers: ["camelot"],
            choices: ["camelot"]
        }, 4: {
            question: "<p>Variables can be modified with syntax like:</p>" +
			"<p class='code'>spam = 2</br>spam = spam + 5 //spam now equals 2 + 5, or 7</p>" +
			"<p>This can be shortened with some special syntax:</p>" +
			"<p class='code'>spam = 2</br>spam += 5</p>",
            answers: [],
            choices: []
        }, 5: {
			question: "<p>Strings can be indexed or sliced to get parts of the string.<br>Indices start from 0.</p>" +
			"<p class='code'>pet = 'dead parrot'<br>" +
			"pet[0] // 'd'<br> pet[0:6] // 'dead p' (position 6 is excluded)<br>" +
			"pet[-1] // 't' (first character from the end)<br>" +
			"pet[:6] // 'dead p' (same as [0:6])<br>pet[6:] 'arrot' (6 to the end)</p>",
            answers: [],
            choices: []
		}, 6: {
			question: "<p>Strings can be overwritten by new strings, but not directly changed.</p>" +
			"<p class='code'>weight = 'same as a duck'<br>" +
			"weight[-4] = 'b' //Gives a TypeError<br>" +
			"weight = 'same as a buck' //This works because it's a new string</p>",
			answers: [],
			choices: []
		}, 
		7: {
			question: "<p>String indices equal or greater than the length of the string cause errors.<br>" +
			"Negative string indices less than the negative length of the string cause errors.</p>" +
			'<p class="code">foo = "spam"<br>foo[3] // "m" (remember, indices start from 0, not 1!)<br>' +
			'foo[4] //Gives an IndexError<br>foo[-4] //"s"<br>foo[-5] //Gives an IndexError</p>',
			answers: [],
			choices: []
		},8: {
			question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared Chapter 1-1!</h3>" +
            "<p>Now let's do some practice problems.</p>",
            answers: [],
            choices: []
		}
    }, 3: {
		1: {
			question: "<h1>1-2. Variable Practice</h1>" +
			"<p>A series of practice problems for Chapter 1.</p>"
		},
		2: {
			question: "<p>What needs to change for foo to equal 8?</p>" +
			'<p class="code">foo = 6</br>foo <span data-answer-index=0 id="slot0" class="text-slot answer-slot">+=</span> <span data-answer-index=1 id="slot1" class="text-slot answer-slot">foo + 2</span></p>',
			answers: ["+=", "2"],
			choices: ["+", "-=", "2", "foo + 8", "foo - 2"]
		}, 3: {
			question: "<p>Arrange the lines so bar = 24.</p>" +
			'<p class="code">bar = 7<br>' +
			'<span data-answer-index=0 id="slot0" class="text-slot answer-slot">bar += 8</span><br>' +
			'<span data-answer-index=1 id="slot1" class="text-slot answer-slot">bar -= 3</span><br>' +
			'<span data-answer-index=2 id="slot2" class="text-slot answer-slot">bar *= 4</span></p>',
			answers: ["bar -= 3", "bar *= 4", "bar += 8"],
			choices: []
		}, 4: {
			question: "<p>What result will the following code give?</p>" +
			'<p class="code">ministry = "silly walks"<br>' +
			'ministry[6] = "b"<br>' +
			'print(ministry)</p>' +
			'<p><span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>',
			answers: ["TypeError on line 2"],
			choices: ["sillybwalks", "silly balks", "TypeError on line 2"]
		}, 5: {
			question: "<p> What result will the following code give?</p>" +
			'<p class="code">words = "out of cheese"<br>' +
			'more_words = words[0:2] + words[-6:]<br>' +
			'print(more_words)</p>' +
			'<span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>',
			answers: ["oucheese"],
			choices: ["outcheese", "IndexError on line 2", "oucheese", "out cheese"]
		}, 6: {
			question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared Chapter 1-2!</h3>" +
            "<p>Please help us improve the program and not fail our class by giving us <a href=https://docs.google.com/forms/d/e/1FAIpQLScq4JimfF7xoELJerSPigT60_oFS3Kk_MHTL1a1UVECAPVRvQ/viewform?usp=sf_link>feedback</a>.",
            answers: [],
            choices: []
		}
	}
};

try {
    module.exports = contentData;
} catch(e) {

}