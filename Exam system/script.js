// Dom elements selection
let timer = document.querySelector("#timer");
let question = document.querySelector(".question-text");
let details = document.querySelector("#question-deets");
let options = document.querySelector(".options-grid");

//Hardcoded values
let noOfQuestions = 50;
let examDuration = 60 * 60 * 1000; //1 hour in milliseconds
let currentQuestionIndex = 0;

let qArray = questions; //questions is an array of question objects defined in data.js
let storedQuestions = [];
let userAnswers = [];
let userQuestions = [];

let previous = document.querySelector("#prev");
let next = document.querySelector("#next");
let submit = document.querySelector("#submit");

let userAnswer = [];

/* ### Logic flow ### 
Render questions, user picks options and moves on option is stored in an array with id and is checked against real answer,
on next click user goes to next question
on prev click, user goes to the prev question
on submit the array of answers is sorted and checked against the correct answers
Percentage is calculated, and rendered out */

/*### Timer Logic ###
The current time is checked ie start time
The total exam time is added to the current time to give expected end time
the timer is started and if the user closes or leaves tab it checks the current time and subtracts it from expected time to give time remaining
Once time is up there is an automatic submission
Note: When is it appropriate to check current time to verify??
*/

/* ### Progress bar and clicked question ###
when user clicks on a number button he should be automatically redirected to the question
the button should become slightly darker when an option is picked
the progress bar should measure the no of questions answered / total no of questions * 100 and update accordingly 
the number of buttons should be rendered by the no of questions given





/* ### Anti Cheat Logic ###

A. Tab-Switch Detection (The Visibility API)
You can track if the user leaves the tab to look up an answer.

Logic: Listen for the visibilitychange event on the document object.

Action: If document.hidden becomes true, you can pause the exam and show a warning, or automatically deduct 30 seconds from their timer as a penalty.

B. The "Refresh Shield" (Persistence)
As we discussed, using an Absolute Expiry Timestamp is the ultimate way to prevent users from refreshing the page to "reset" the clock.

Logic: Save the expiryTime (Start Time + 10 Minutes) to localStorage.

Action: Even if they close the browser, when they return, your code compares Date.now() to the saved expiryTime. If they were gone for 5 minutes, they lose 5 minutes.

C. Disabling Context Menus & Copy/Paste
Prevent users from right-clicking to search for text or using Ctrl+C.

Logic: Add event listeners for contextmenu, copy, and paste on the window object.

Action: Use e.preventDefault() to stop the action.


Fisher-Yates shuffle for the questions given
*/

previous.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestions(currentQuestionIndex, userQuestions);
    console.log(currentQuestionIndex);
  }
});

next.addEventListener("click", () => {
  if (currentQuestionIndex < noOfQuestions - 1) {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    renderQuestions(currentQuestionIndex, userQuestions);
  }
});

submit.addEventListener("click", () => {
  submitExam();
});

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  array.forEach((q) => {
    for (let i = q.options.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
    }
  });
  return array;
}

function collectQuestions(array) {
  for (let i = 0; i < noOfQuestions; i++) {
    storedQuestions.push(array[i]);
  }

  localStorage.setItem("storedQuestions", JSON.stringify(storedQuestions));
}

function renderQuestions(index, array) {
  let currentQuestion = array[index];
  details.innerHTML = `Question ${index + 1} of ${noOfQuestions}`;
  question.innerHTML = `${currentQuestion.question}`;

  let optionsHtml = "";
  currentQuestion.options.forEach((opt, i) => {
    let letter = String.fromCharCode(65 + i);
    optionsHtml += `<label class="option-card">
                            <input type="radio" name="q${index}" value="${letter}">
                            <span class="option-content">
                                <span class="option-letter">${letter} </span>
                                <span class="option-text">${opt}</span>
                            </span>
                        </label>`;
  });

  options.innerHTML = optionsHtml;
}

function getEndTime() {
  let expiryTime = Date.now() + examDuration;
  localStorage.setItem("expiryTime", expiryTime);
}

function time() {
  let timeRemaining = setInterval(() => {
    let storedExpiryTime = localStorage.getItem("expiryTime");
    let distance = storedExpiryTime - Date.now();

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(timeRemaining);
      timer.innerHTML = "EXPIRED";
      submitExam();
    }
  }, 1000);
}

function saveAnswer() {
  let selectedOption = document.querySelector(
    'input[name="q' + currentQuestionIndex + '"]:checked'
  ).value;
  userAnswer.push({
    id: currentQuestionIndex,
    answer: selectedOption,
  });
}

function submitExam() {}

function progress() {}
function initializeExam() {
  getEndTime();
  shuffleQuestions(qArray);
  collectQuestions(qArray);
  userQuestions = JSON.parse(localStorage.getItem("storedQuestions"));
  renderQuestions(currentQuestionIndex, userQuestions);
}

initializeExam();
time();
