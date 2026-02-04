// Dom elements selection
let timer = document.querySelector("#timer");
let question = document.querySelector(".question-text");
let details = document.querySelector("#question-deets");
let options = document.querySelector(".options-grid");
let nav = document.querySelector(".question-indicators");
let progressBar = document.querySelector(".progress-track");
let modal = document.getElementById("confirm-modal");
let confirmBtn = document.getElementById("confirm-submit");
let cancelBtn = document.getElementById("cancel-submit");

//Hardcoded values
let noOfQuestions = 50;
let examDuration = 30 * 60 * 1000; //1 hour in milliseconds
let currentQuestionIndex = 0;
let timeRemaining = 0;

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
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    localStorage.setItem("currentIndex", currentQuestionIndex);
    renderQuestions(currentQuestionIndex, userQuestions);
  }
});

next.addEventListener("click", () => {
  saveAnswer();
  if (currentQuestionIndex < noOfQuestions - 1) {
    currentQuestionIndex++;
    localStorage.setItem("currentIndex", currentQuestionIndex);
    renderQuestions(currentQuestionIndex, userQuestions);
  }
});

submit.addEventListener("click", () => {
  saveAnswer();
  modal.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide the pop-up
});

confirmBtn.addEventListener("click", () => {
  saveAnswer();
  modal.classList.add("hidden"); // Hide modal
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
    let isChecked = userAnswers[index] === opt ? "checked" : "";
    optionsHtml += `<label class="option-card">
                            <input type="radio" name="q${index}" value="${opt}"${isChecked}>
                            <span class="option-content">
                                <span class="option-letter">${letter} </span>
                                <span class="option-text">${opt}</span>
                            </span>
                        </label>`;
  });

  options.innerHTML = optionsHtml;
  updateDots();
  progress();
}

function getEndTime() {
  let expiryTime = Date.now() + examDuration;
  localStorage.setItem("expiryTime", expiryTime);
}

function time() {
  timeRemaining = setInterval(() => {
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

function saveAnswer() {
  // 1. Find the selected radio button
  let selectedOption = document.querySelector(
    'input[name="q' + currentQuestionIndex + '"]:checked'
  );

  // 2. Only save if they actually picked something
  if (selectedOption) {
    let answerValue = selectedOption.value;

    // 3. Save to the specific Index (Prevents duplicates!)
    userAnswers[currentQuestionIndex] = answerValue;

    // 4. INSTANTLY save to browser storage
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }
}

function navigation() {
  nav.innerHTML = "";
  for (let i = 0; i < noOfQuestions; i++) {
    let dot = document.createElement("span"); // this basically creates a variable dot that is the same as a span element that you can mutate in js. This makes it easier to work with as opposed to selecting it using a query selector. It can also be injected directly into the dom. Im seeing react patterns here
    dot.classList.add("dot"); //classList is a way to call class basically saying class then do something. Add gives the span "dot" a class of dot in this case
    dot.innerText = `${i + 1}`;

    dot.addEventListener("click", () => {
      saveAnswer();
      currentQuestionIndex = i;
      localStorage.setItem("currentIndex", currentQuestionIndex);
      renderQuestions(currentQuestionIndex, userQuestions);
      updateDots();
    });
    nav.appendChild(dot);
  }
}

function updateDots() {
  let dotClass = document.querySelectorAll(".dot");

  dotClass.forEach((dotClass, index) => {
    dotClass.className = "dot";

    if (index == currentQuestionIndex) {
      dotClass.classList.add("active");
    }

    if (userAnswers[index]) {
      dotClass.classList.add("completed");
    }
  });
}
function submitExam() {
  clearInterval(timeRemaining);

  const storedAnswers = localStorage.getItem("userAnswers");
  if (storedAnswers) {
    userAnswers = JSON.parse(storedAnswers);
  }
  let score = 0;
  userQuestions.forEach((q, i) => {
    if (q.answer === userAnswers[i]) {
      score++;
    }
  });

  let percentage = (score / noOfQuestions) * 100;
  let grade = "";
  let status = "";
  let color = "";

  switch (true) {
    case percentage >= 85:
      grade = "A";
      status = "Passed";
      color = "#388E3C";
      break;
    case percentage >= 70:
      grade = "B";
      status = "Passed";
      color = "#64B5F6";
      break;
    case percentage >= 60:
      grade = "C";
      status = "Passed";
      color = "#FFB300";
      break;
    case percentage >= 50:
      grade = "D";
      status = "Passed";
      color = "#FB8C00";
      break;
    case percentage >= 40:
      grade = "E";
      status = "Failed";
      color = "#E65100";
    default:
      grade = "F";
      status = "Failed";
      color = "#D32F2F";
      break;
  }

  document.getElementById("exam-screen").classList.add("hidden");

  let resultScreen = document.getElementById("result-screen");
  resultScreen.classList.remove("hidden");

  document.querySelector(
    ".final-score"
  ).innerText = `FINAL SCORE: ${score}/${noOfQuestions}`;
  document.querySelector(".score-percentage").innerText = `${percentage}%`;

  let gradeLetterEl = document.querySelector(".grade-letter");
  let statusPassEl = document.querySelector(".status-pass");

  gradeLetterEl.innerText = grade;
  gradeLetterEl.style.color = color;

  statusPassEl.innerText = status;
  statusPassEl.style.color = color;

  let degrees = (percentage / 100) * 360;
  document
    .querySelector(".circular-chart")
    .style.setProperty("--deg", `${degrees}deg`);

  localStorage.removeItem("storedQuestions");
  localStorage.removeItem("userAnswers");
  localStorage.removeItem("expiryTime");
  localStorage.removeItem("currentIndex");

  //End the exam and render the result
  /*Stop the timer 
  compare the users answers to the actual answer and increment a counter for every correct answer
  take the counters value, divide it by the total no of questions and multiply by 100 to get the percentage
  use booleans, switch(Done) or if statements to get users grade
  update the dom to show users grade and how many answers they got right
  */
}

function progress() {
  width = ((currentQuestionIndex + 1) / noOfQuestions) * 100;
  progressBar.innerHTML = `<div class="progress-fill" style="width: ${width}%;"></div>`;
}
function initializeExam() {
  let storedSession = localStorage.getItem("storedQuestions");
  let storedExpiry = localStorage.getItem("expiryTime");
  let storedAnswers = localStorage.getItem("userAnswers");
  let storedIndex = localStorage.getItem("currentIndex"); // NEW

  if (storedSession && storedExpiry) {
    // RESUME EXAM
    console.log("Resuming saved exam...");
    userQuestions = JSON.parse(storedSession);

    if (storedAnswers) userAnswers = JSON.parse(storedAnswers);
    else userAnswers = new Array(noOfQuestions).fill(null);

    // Resume from saved index, or default to 0
    if (storedIndex) currentQuestionIndex = parseInt(storedIndex);
  } else {
    // NEW EXAM
    console.log("Starting fresh exam...");
    shuffleQuestions(qArray);

    // Clear storedQuestions before collecting new ones
    storedQuestions = [];
    collectQuestions(qArray);

    // Fill userQuestions immediately!
    userQuestions = [...storedQuestions];

    getEndTime();

    userAnswers = new Array(noOfQuestions).fill(null);
    currentQuestionIndex = 0; // Reset index for new exam
  }

  renderQuestions(currentQuestionIndex, userQuestions);
}

initializeExam();
time();
navigation();
