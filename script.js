function formDate(timestamp){
    let date=new Date(timestamp)
    let hours=date.getHours();
    let mins=date.getMinutes();
    if (mins<10) {
        mins=`0${mins}`;
    }
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];
    
    return`${day}, ${hours}:${mins}`;
}

 function formDay(timestamp){
    let date=new Date(timestamp*1000);
    let day=date.getDay();
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return days[day];
}
 function displayForecast(response){
    
     let forecast=response.data.daily;
     let forcastElement=document.querySelector("#forecast");
     forecastHTML=`<div class="row">`;
     
     forecast.forEach(function(day,index){
         if (index<6) { forecastHTML=forecastHTML+
                             `<div class="col-2">
                             <div class="weatherforecastpreview">
                             <div class="forecast-date">${formDay(day.dt)}</div>
                            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" 
                             alt="">
                             <div class="forecast-temperature">
                                 <span class="forecast-temperature-max">${Math.round(day.temp.max)}℃</span>
                                 <span class="forecast-temperature-min">${Math.round(day.temp.min)}℃</span>
                             </div>
                         </div>
                         </div>`;}
                 
                         
                        });
                   forecastHTML=forecastHTML+`</div>`;
     forcastElement.innerHTML=forecastHTML;

 }

function getForecast(coordinates){
    let apiKey="a3b981fcdb00e192a7a49927e31c8d54";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

}



function displayTemp(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidElement=document.querySelector("#humidIndex");
    let windElement=document.querySelector("#windSpeed");
    let weekdayElement=document.querySelector("#weekday");
    let iconElement=document.querySelector("#icon");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    weekdayElement.innerHTML=formDate(response.data.dt*1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    

    getForecast(response.data.coord)
}


function search(city){
    let apiKey="a3b981fcdb00e192a7a49927e31c8d54";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemp);

}


function handlesubmit(event){
    event.preventDefault();
    let cityInputElement=document.querySelector(".search-input");
    search(cityInputElement.value);
}

search("London")


let formElement=document.querySelector("#search-form");
formElement.addEventListener("submit",handlesubmit);
