let searchbox = document.getElementById("searchbox");
let searchbutton = document.getElementById("searchbutton");
let city = document.getElementById("cityName");
let Temp = document.getElementById("temp");
let SKY = document.getElementById("sky");
let Wind = document.getElementById("wind");

searchbutton.addEventListener('click', () => {
    let name = searchbox.value;
    searchWeather(name);
});

const searchWeather = (Name) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + Name + "&appid=6911f63278000517accf24eb072f5b14&units=metric")
        .then((res) => res.json())
        .then((Data) => { 
            UpdatePage(Data);
        })
        .catch((err) => {
            console.error("Error fetching weather data:", err);
        });
};

const UpdatePage = (Data) => {
    if (Data.cod !== 200) {
        city.innerHTML = "City not found!";
        Temp.innerHTML = "";
        SKY.innerHTML = "";
        Wind.innerHTML = "";
        return;
    }

    let temperature = Data.main.temp;
    let Nameofcity = Data.name;
    let clouds = Data.weather[0].description;
    let Speed = Data.wind.speed; 

    Temp.innerHTML = temperature + " °C";
    city.innerHTML = Nameofcity;
    SKY.innerHTML = clouds;
    Wind.innerHTML = "Wind speed: " + Speed + " m/s";
};
