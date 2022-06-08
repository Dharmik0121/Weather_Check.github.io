let weather = {
    apiKey : "7619f158ee396996beab697379f3f443",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const { icon, description} = data.weather[0];
        const {temp,humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Weather in "+name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".discription").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + humidity + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function(){
       this.fetchWeather(document.querySelector(".input-search").value);
    }
};
document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".input-search")
.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})
// weather.fetchWeather("surat");