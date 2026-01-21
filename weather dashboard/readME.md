# Weather Dashboard

A responsive, real-time weather tracking application built with Vanilla JavaScript, HTML5, and CSS3. This application interfaces with the WeatherAPI to retrieve and display current weather conditions and forecast data for cities worldwide.

## Project Overview

This project serves as a practical implementation of asynchronous programming patterns in JavaScript, specifically utilizing the Fetch API and Async/Await syntax to handle remote data requests. The application features a clean, responsive user interface designed with modern CSS Grid and Flexbox layouts, ensuring usability across desktop, tablet, and mobile devices.

## Features

- **Real-Time Data Retrieval:** Fetches live weather data including temperature, humidity, wind speed, pressure, and "feels like" temperature.
- **Location Search:** Allows users to query weather conditions for any global city via a search interface.
- **Forecast Integration:** Displays a multi-day forecast including daily high/low temperatures and weather condition icons.
- **Dynamic DOM Manipulation:** Updates the user interface instantly without requiring page reloads.
- **Responsive Design:** Adapts layout dynamically for mobile (single column), tablet (grid), and desktop views.
- **Error Handling:** Includes basic error logging for failed API requests or invalid city queries.

## Technologies Used

- **Frontend:** HTML5, CSS3
- **Scripting:** JavaScript (ES6+)
- **API:** WeatherAPI.com
- **Icons:** Font Awesome 6.4.0
- **Version Control:** Git

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository**

2.  **API Configuration**
    This project requires an API key from WeatherAPI.com. For security, the key is stored in a separate configuration file that is typically excluded from version control.

    - Create a file named `config.js` in the root directory.
    - Add the following code to the file, replacing `YOUR_API_KEY_HERE` with your actual API key:
      ```javascript
      const config = {
        apiKey: "YOUR_API_KEY_HERE",
      };
      ```

3.  **Launch the Application**
    Open `index.html` in your preferred web browser.

## Usage

1.  Enter a city name in the search bar located at the top of the dashboard.
2.  Press "Enter" or submit the form.
3.  The application will asynchronously fetch data and populate the:
    - **Hero Section:** Current city name, temperature, and condition text.
    - **Stats Grid:** Detailed metrics for humidity, wind speed, pressure, and thermal sensation.
    - **Forecast Grid:** Upcoming weather conditions for the next 3 days.

## Project Structure

- `index.html`: The semantic markup structure of the application.
- `style.css`: Contains all styling rules, responsive media queries, and layout definitions.
- `script.js`: Handles application logic, API requests, data parsing, and DOM updates.
- `config.js`: (User-created) Stores sensitive API credentials.

## License

This project is open-source and available for educational purposes.
