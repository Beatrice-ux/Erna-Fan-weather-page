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



function displayTemp(response){
    console.log(response)
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidElement=document.querySelector("#humidIndex");
    let windElement=document.querySelector("#windSpeed");
    let weekdayElement=document.querySelector("#weekday");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    weekdayElement.innerHTML=formDate(response.data.dt*1000);
}



let apiKey="a3b981fcdb00e192a7a49927e31c8d54";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);




