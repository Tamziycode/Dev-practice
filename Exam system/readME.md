# Secure Online Exam System

A comprehensive Computer-Based Test (CBT) web application developed using **Vanilla JavaScript, HTML5, and CSS3**. This system simulates a secure examination environment featuring persistent state management, randomized questioning, and client-side integrity enforcement.

---

## Project Overview

This application provides a robust platform for administering online assessments. It is engineered to handle session persistence, ensuring that user progress is preserved across page reloads. The system includes an integrated anti-cheat module designed to monitor and restrict unauthorized user interactions during the assessment period.

---

## Key Features

### Core Functionality

- **Dynamic Data Loading:** Questions are loaded dynamically from an external data source (`data.js`), facilitating easy updates to the question bank.

- **Randomization Engine:** Implements the Fisher–Yates shuffle algorithm to randomize both question order and option arrangement for each session, reducing predictability.

- **State Persistence:** Utilizes `localStorage` to maintain exam state. This ensures that the timer, current question index, and selected answers are preserved if the browser is refreshed or closed accidentally.

- **Absolute Timing Logic:** Calculates remaining time using absolute timestamps (`Date.now()`), preventing manipulation via tab suspension or background throttling.

---

### Integrity & Security

- **Fullscreen Enforcement:** Mandates fullscreen mode upon exam initiation. The system detects exit attempts and triggers automatic submission or warnings.

- **Focus Monitoring:** Uses the Page Visibility API and window blur events to detect tab switching or window minimization.

- **Input Restriction:** Disables context menus (right-click), text selection, and clipboard operations (Copy/Paste/Cut) to reduce content exfiltration.

- **Keyboard Intercept:** Blocks specific key combinations associated with developer tools and printing (e.g., `F12`, `Ctrl+P`).

---

### User Interface

- **Responsive Design:** Optimized for multiple viewport sizes using CSS Flexbox and Grid.

- **Navigation System:** Random-access navigation allows users to jump to specific questions. Visual indicators display question status (Active, Answered, Unanswered).

- **Dark Mode:** Implemented using CSS variables to reduce eye strain during extended sessions.

- **Results Dashboard:** Generates an immediate performance summary including score, percentage, letter grade, and visual pass/fail status.

---

## Technical Structure

```
/
├── index.html   # Application entry point and DOM structure
├── style.css    # Global styling, theming, and responsive layout
├── script.js    # Business logic: state management, timer, grading, security
├── data.js      # Data layer: question objects array
└── README.md    # Project documentation
```

---

## Setup and Installation

1. Clone the repository to your local machine.
2. Ensure all files (`index.html`, `script.js`, `style.css`, `data.js`) are in the same directory.
3. Open `index.html` in a modern web browser (Chrome, Edge, Firefox, or Safari).
4. Optional but recommended: serve the files using a local development server (e.g., VS Code Live Server) to avoid local file restrictions in some browsers.

---

## Configuration

Exam parameters can be modified directly within `script.js`.

```javascript
// Define the sample size of questions
let noOfQuestions = 50;

// Define the duration in milliseconds (example: 30 minutes)
let examDuration = 30 * 60 * 1000;
```

---

## Data Management

Questions are stored in `data.js` as an array of objects. Follow this schema when updating or adding questions:

```javascript
const questions = [
  {
    id: 1,
    question: "Question text here",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option B", // Must exactly match one of the options
  },
];
```

---

## License

This project is open-source and available under the **MIT License**.
