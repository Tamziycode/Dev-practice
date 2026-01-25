# Advanced Form Validation Engine

A lightweight, extensible form validation library built with vanilla JavaScript. Features a rule-based validation system with real-time feedback, asynchronous server-side checks, conditional field logic, and password strength assessment. No dependencies required.

## Features

- Rule-based validation using simple data attributes
- Real-time validation with debounced input
- Async validation for server-side checks (username availability, etc.)
- Conditional fields that show/hide based on user input
- Visual password strength meter
- Password visibility toggle
- Custom error messages
- Fully extensible with custom rules
- Zero dependencies

## Installation

Include the files in your project:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Your form -->
    <script src="script.js"></script>
  </body>
</html>
```

## Usage

### Basic Example

Add validation rules to inputs using the `data-rules` attribute:

```html
<form id="advancedForm" novalidate>
  <div class="field-group">
    <label>Username</label>
    <input type="text" name="username" data-rules="required|min:3|isUnique" />
    <span class="error-msg"></span>
  </div>

  <div class="field-group">
    <label>Password</label>
    <input type="password" id="password" data-rules="required|isStrong" />
    <span class="error-msg"></span>
  </div>

  <button type="submit">Submit</button>
</form>
```

### Available Validation Rules

| Rule        | Syntax            | Description                                          |
| ----------- | ----------------- | ---------------------------------------------------- |
| `required`  | `required`        | Field must not be empty                              |
| `min`       | `min:n`           | Minimum character length (e.g., `min:3`)             |
| `noNumbers` | `noNumbers`       | Field cannot contain numbers                         |
| `matches`   | `matches:fieldId` | Must match another field value                       |
| `isUnique`  | `isUnique`        | Async check for uniqueness                           |
| `isStrong`  | `isStrong`        | Strong password: 8+ chars, uppercase, number, symbol |

Chain multiple rules with the pipe (`|`) separator:

```html
<input type="text" data-rules="required|min:5|noNumbers" />
```

### Conditional Fields

Show/hide fields dynamically based on other selections:

```html
<select id="accountType">
  <option value="personal">Personal</option>
  <option value="business">Business</option>
</select>

<div class="field-group hidden" id="companyGroup">
  <label>Company Name</label>
  <input type="text" name="companyName" data-rules="required" />
  <span class="error-msg"></span>
</div>
```

```javascript
document.getElementById("accountType").addEventListener("change", (e) => {
  const companyGroup = document.getElementById("companyGroup");
  companyGroup.classList.toggle("hidden", e.target.value !== "business");
});
```

## Creating Custom Rules

Add new validation rules by extending the `Rules` object in `script.js`:

### Synchronous Rules

```javascript
const Rules = {
  // Existing rules...

  isEmail: (val) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(val) || "Invalid email format";
  },

  maxLength: (val, length) => {
    return (
      val.length <= parseInt(length) || `Maximum ${length} characters allowed`
    );
  },

  isNumeric: (val) => {
    return /^\d+$/.test(val) || "Only numbers allowed";
  },
};
```

### Asynchronous Rules

For server-side validation:

```javascript
const Rules = {
  // Existing rules...

  checkEmail: async (val) => {
    if (!val) return true;

    return new Promise(async (resolve) => {
      const response = await fetch(`/api/check-email?email=${val}`);
      const data = await response.json();
      resolve(data.available || "Email already registered");
    });
  },
};
```

### Using Custom Rules

Once defined, use custom rules like any built-in rule:

```html
<input type="email" data-rules="required|isEmail" />
<input type="text" data-rules="required|maxLength:50" />
<input type="text" data-rules="isNumeric|min:10" />
```

## Password Features

The password field includes automatic strength assessment and visibility toggle:

```html
<div class="field-group">
  <label>Password</label>
  <div class="input-wrapper">
    <input type="password" id="password" data-rules="required|isStrong" />
    <button type="button" class="toggle-btn">Show</button>
  </div>
  <div class="strength-meter"><div class="bar"></div></div>
  <span class="error-msg"></span>
</div>
```

Strength levels (color-coded):

- Weak (red): Less than 6 characters
- Fair (orange): 6+ characters
- Good (yellow): 8+ characters with uppercase
- Strong (green): Includes special characters

## Configuration

### Adjust Debounce Delay

Change the validation delay (default: 400ms) in `script.js`:

```javascript
debounceTimers[input.name] = setTimeout(() => validateField(input), 400);
```

### Customize Colors

Modify validation colors in `style.css`:

```css
:root {
  --primary: #4f46e5;
  --error: #ef4444;
  --success: #10b981;
}
```

## Browser Support

Requires modern browsers with ES6+ support:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Project Structure

```
advanced-form-validator/
├── index.html          # Form markup
├── style.css           # Styling
├── script.js           # Validation logic
└── README.md           # Documentation
```

## License

MIT License - Free for personal and commercial use.
