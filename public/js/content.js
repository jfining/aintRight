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
            'the program works.</p>' + 
			'<p>You are currently on the first slide of the Intro chapter, so the first circle on the progress bar above has a white border. Click the circle to the right of it to continue to the next page.<br>(You can also click the "Next" button.)</p>',
            answers: [],
            choices: []
        }, 2: {
            question: "<p>When white text boxes appear on a page, " +
            "drag answers into them from the gray text boxes below " +
            "the question. Drag &quot;What&quot; and &quot;How?&quot; into the " +
            'two text slots here. When you are done, click the "Check Answers" button.</p>' +
			'<p>If you need to reset the question, click the Reset button or refresh your browser.</p>' +
            '<div data-answer-index=0 id="slot0" class="text-slot answer-slot">Text</div>' +
            '<div data-answer-index=1 id="slot1" class="text-slot answer-slot">Box</div>',
            answers: ["What", "How?"],
            choices: ["Gray", "What", "Mister", "How?"]
        }, 3: {
            question: "<p>Look at the progress bar. Which page are you on right now?</p>" +
			'<div data-answer-index=0 id="slot0" class="text-slot answer-slot">42</div>',
            answers: ["3"],
            choices: ["1", "3", "4", "8"]
        },  4: {
            question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared the intro!</h3>" +
			"<p>Select a chapter from the sidebar on the left to begin your lessons, or click Next to begin Chapter 1: Variables 1.</p>",
            answers: [],
            choices: []
        }
    },
    2: {
		1: {
			question: "<h1>Chapter 1: Variables 1</h1>" +
			"<p>In this lesson, we will learn what variables are and how to assign to them.</p>",
			answers: [],
			choices: []
		},
        2: {
            question: "<p>A variable is like a box that holds information." +
            "They have names and are assigned using this syntax:</p>" +
            "<p class='code'>name = &quot;Brian&quot;<br>" +
            "answer = 7 * 6 <span class='comment'># Variable name on the left, expression on the right</span><br>" +
			"answer = 20 <span class='comment'># Assigning to the variable again overwrites its value</span><br>" +
			'answer = "40" <span class="comment"># Anything in quotes is text, also called a string. It' + "'s not the number 40.</span></p>" +
			'<p>Which statement will give <b>eggs</b> a value of 5?</p>' +
			'<p><span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>',
            answers: ["eggs = 5"],
            choices: ["egg = 5", "eggs = 5", "5 = eggs", 'eggs = "5"']
        }, 3: {
            question: "<p>Variables only exist once they are given a value.<br>" +
            "Python doesn't like it when you try to use a variable that " +
            "doesn't exist. Make sure you spell your variables consistently!</p>" +
			"<p>If the typo in this code isn't fixed, Python will give a NameError.</p>" +
            '<p class="code">camelot = "A rather silly place"<br>' +
            'print(<span data-answer-index=0 id="slot0" class="text-slot answer-slot">camelort</span>)</p>',
            answers: ["camelot"],
            choices: ["camelot"]
        }, 4: {
			question: "<p>String addition is a little different from integer or float addition.</p>" +
			'<p class="code">2 + 3 # evaluates to 5<br>' +
			'"2" + "3" <span class="comment"># evaluates to "23"<br>' +
			'2 + "3" <span class="comment"># gives a TypeError. You can' + "'t add a string to an int.</p>" +
			'<p>Multiplying a string gives a repeated string:</p>' +
			'<p class="code">3 * "spam" <span class="comment"># "spamspamspam"</span></p>',
			answers: [],
			choices: []
		},
		5: {
			question: "<p>Now for some practice problems.</p>" +
			"<p>What is the value of <b>spam</b> after this code is run?</p>" +
			'<p class="code">spam = 7<br>spam = 3 * 5<br>span = "8"</p>' +
			'<p><span data-answer-index=0 id="slot0" class="text-slot answer-slot">"8"</span></p>',
			answers: ["15"],
			choices: ["7", '"7"', "8", "15", '"15"', "Doesn't exist"]
		}, 6: {
			question: "<p>What is the value of <b>eggs</b> after this code is run?</p>" +
			'<p class="code">foo = "bar"<br>herp = "derp"<br>life = 42</p>' +
			'<p><span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>',
			answers: ["Doesn't exist"],
			choices: ["Can't be determined", "Doesn't exist", "42"]
		}, 7: {
			question: '<p>This code is giving a TypeError. Can you fix it so <b>eggs</b> has the value "spamspam"?</p>' +
			'<p class="code">bacon = "spam"<br>' +
			'eggs = <span data-answer-index=0 id="slot0" class="text-slot answer-slot">bacon + 2</span></p>',
			answers: ["bacon * 2"],
			choices: ['bacon + "2"', "spam spam", "bacon * 2", '"bacon * 2"', '"bacon" * 2']
		}, 8: {
			question: "<p>Complete this code so that it doesn't give an error.</p>" +
			'<p class="code">print("I pity the " + <span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)</p>',
			answers: ['"foo"'],
			choices: ["foo", '"foo"', "0"]
		}, 9: {
			question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared Chapter 1!</h3>",
            answers: [],
            choices: []
		}
    }, 3: {
		1: {
			question: "<h1>Chapter 2. Variables 2</h1>" +
			"<p>In this lesson, you will learn to modify variables based on their current values.</p>"
		},
		2: {
            question: "<p>Variables can be modified with syntax like:</p>" +
			"<p class='code'>spam = 2</br>spam = spam + 5 //spam now equals 2 + 5, or 7</p>" +
			"<p>This can be shortened with some special syntax:</p>" +
			"<p class='code'>spam = 2</br>spam += 5</p>",
            answers: [],
            choices: []
        }, 3: {
			question: "<p>Strings can be indexed or sliced to get parts of the string.<br>Indices start from 0.</p>" +
			"<p class='code'>pet = 'dead parrot'<br>" +
			"pet[0] <span class='comment'># 'd'</span><br> pet[0:6] <span class='comment'># 'dead p' (position 6 is excluded)</span><br>" +
			"pet[-1] <span class='comment'># 't' (first character from the end)</span><br>" +
			"pet[:6] <span class='comment'># 'dead p' (same as [0:6])</span><br>pet[6:] <span class='comment'># 'arrot' (6 to the end)</span></p>",
            answers: [],
            choices: []
		}, 4: {
			question: "<p>Strings can be overwritten by new strings, but not directly changed.</p>" +
			"<p class='code'>weight = 'same as a duck'<br>" +
			"weight[-4] = 'b' <span class='comment'># Gives a TypeError</span><br>" +
			"weight = 'same as a buck' <span class='comment'># This works because it's a new string</span></p>",
			answers: [],
			choices: []
		}, 
		5: {
			question: "<p>String indices equal or greater than the length of the string cause errors.<br>" +
			"Negative string indices less than the negative length of the string cause errors.</p>" +
			'<p class="code">foo = "spam"<br>foo[3] <span class="comment"># "m" (remember, indices start from 0, not 1!)<br>' +
			'foo[4] # Gives an IndexError<br>foo[-4] <span class="comment"># "s"<br>foo[-5] <span class="comment"># Gives an IndexError</p>',
			answers: [],
			choices: []
		},
		6: {
			question: "<p>What needs to change for foo to equal 8?</p>" +
			'<p class="code">foo = 6</br>foo <span data-answer-index=0 id="slot0" class="text-slot answer-slot">+=</span> <span data-answer-index=1 id="slot1" class="text-slot answer-slot">foo + 2</span></p>',
			answers: ["+=", "2"],
			choices: ["+", "-=", "2", "foo + 8", "foo - 2"]
		}, 7: {
			question: "<p>Arrange the lines so bar = 24.</p>" +
			'<p class="code">bar = 7<br>' +
			'<span data-answer-index=0 id="slot0" class="text-slot answer-slot">bar += 8</span><br>' +
			'<span data-answer-index=1 id="slot1" class="text-slot answer-slot">bar -= 3</span><br>' +
			'<span data-answer-index=2 id="slot2" class="text-slot answer-slot">bar *= 4</span></p>',
			answers: ["bar -= 3", "bar *= 4", "bar += 8"],
			choices: []
		}, 8: {
			question: "<p>What result will the following code give?</p>" +
			'<p class="code">ministry = "silly walks"<br>' +
			'ministry[6] = "b"<br>' +
			'print(ministry)</p>' +
			'<p><span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>',
			answers: ["TypeError on line 2"],
			choices: ["sillybwalks", "silly balks", "TypeError on line 2"]
		}, 9: {
			question: "<p> What result will the following code give?</p>" +
			'<p class="code">words = "out of cheese"<br>' +
			'more_words = words[0:2] + words[-6:]<br>' +
			'print(more_words)</p>' +
			'<span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>',
			answers: ["oucheese"],
			choices: ["outcheese", "IndexError on line 2", "oucheese", "out cheese"]
		}, 10: {
			question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared Chapter 2!</h3>",
            answers: [],
            choices: []
		}
	}, 4:{
		1: {
			question: "<h1>Chapter 3. True/False and If/Else</h1>" +
			"<p>In this lesson, you will learn about Boolean expressions, truthy and falsy values, and how to make decisions using <b>if</b>, <b>elif</b>, and <b>else</b>.</p>",
			answers: [],
			choices: []
		}, 2:{
			question: "<p>A Boolean expression is either <b>True</b> or <b>False</b>. That's it, only those two options.<br>" +
			"<p><span class='code'>5 == 5</span> is an expression that evaluates to True. Note the use of <b>==</b> for comparison. Don't mix it up with the assignment operator <b>=</b>.<br>" +
			"<span class='code'>4 &gt;= 8</span> is an expression that evaluates to False, because 4 is neither greater than nor equal to 8.<br>",
			answers: [],
			choices: []
		}, 3:{
			question: "<p>Here's how you spell each of the comparison operators.</p>" +
			"<p class='code'>== <span class='comment'>#Is equal to</span><br>" +
			"!= <span class='comment'>#Does not equal</span><br>" +
			"> <span class='comment'>#Is greater than</span><br>" +
			">= <span class='comment'>#Is greater than or equal to</span><br>" +
			"< <span class='comment'>#Is less than</span><br>" +
			"<= <span class='comment'>#Is less than or equal to</span><br>",
			answers: [],
			choices: []
		},
		4:{
			question: "<p>What is the truth value of each of these statements?</p>" +
			'<p class="code">"spam" == "spam" <span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><br><br>' +
			'1 == 0 <span data-answer-index=1 id="slot1" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><br><br>' +
			'3 != 4 <span data-answer-index=2 id="slot2" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>',
			answers: ["True", "False", "True"],
			choices: ["True", "True", "True", "False", "False", "False"]
		},
		5:{
			question: "<p>An <b>if</b> block looks like this:</p>" +
			"<p class='code'>if condition:<br>" +
			'&nbsp;&nbsp;print("True branch")<br>' +
			'else:<br>' +
			'&nbsp;&nbsp;print("False branch")<br>' +
			'print("Not part of the if block")</p>' +
			"<p>Only one of these branches will execute, depending on the truth value of <b>condition</b>. Note that the <b>else</b> and false branch are optional. You can have an <b>if</b> block with only a true branch, and if the condition is false it will just do nothing. To have an empty true branch, replace it with the word </b>pass</b> so Python knows the branch is still there.</p>" +
			"<p>The indents here are required. Unlike C and its ilk, Python uses whitespace to determine which block is which. It makes your code easier to read too!</p>",
			answers: [],
			choices: []
		}, 6:{
			question: '<p>Which condition will print out the phrase "dead parrot"?</p>' +
			'<p class="code">status = "pining for the fjords"<br>' +
			'if <span data-answer-index=0 id="slot0" class="text-slot answer-slot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>:<br>' +
			'&nbsp;&nbsp;print("dead parrot")</p>',
			answers: ['status == "pining for the fjords"'],
			choices: ['status = "pining for the fjords"', 'status == "pining for the fjords"', 'status != "pining for the fjords"']
		}, 7:{
			question: '<p>This <b>if</b> block has an <b>elif</b> branch, which is short for "else if". The conditions are checked in order, and the first one to evaluate True is chosen. If all conditions are false, then the <b>else</b> branch is chosen.</p>' +
			'<p class="code">if foo == "bar":<br>&nbsp;&nbsp;print("holy grail")<br>' +
			'elif foo == "baz":<br>&nbsp;&nbsp;print("life of brian")<br>' +
			'else:<br>&nbsp;&nbsp;print("something completely different")</p>'
		},
		8:{
			question: "<p>Non-boolean expressions can have truthy or falsy values too.</p>" +
			"<p>These values are falsy, or evaluate to False in an if statement:<br>" +
			'<span class="code">None<br>False<br>0 <span class="comment">#(of any numeric type)</span><br>' +
			'"" <span class="comment">#or any other empty string or sequence</span><br>' +
			'{} <span class="comment">#or any other empty mapping</span></span><br>' +
			'Any object of a user-defined class that returns a __nonzero__() or __len__() value of 0 or False</p>' +
			"<p>All other values are truthy. Don't worry if you don't understand the last two examples. Just remember that negative numbers and non-empty strings are truthy in Python.",
			answers: [],
			choices: []
		},
		9: {
			question: "<p>What is the end value of <b>eggs</b> when this code is run?</p>" +
			"<p class='code'>spam = 42<br>if spam < 30:<br>&nbsp;&nbsp;eggs = 'bonk'<br>" +
			"elif spam > 35:<br>&nbsp;&nbsp;eggs = 'biff'<br>elif spam == 42:<br>" +
			"&nbsp;&nbsp;eggs = 'wham'<br>else:<br>&nbsp;&nbsp;eggs = 'pow!'</p>" +
			"<p><span data-answer-index=0 id='slot0' class='text-slot answer-slot'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>",
			answers: ["'biff'"],
			choices: ["'bonk'", "'biff'", "'wham'", "'pow!'"]
		},
		10: {
			question: "<p>Why doesn't this code print <b>42</b>?</p>" +
			'<p class="code">eggs = -1<br>if eggs:<br>&nbsp;&nbsp;print(24)<br>' +
			'else:<br>&nbsp;&nbsp;print(42)</p>' +
			"<p><span data-answer-index=0 id='slot0' class='text-slot answer-slot'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>",
			answers: ["Negative numbers are truthy, so the program prints 24 instead"],
			choices: ["You can't use a non-boolean type as a condition", "Negative numbers are truthy, so the program prints 24 instead", "The code does print 42, what are you talking about?"]
		},
		11: {
			question: "<h2>Congratulations!</h2>" +
            "<h3>You cleared Chapter 3!</h3>" +
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