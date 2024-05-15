const questions = [
    {
        question: "What is Vanishing points?",
        translation: "वैनिशिंग पॉइंट्स क्या हैं?",
        options: [
            "Points beyond which you cannot see anything.",
            "Point where you can see all the objects with your eyes.",
            "Points keep changing depending on the position where you are looking at the object.",
            "a and c"
        ],
        answer: "Points keep changing depending on the position where you are looking at the object.",
        response: "incorrect" // Initial status
    },
    {
        question: "Which of the following option will be used if you want pixel in an image to blend with pixels in another image?",
        translation: "अगर आप चाहते हैं कि किसी छवि में पिक्सेल दूसरी छवि के पिक्सेल के साथ मिल जाएं, तो निम्न में से किस विकल्प का उपयोग किया जाएगा?",
        options: ["Blend", "Layers", "Vector mask", "Style"],
        answer: "Blend",
        response: "incorrect" // Initial status
    },
    {
        question: "Book spine of book jacket has following elements:",
        translation: "किताब के जैकेट की बुक स्पाइन में निम्नलिखित तत्व होते हैं:",
        options: [
            "Information of the author/ title of book",
            "Title of book/ publishing house name",
            "Image- photo & illustration/ comments from people",
            "Comments from people/ information about the author"
        ],
        answer: "Title of book/ publishing house name",
        response: "incorrect" // Initial status
    },
    {
        question: "Primary, secondary & tertiary are types of _________.",
        translation: "प्राथमिक, द्वितीयक और तृतीयक _________ के प्रकार हैं।",
        options: ["Colour relationship", "Labeling", "Packaging", "Brochure design"],
        answer: "Colour relationship",
        response: "incorrect" // Initial status
    },
    {
        question: "What is Horizon points?",
        translation: "क्षितिज बिंदु क्या हैं?",
        options: [
            "The horizon line, there are points beyond you cannot see anything.",
            "Objects that are placed at different angles to one another.?",
            "Farthest line/ point up to which all objects can be see with your eyes.",
            "None of the above"
        ],
        answer: "None of the above",
        response: "incorrect" // Initial status
    },
    {
        question: "Feel of surface, fabric, paper etc is known as _________.",
        translation: "सतह, कपड़ा, कागज आदि की भावना को _________ कहा जाता है।",
        options: ["Texture", "Margin", "Tiling", "None of the above"],
        answer: "Texture",
        response: "incorrect" // Initial status
    },
    {
        question: "What is the full form of ISBN?",
        translation: "ISBN का पूरा रूप क्या है?",
        options: [
            "International Standard Book Number",
            "Identified Sequence Book Number",
            "Internationally Signified Book Number",
            "Identified Standard Book Number"
        ],
        answer: "International Standard Book Number",
        response: "incorrect" // Initial status
    },
    {
        question: "__________ is used to give information in an attractive manner, where it is easy to understand the points of the product.",
        translation: "__________ का उपयोग जानकारी को आकर्षक तरीके से देने के लिए किया जाता है, जहां उत्पाद के बिंदुओं को समझना आसान हो।",
        options: ["Visiting card", "Brochure", "Packaging design", "All of the above"],
        answer: "Brochure",
        response: "incorrect" // Initial status
    },
    {
        question: "Factors affecting readability of text and clear visibility depends on _________.",
        translation: "पाठ की पठनीयता और स्पष्ट दृश्यता को प्रभावित करने वाले कारक _________ पर निर्भर करते हैं।",
        options: ["Font style", "Font size", "Font colours", "All of the above"],
        answer: "All of the above",
        response: "incorrect" // Initial status
    },
    {
        question: "To protect, store, transport and sell product __________ is important.",
        translation: "उत्पाद की सुरक्षा, भंडारण, परिवहन और बिक्री के लिए __________ महत्वपूर्ण है।",
        options: ["Packaging", "Labeling", "a and b both", "None of the above"],
        answer: "Packaging",
        response: "incorrect" // Initial status
    },
    {
        question: "Printing machines are fixed on the left & right of the pages and _________ portion in the design will be cut in final print if not left during designing.",
        translation: "मुद्रण मशीनें पृष्ठों के बाएँ और दाएँ ओर तय की जाती हैं और डिज़ाइन में _________ भाग को अंतिम मुद्रण में काट दिया जाएगा यदि डिज़ाइनिंग के दौरान नहीं छोड़ा गया।",
        options: ["Texture", "Margin", "Tiling", "None of the above"],
        answer: "Margin",
        response: "incorrect" // Initial status
    },
    {
        question: "Monochromatic, analogous, triad are part of _________.",
        translation: "मोनोक्रोमैटिक, एनालॉगस, ट्रायड _________ का हिस्सा हैं।",
        options: ["Colour model", "Colour combination", "Colour relationship", "All of the above"],
        answer: "Colour relationship",
        response: "incorrect" // Initial status
    },
    {
        question: "When light passes through the colours Red, Blue and Green is called _________.",
        translation: "जब प्रकाश लाल, नीले और हरे रंगों से होकर गुजरता है, तो इसे _________ कहा जाता है।",
        options: ["Additive primaries", "Subtractive primaries", "HSB model", "None of the above"],
        answer: "Additive primaries",
        response: "incorrect" // Initial status
    },
    {
        question: "Adding or subtracting space between characters is called __________.",
        translation: "अक्षरों के बीच स्थान जोड़ना या घटाना __________ कहलाता है।",
        options: ["Aliasing", "Tracking", "Kerning", "None of the above"],
        answer: "Tracking",
        response: "incorrect" // Initial status
    },
    {
        question: "In Photoshop, you can add number of styles or effects to a layer.",
        translation: "फ़ोटोशॉप में, आप एक लेयर में कई शैलियाँ या प्रभाव जोड़ सकते हैं।",
        options: ["True", "False"],
        answer: "True",
        response: "incorrect" // Initial status
    },
    {
        question: "Putting together all design elements in a design like image, text, alignment, colour etc is called __________.",
        translation: "चित्र, पाठ, संरेखण, रंग आदि जैसे सभी डिज़ाइन तत्वों को एक साथ रखना __________ कहलाता है।",
        options: ["Icon", "Labels", "Letterhead", "Composition"],
        answer: "Composition",
        response: "incorrect" // Initial status
    },
    {
        question: "Design made by pasting lot of images together in an attractive way is known as ____________.",
        translation: "कई छवियों को एक आकर्षक तरीके से एक साथ चिपकाकर बनाई गई डिज़ाइन को ____________ कहा जाता है।",
        options: ["Photograph type", "Image collage", "Photo-based posters", "Image optimization"],
        answer: "Image collage",
        response: "incorrect" // Initial status
    },
    {
        question: "Which of the following elements consist in ISBN?",
        translation: "ISBN में निम्नलिखित में से कौन से तत्व होते हैं?",
        options: [
            "Prefix element/ registration group element/ check digit",
            "Registration group element/ registrant element/ check digit",
            "Prefix element/ registration group element/ registrant element/ publication element/ check digit",
            "Prefix element/ registrant element/ check digit"
        ],
        answer: "Prefix element/ registration group element/ registrant element/ publication element/ check digit",
        response: "incorrect" // Initial status
    },
    {
        question: "What does the symbol represent?←AV→",
        translation: "यह प्रतीक क्या दर्शाता है?",
        options: ["Tracking", "Kerning", "Text orientation", "Style"],
        answer: "Tracking",
        response: "incorrect" // Initial status
    },
    {
        question: "Using one monochromatic colour with complementary colour is _________.",
        translation: "एक मोनोक्रोमैटिक रंग के साथ पूरक रंग का उपयोग _________ है।",
        options: ["Complementary colour combination", "Triad combination", "Mix-it-up combination", "Analogous colour combination"],
        answer: "Complementary colour combination",
        response: "incorrect" // Initial status
    },
    {
        question: "Which of the following option is used to adjust shadow and colour in an image?",
        translation: "किसी छवि में छाया और रंग को समायोजित करने के लिए निम्नलिखित में से किस विकल्प का उपयोग किया जाता है?",
        options: ["Curves", "Desaturate", "Auto contrast", "Colour balance"],
        answer: "Curves",
        response: "incorrect" // Initial status
    },
    {
        question: "Balance, contrast & white space are elements of _______.",
        translation: "संतुलन, विपरीतता और सफेद स्थान _______ के तत्व हैं।",
        options: ["Layout", "Labels", "Letterhead", "None of the above"],
        answer: "Layout",
        response: "incorrect" // Initial status
    },
    {
        question: "_________ is a method to define colours and helps to get many colours from a set of colours.",
        translation: "_________ रंगों को परिभाषित करने की एक विधि है और रंगों के एक सेट से कई रंग प्राप्त करने में मदद करता है।",
        options: [
            "Primary, secondary & tertiary colours",
            "Colour model",
            "Colour relationship",
            "None of the above"
        ],
        answer: "Colour model",
        response: "incorrect" // Initial status
    },
    {
        question: "What is the use of 'Masking' option while creating poster?",
        translation: "पोस्टर बनाते समय 'मास्किंग' विकल्प का उपयोग क्या है?",
        options: [
            "To hide images without cropping or deleting.",
            "Blending 2 or more photos to make collage",
            "Preview effect and adjust values before adding it to the image",
            "a and b"
        ],
        answer: "a and b",
        response: "incorrect" // Initial status
    },
    {
        question: "Which of the following colour model is mainly used for web design?",
        translation: "निम्नलिखित में से कौन सा रंग मॉडल मुख्य रूप से वेब डिज़ाइन के लिए उपयोग किया जाता है?",
        options: ["HSB", "RGB", "CYMK", "All of the above"],
        answer: "RGB",
        response: "incorrect" // Initial status
    }
];


