/*So basically, all you need to do is to design and then request the data from the weather API and dislay required data into the proper sections of the app.*/

const apiKey = config.apiKey
let form = document.querySelector("#search-form")
let city = document.querySelector("#city-name")
let condition = document.getElementById("condition-text")
let input = document.querySelector("#search-input")
let currTemp = document.getElementById("temp")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind-speed")
let pressure = document.getElementById("pressure")
let temp = document.getElementById("feels-like")    
//This should be the container that ill use to iterate over the days given. (DONE) 
// plan to just write the html here once and update the dom instead of selecting elements and updating manually(DONE)
let forecastContainer = document.getElementById("forecast-container")






async function getWeather(place) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=8`)
        if(!response.ok){
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const forecast = await response.json() 
        console.log(forecast)

        updateDom(forecast)

    } catch (error) {
        console.error("Something went wrong")
    }

    
}

function updateDom(data){
    forecastContainer.innerHTML = "";
    city.innerHTML = data.location.name
    condition.innerHTML = data.current.condition.text
    currTemp.innerHTML = data.current.temp_c + "&deg;C"
    humidity.innerHTML = data.current.humidity + "%"
    wind.innerHTML = data.current.wind_kph + " km/h"
    pressure.innerHTML = data.current.pressure_mb + " hpa"
    temp.innerHTML = data.current.feelslike_c + "&deg;C"

    const forecastData = data.forecast.forecastday
    forecastData.forEach(e => {
        //this is where the values to be put into the dom are gotten
        let date = e.date
        let tempRange = e.day.maxtemp_c + "&deg;C / " + e.day.mintemp_c + "&deg;C"
        let icon = e.day.condition.icon


        //this is where the dom is updated for each day
        forecastContainer.innerHTML += `<div class="card forecast-card">
                <h3 class="day">${date}</h3>
                <img src="${icon}" alt="weather icon" class="weather-icon">
                <p class="temp-range">${tempRange}</p>
            </div>`
    });
    

}


form.addEventListener("submit" , (e) => {
    e.preventDefault()
    let searchQuery = input.value
    console.log(searchQuery)
    getWeather(searchQuery)
})
//wrap this in an event listener. Also get the actual value from the searchbar and not just undefined (DONE )


/*So now i need to perfect the weather api and get the values.
 it doesnt work now because of no searchQuery. 
 Probably be solved by an event listener  Done*/

 /*Perfected api call and value from response
  used input instead of the form to get values from user
  added event listener
 */

