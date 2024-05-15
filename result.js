document.addEventListener('DOMContentLoaded', function() {
    // Retrieve exam data from local storage
    const examData = JSON.parse(localStorage.getItem('questions'));

    // Select the container for result boxes
    const resultContainer = document.querySelector('.left');

    // Select elements for displaying percentage, total correct answers, and time taken
    const percentageElement = document.querySelector('#percentage');
    const correctAnswersElement = document.querySelector('#correct-text');
    const timeBox = document.querySelector('.time-box');

    // Calculate total number of questions and total number of correct answers
    const totalQuestions = examData.length;
    const totalCorrectAnswers = examData.filter(question => question.response === 'correct').length;

    // Calculate percentage
    const percentage = (totalCorrectAnswers / totalQuestions) * 100;

    // Display percentage and total correct answers
    percentageElement.textContent = percentage.toFixed(2) + "%";
    correctAnswersElement.textContent = totalCorrectAnswers;

    // Retrieve time taken from local storage
    const timeTaken = localStorage.getItem('timeTaken');

    // Format the time taken (in seconds) into minutes and seconds
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Display the formatted time taken
    timeBox.textContent = `Time Taken: ${minutes} min ${seconds} sec`;

    // Retrieve the username from local storage
    const username = localStorage.getItem('username') || 'Unknown';

    // Loop through each question in the exam data
    examData.forEach((question, index) => {
        // Create a new div element for the result box
        const resultBox = document.createElement('div');
        resultBox.classList.add('box');

        // Assign an id based on the response
        if (question.response === 'correct') {
            resultBox.id = 'correct';
        } else {
            resultBox.id = 'incorrect';
        }

        // Set the inner text of the result box
        resultBox.textContent = index + 1; // Display question number

        // Append the result box to the result container
        resultContainer.appendChild(resultBox);
    });

    function changeDash() {
        // Get the root element
        const root = document.documentElement;

        // Change the value of the CSS variable
        root.style.setProperty('--dash', `${472-(472*(percentage/100))}`);
    }

    changeDash();
    
    document.querySelector('.student-name-box').innerHTML = `<span>Result : ${username}</span>`
    // Update the percentage text
    const num = document.querySelector('#percentage');
    let counter = 0;

    var time = 0;
    if (percentage < 30) {
        time = 50;
    } else if (percentage < 60) {
        time = 30;
    } else {
        time = 25;
    }
    setInterval(() => {
       if (counter == Math.floor(percentage)) {
           clearInterval();
       } else {
           counter += 1;
           num.innerHTML = counter.toFixed(2) + "%"; // Update the percentage text
       }
    }, time);


    // Add event listener to the "Download" button
    document.getElementById('download-btn').addEventListener('click', function() {
        // Format the data into a string
        let dataString = `USER NAME: ${username}\nPERCENTAGE: ${percentage.toFixed(2)}%\nTIME TAKEN: ${minutes} min ${seconds} sec\nCORRECT ANSWERS: ${totalCorrectAnswers}\n`;

        // Loop through each question in the exam data
        examData.forEach((question, index) => {
            // Get the uppercase response of the question
            const responseUppercase = question.response.toUpperCase();
            // Append question results to the data string
            dataString += `QUESTION ${index + 1}: ${responseUppercase}\n`;
        });

        // Create a Blob object containing the data
        const blob = new Blob([dataString], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = `${username}`;

        // Programmatically click on the link to trigger the download
        link.click();
    });

    // Add event listener to the "Exit" button
    document.querySelector('.exit-btn').addEventListener('click', function() {
        // Show confirmation dialog
        const confirmation = confirm('Are you sure you want to exit?');
        if (confirmation) {
            // If user confirms, close the window
            window.close();
        }
        // If user cancels, do nothing
    });
});
