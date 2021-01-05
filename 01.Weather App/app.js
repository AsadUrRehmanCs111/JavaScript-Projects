let now = new Date()
const api = {
    key: "9a3e6c172f664fef85b185931210501",
    baseUrl: " https://api.weatherapi.com/v1/current.json"
}

const searchBox = document.querySelector('.search-box')
searchBox.addEventListener('keypress', setQuery)

function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value)
        //console.log(searchBox.value)
    }
}

function getResults(query) {
    fetch(`${api.baseUrl}?q=${query}&units=matric&key=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults)
}

function displayResults(weather) {
    console.log(weather)

    // changing city and CountryName
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.location.name}, ${weather.location.country}`;

    //Setting current Time and Date
    let date = document.querySelector('.location .date')
    date.innerHTML = dateMaker(now)

    // Adding Tepurature
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${weather.current.temp_c}<span>°c</span>`;

    // Setting Weather Type
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = weather.current.condition.text;
}

function dateMaker(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saurday"]

    // getting Day using date function 
    let day = days[d.getDay()]

    // getting months using date function 
    let month = months[d.getMonth()]

    // getting date using date function 
    let date = d.getDate()

    // getting year using date function 
    let year = d.getFullYear()



    return `${day} ${date} ${month},${year}`
}