// Function to shuffle the array of questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffling the array of questions
const shuffledQuestions = shuffle(questions);

// Printing the shuffled questions
shuffledQuestions.forEach((question, index) => {
    console.log(`Q.${index + 1}. ${question.question}`);
    question.options.forEach((option, optionIndex) => {
        console.log(`${String.fromCharCode(65 + optionIndex)} ${option}`);
    });
    console.log(`Answer: ${question.answer}`);
    console.log(`Translation: ${question.translation}`);
    console.log(`Response: ${question.response}`);
    console.log(''); // Adding an empty line for readability
});

let selectedOptions = Array.from({ length: questions.length }, () => null);
let timeRemaining = 25 * 60; // Declare timeRemaining outside the event listener
let timerInterval; // Declare timerInterval globally

document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.querySelector('.time-box');
    const questionNumberBox = document.querySelector('.question-number-box');
    const questionBox = document.querySelector('.question-box');
    const translationBox = document.querySelector('.translated-box');
    const optionsContainer = document.querySelector('.options');
    const submitButton = document.querySelector('.submit-button');
    const questionNumbersContainer = document.querySelector('.question-numbers');

    let currentQuestionIndex = 0; // Index of the current question being displayed

    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes} min : ${seconds} sec`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            // You can add additional logic here for handling when time runs out
        }
    }

    function updateQuestionNumber() {
        questionNumberBox.textContent = `Question ${currentQuestionIndex + 1} out of ${questions.length}`;
    }

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionBox.textContent = `Question: ${currentQuestion.question}`;
        translationBox.textContent = `Translation: ${currentQuestion.translation}`;
    }

    function displayOptions() {
        optionsContainer.innerHTML = ''; // Clear previous options
        const currentQuestion = questions[currentQuestionIndex];
        currentQuestion.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option');
            // Check if this option is selected
            if (selectedOptions[currentQuestionIndex] === option) {
                optionButton.classList.add('selected');
            }
            optionsContainer.appendChild(optionButton);
        });
        // Add event listeners to the new options
        addOptionListeners();
    }

    function checkAllOptionsSelected() {
        return selectedOptions.every(option => option !== null);
    }

    // Add event listeners to each option button
    function addOptionListeners() {
        const optionButtons = document.querySelectorAll('.option');
        optionButtons.forEach(optionButton => {
            optionButton.addEventListener('click', function () {
                // Remove styling from all option buttons for the current question
                const currentQuestionOptionButtons = Array.from(optionsContainer.querySelectorAll('.option'));
                currentQuestionOptionButtons.forEach(btn => {
                    btn.classList.remove('selected');
                });
                // Apply styling to the clicked option button
                this.classList.add('selected');
                // Update the selectedOptions array with the selected option for the current question
                selectedOptions[currentQuestionIndex] = this.textContent;
                // Check if options have been selected for all questions
                if (checkAllOptionsSelected()) {
                    submitButton.disabled = false; // Enable the submit button
                    submitButton.classList.remove('disabled'); // Remove the disabled class
                } else {
                    submitButton.disabled = true; // Disable the submit button
                    submitButton.classList.add('disabled'); // Add the disabled class
                }
            });
        });
    }

    // Define a function to scroll the active question into view
    function scrollActiveQuestionIntoView() {
        const activeQuestion = document.querySelector('.question-numbers .active-question');
        if (activeQuestion) {
            activeQuestion.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
    function handleQuestionNumberClick(event) {
        const clickedListItem = event.target.closest('li');
        if (clickedListItem) {
            // Remove active class from previously active item
            const activeItem = questionNumbersContainer.querySelector('.active-question');
            if (activeItem) {
                activeItem.classList.remove('active-question');
            }
            // Add active class to the clicked item
            clickedListItem.classList.add('active-question');
            // Navigate to the corresponding question
            const questionIndex = parseInt(clickedListItem.textContent) - 1;
            navigateToQuestion(questionIndex);
        }
    }

    // Add event listener to question numbers container to handle clicks
    questionNumbersContainer.addEventListener('click', handleQuestionNumberClick);



    // Inside the function navigateToQuestion(), add a call to scrollActiveQuestionIntoView()
    function navigateToQuestion(index) {
        currentQuestionIndex = index;
        updateQuestionNumber();
        displayQuestion();
        displayOptions();
        scrollActiveQuestionIntoView(); // Add this line
    }

    updateTimer(); // Initial call to display timer immediately
    updateQuestionNumber(); // Initial call to display question number
    displayQuestion(); // Initial call to display the first question
    displayOptions(); // Initial call to display options for the first question

    timerInterval = setInterval(updateTimer, 1000); // Update timer every second

    document.querySelector('.previous-button').addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuestionNumber(); // Update question number display
            displayQuestion(); // Display the previous question
            displayOptions(); // Display options for the previous question
            updateActiveQuestionNumber(); // Call the function to update the active question number
        }
    });

    document.querySelector('.next-button').addEventListener('click', function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestionNumber(); // Update question number display
            displayQuestion(); // Display the next question
            displayOptions(); // Display options for the next question
            updateActiveQuestionNumber(); // Call the function to update the active question number
        }
    });

    submitButton.addEventListener('click', function () {
        // Handle answer submission and navigation to the results page
        if (checkAllOptionsSelected()) {
            console.log("Submitting answers...");
            // For now, we'll just log the selected options
            console.log(selectedOptions);
            // Disable submit button
            submitButton.disabled = true;
            // Add disabled class to submit button
            submitButton.classList.add('disabled');
            // Save data to local storage and redirect to results page
            saveDataAndRedirect();
        } else {
            console.log('Please select an option for all questions before submitting.');
        }
    });

    // Function to update the active question number in the pagination list
    function updateActiveQuestionNumber() {
        const questionNumberItems = document.querySelectorAll('.question-numbers li');
        questionNumberItems.forEach((item, index) => {
            if (index === currentQuestionIndex) {
                item.classList.add('active-question');
            } else {
                item.classList.remove('active-question');
            }
        });
    }

    // Code for dynamic generation of question navigation list items
    questions.forEach((question, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = '#'; // Update this later if needed
        anchor.textContent = index + 1; // Display question number starting from 1
        anchor.addEventListener('click', () => navigateToQuestion(index));
        listItem.appendChild(anchor);
        questionNumbersContainer.appendChild(listItem);
    });

    // Call the function to initially set the active question number
    updateActiveQuestionNumber();

});

function checkAnswers() {
    const updatedQuestions = questions.map((question, index) => {
        const selectedOption = selectedOptions[index];
        const correctAnswer = question.answer;
        const response = (selectedOption === correctAnswer) ? 'correct' : 'incorrect';
        return { ...question, response };
    });

    // Save updated questions to local storage
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
}

function saveDataAndRedirect() {
    checkAnswers();
    // Save time taken
    const timeTaken = (25 * 60) - timeRemaining; // Calculate time taken in seconds
    localStorage.setItem('timeTaken', timeTaken);
    // Redirect to the result page
    window.location.href = 'result.html';
}
